# Update Article

## view
* 加入編輯連結，在 `/resources/views/articles/index.blade.php` 的 table 內加入編輯連結

	```
	// ...
	<th>編輯</th>
	// ...
	<td>
		{!! link_to_route('articles.edit', '編輯', $article) !!}
	</td>
	// ...
```

* 修改 `/app/Http/Controllers/ArticlesController.php` 下的 edit method，取出該筆物件，並且導入 articles.edit 樣板

	```
	public function edit($id)
	{
		$article = Article::findOrFail($id);
		return view('articles.edit')->withArticle($article);
	}
```

* views 資料夾 `/resources/views/articles/` 新增 `edit.blade.php`，新增**修改用的** form 表單

	```
	@if($errors->any())
		<ul>
			@foreach($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	@endif

	{!! Form::model($article, ['method' => 'PUT', 'route' => ['articles.update', $article]]) !!}
		{!! Form::label('title', '標題'); !!}
		{!! Form::text('title', null, ['placeholder="請輸入名稱.."']); !!}
		<br/>
		{!! Form::label('content', '內容'); !!}
		{!! Form::textarea('content', null, ['placeholder="請輸入內容.."']); !!}
		<hr/>
		{!! Form::submit('送出'); !!}
	{!! Form::close(); !!}
```

	> 如 [Create page](mds/laraval/crud/step2.md) 有提到的**表單驗證**時用到的 **errors**，所以加入 `@if($errors->any())` 該段程式

## post method
* 編輯 `/app/Http/Controllers/ArticlesController.php` 下的 update method，依步驟作**取出資料**、**表單驗證**、**更新資料**、**設定 flash_message**、**導頁**

	```
	public function update(Request $request, $id)
	{
		$article = Article::findOrFail($id);

		$this->validate($request, [
			'title' => 'required|max:255',
			'content' => 'required'
		]);

		$input = $request->all();

		$article->fill($input)->save();

		Session::flash('flash_message', '儲存成功!');

		return redirect()->route('articles.index');
	}
```
