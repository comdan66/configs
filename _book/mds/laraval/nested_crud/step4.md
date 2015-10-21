# Update Comment

## view
* 加入編輯連結，在 `/resources/views/articles/comments/index.blade.php` 的 table 內加入編輯連結

	```
	// ...
	<th>編輯</th>
	// ...
	<td>
		{!! link_to_route('articles.comments.edit', '編輯', [$article, $comment]) !!}
	</td>
	// ...
```

* 修改 `/app/Http/Controllers/ArticleCommentController.php` 下的 edit method，取出物件，並且導入 articles.comments.edit 樣板

	```
	public function edit($articleId, $commentId)
	{
		$article = Article::findOrFail($articleId);
		$comment = $article->comments ()->findOrFail ($commentId);
		return view('articles.comments.edit')
					->with('article', $article)
					->with('comment', $comment);
	}
```

* views 資料夾 `/resources/views/articles/comments/` 新增 `edit.blade.php`，新增**修改用的** form 表單

	```
	@if($errors->any())
		<ul>
			@foreach($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	@endif

	{!! Form::model($comment, ['method' => 'PUT', 'route' => ['articles.comments.update', $article, $comment]]) !!}
		{!! Form::label('content', '內容'); !!}
		{!! Form::textarea('content', null, ['placeholder="請輸入內容.."']); !!}
		<hr/>
		{!! Form::submit('送出'); !!}
	{!! Form::close(); !!}
```

	> `Form::model` 內的 `route` 要特別注意因為 RESTful 的關係，所以一樣需要兩個參數

## post method
* 編輯 `/app/Http/Controllers/ArticleCommentsController.php` 下的 update method，依步驟作**取出資料**、**表單驗證**、**更新資料**、**設定 flash_message**、**導頁**

	```
	public function update(Request $request, $articleId, $commentId)
	{
		$article = Article::findOrFail($articleId);

		$this->validate($request, [
			'content' => 'required'
		]);

		$input = $request->all();

		$comment = $article->comments ()
						   ->findOrFail ($commentId)
						   ->fill ($input)
						   ->save ();

		Session::flash('flash_message', '儲存成功!');

		return redirect()->route ('articles.comments.index', $article);
```

	> 一樣可以使用 ORM 關聯方式，找出該筆 comment 在做更新！