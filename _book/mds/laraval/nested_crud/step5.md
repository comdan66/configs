# Delete Article

## view
* 加入刪除連結，在 `/resources/views/articles/comments/index.blade.php` 的 table 內加入刪除連結

	```
	// ...
	<th>刪除</th>
	// ...
	<td>
		{!! Form::open(['method' => 'DELETE', 'route' => ['articles.comments.destroy', $article, $comment]]) !!}
			{!! Form::submit('刪除') !!}
		{!! Form::close() !!}
	</td>
	// ...
```

## post method
* 編輯 `/app/Http/Controllers/ArticleCommentsController.php` 下的 destroy method，依步驟作**取出資料**、**刪除**、**設定 flash_message**、**導頁**

	```
	public function destroy($articleId, $commentId)
	{
		$article = Article::findOrFail($articleId);

		$article->comments ()
				->findOrFail ($commentId)
				->delete();

		Session::flash('flash_message', '刪除成功');

		return redirect()->route ('articles.comments.index', $article);
	}
```
