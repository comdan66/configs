# 編輯 Article Comments Controller
* 在 `/resources/views/articles/index.blade.php` 的 table 內加入檢視留言連結

	```
	// ...
	<th>檢視留言</th>
	// ...
	<td>
		{!! link_to_route('articles.comments.index', '檢視留言', $article) !!}
	</td>
	// ...
```

* 開啟 `/app/Http/Controllers/ArticleCommentsController.php` 檔案開頭加入 `use App\Article;` 加入 Model

* 修改 index method，新增參數取出 Article ID，取得該筆資料後取出所有 Comment，並且導入 articles.comments.index 樣板

	```
	public function index(id)
	{
		$article = Article::findOrFail($id);
		return view('articles.comments.index', [
				'article' => $article
			]);
	}
```

* 因為 Article 下沒有 comments 的 model，所以開啟編輯 `/App/Article.php` 加入 comments method

	```
	public function comments ()
	{
		return $this->hasMany('App\Comment');
	}
```


* views 資料夾 `/resources/views/articles` 下建立 `comments` 目錄，並且新增編輯 `index.blade.php`，如 [article index](../crud/step2.md) 開始一樣加入兩個連結。

	```
	{!! link_to_route('articles.index', '文章列表') !!}
	{!! link_to_route('articles.comments.index', '留言列表', $article) !!}
	{!! link_to_route('articles.comments.create', '新增留言', $article) !!}
	<hr />
	<hr />
```

	> * 因為是 article 下的 comments 巢狀，為了符合 RESTful 的網址定義，所以 link_to_route 都要加上第三個參數，以設定 article ID
	> * link_to_route 第三個參數正常來說是要放 `$article->id`，但如果放 Model object 那 Laraval 會自動提取 id