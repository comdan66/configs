# Create Comment

## view
* 修改 `/app/Http/Controllers/ArticleCommentsController.php` 下的 create method，讀出該筆文章，並且導入 articles.comments.create 樣板

	```
	public function create($id)
	{
		$article = Article::findOrFail($id);
		return view('articles.comments.create', [
				'article' => $article
			]);
	}
```

* views 資料夾 `/resources/views/articles/comments` 新增 `create.blade.php`，新增 form 表單

	```
	{!! Form::model(null, ['route' => ['articles.comments.store', $article]]); !!}
		{!! Form::label('content', '內容'); !!}
		{!! Form::textarea('content', null, ['placeholder="請輸入內容.."']); !!}
		<hr/>
		{!! Form::submit('送出'); !!}
	{!! Form::close(); !!}
```

	> form 的 route 除了給予名稱，還要記得給予 article，以產生符合 RESTful 的網址

## post method
* 編輯 `/app/Http/Controllers/ArticleCommentsController.php` 下的 store method，依步驟作**取出資料**、**表單驗證**、**新增資料**、**設定 flash_message**、**導頁**
* 跟 [Create Article](../crud/step2.md) 的差異是新增的方式不同，因為是關聯的關係，所以可以直接對 `$article->comments ()` 做 create

	```
	public function store(Request $request, $id)
	{
		$article = Article::findOrFail($id);
		$this->validate($request, [
			'content' => 'required',
		]);

		$input = $request->all();
		$article->comments ()->create ($input);

		Session::flash('flash_message', '留言新增成功！');

		return redirect()->route ('articles.comments.index', $article);
	}
```

* 使用 flash_message 必須要加入使用 Session，所以於  `/app/Http/Controllers/ArticleCommentsController.php` 開頭加入 `use Session;`

* 因為 `$input = $request->all()` 會將所有 POST 變數都取出來，所以當 create comment 時會發生錯誤，故需編輯 Model `/App/Comment.php` 加入可填寫條件

	```
	protected $fillable = [
		'content'
	];
```

* 若是表單驗證失敗，則會回到 create 頁面，並且多一個變數**提示錯誤**，故在 `/resources/views/articles/comments/create.blade.php` 加入提示錯誤

	```
	@if($errors->any())
		<ul>
			@foreach($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	@endif
```


