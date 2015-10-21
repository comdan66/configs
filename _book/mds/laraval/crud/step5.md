# Delete Article

## view
* 加入刪除連結，在 `/resources/views/articles/index.blade.php` 的 table 內加入刪除連結

	```
	// ...
	<th>刪除</th>
	// ...
	<td>
		{!! Form::open(['method' => 'DELETE', 'route' => ['articles.destroy', $article]]) !!}
			{!! Form::submit('刪除') !!}
		{!! Form::close() !!}
	</td>
	// ...
```

	> * 因為一般的超連結都使使用 GET 的方式，不能夠做到 DELETE，所以 Laraval 必須使用 Form 表單的方式發送 DELETE
	> * 其實深入研究的話，Laraval 的 Form 所做的 PUT、DELETE 皆是使用 POST，只是在表單內藏了一個 hidden 元素作為判斷
	> * 有興趣的話可以使用 chrome 的開發工具 > 檢視其元素 就可以知道

## post method
* 編輯 `/app/Http/Controllers/ArticlesController.php` 下的 destroy method，依步驟作**取出資料**、**刪除**、**設定 flash_message**、**導頁**

	```
	public function destroy($id)
	{
		$article = Article::findOrFail($id);

		$article->delete();

		Session::flash('flash_message', '刪除成功');

		return redirect()->route('articles.index');
	}
```
