# Read Article

## list page
* 因為需要顯示 flash_message 所以編輯 `/resources/views/articles/index.blade.php`，加入顯示 flash_message

	```
	@if(Session::has('flash_message'))
		{{ Session::get('flash_message') }}
	@endif
```

* 列出所有文章功能，編輯 `/resources/views/articles/index.blade.php` 並以迴圈方式顯示出來

	```
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>標題</th>
				<th>內容</th>
			</tr>
		</thead>
		<tbody>
			@if ($articles->count ())
				@foreach ($articles as $article)
					<tr>
						<td>{{ $article->id }}</td>
						<td>{{ $article->title }}</td>
						<td>{{ $article->content }}</td>
					</tr>
				@endforeach
			@else
				<tr>
					<td colspan='3'>沒有資料！</td>
				</tr>
			@endif
		</tbody>
	</table>
```

## show page
* 檢視詳細頁面，在 `/resources/views/articles/index.blade.php` 的 table 內加入細節連結

	```
	// ...
	<th>細節</th>
	// ...
	<td>
		{!! link_to_route('articles.show', '細節', $article) !!}
	</td>
	// ...
```

* 編輯 `/app/Http/Controllers/ArticlesController.php` 下的 show method，取出該筆資料並且 Render view

	```
	public function show($id)
	{
		$article = Article::findOrFail($id);
		return view('articles.show')->with('article', $article);
	}
```

* views 資料夾 `/resources/views/articles/` 新增 `show.blade.php` 顯示詳細資料

	```
	<article>
		<h1>{{ $article->title }}</h1>
		<hr/>
		<section>
			{{ $article->content }}
			<hr/>
			<div>更新時間：{{ $article->updated_at }}</div>
			<div>新增時間：{{ $article->created_at }}</div>
		</section>
	</article>
	<hr/>
	{!! link_to_route('articles.index', '列表') !!}
```
