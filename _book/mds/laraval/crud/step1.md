# 編輯 Articles Controller
* 開啟 `/app/Http/Controllers/ArticlesController.php`
* 檔案開頭加入 `use App\Article;` 加入 Model

* 修改 index method，取出所有 Article，並且導入 articles.index 樣板

	```
    public function index()
    {
        return view('articles.index', [
					'articles' => Article::all()
				]);
    }
```

* views 資料夾 `/resources/views/` 下建立 `articles` 目錄，並且新增 `index.blade.php`，編輯加入兩個連結。

	```
	{!! link_to_route('articles.index', '列表') !!}
	{!! link_to_route('articles.create', '新增') !!}
	<hr />
```
