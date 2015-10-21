# Read Comment

## list page
* 因為需要顯示 flash_message 所以編輯 `/resources/views/articles/comments/index.blade.php`，加入顯示 flash_message

	```
	@if(Session::has('flash_message'))
		{{ Session::get('flash_message') }}
	@endif
```

* 列出所有留言功能，編輯 `/resources/views/articles/comments/index.blade.php` 並以迴圈方式顯示出來
* 因為 Article model 已經定義了 comments method，所以可以直接對 Article 一對多的 Comment 做讀取

	```
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>內容</th>
			</tr>
		</thead>
		<tbody>
			@if ($article->comments->count ())
				@foreach ($article->comments as $comment)
					<tr>
						<td>{{ $comment->id }}</td>
						<td>{{ $comment->content }}</td>
					</tr>
				@endforeach
			@else
				<tr>
					<td colspan='2'>沒有資料！</td>
				</tr>
			@endif
		</tbody>
	</table>
```













## show page
* 檢視詳細頁面，在 `/resources/views/articles/comments/index.blade.php` 的 table 內加入細節連結

	```
	// ...
	<th>細節</th>
	// ...
	<td>
		{!! link_to_route('articles.comments.show', '細節', [$article, $comment]) !!}
	</td>
	// ...
```

	>  照 RESTful 規則，會有兩個傳遞參數，分別是 article ID、comment ID，故 link_to_route 第三個參數要改成 array 的方式

* 編輯 `/app/Http/Controllers/ArticleCommentsController.php` 下的 show method，取出該筆資料並且 Render view

	```
	public function show($articleId, $commentId)
	{
		$article = Article::findOrFail($articleId);
		$comment = $article->comments ()->findOrFail ($commentId);
		return view('articles.comments.show')
						->with('comment', $comment);
	}
```

	> 一樣可以使用 `$article->comments ()` 再去下 ORM method，所以可以下 findOrFail 藉由 `$commentId` 找到 article 下的 comments 同時又符合 `$commentId` 的資料

* views 資料夾 `/resources/views/articles/comments/` 新增 `show.blade.php` 顯示詳細資料

	```
	<article>
		<h1>{{ $comment->article->title }}</h1>
		<hr/>
		<section>
			{{ $comment->content }}
			<hr/>
			<div>更新時間：{{ $comment->updated_at }}</div>
			<div>新增時間：{{ $comment->created_at }}</div>
		</section>
	</article>
	<hr/>
	
	{!! link_to_route('articles.comments.index', '列表', $comment->article) !!}
```

* `$comment->article` 會發生錯誤，主要是因為尚未新增關聯，所以打開 `/app/Comment.php`，加入 belongsTo 的 method

	```
	public function article()
	{
		return $this->belongsTo('App\Article');
	}
```

