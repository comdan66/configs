# Create Article

## view
* 修改 `/app/Http/Controllers/ArticlesController.php` 下的 create method，並且導入 articles.create 樣板

	```
    public function create()
    {
        return view('articles.create');
    }
```

* views 資料夾 `/resources/views/articles/` 新增 `create.blade.php`，新增 form 表單

	```
	{!! Form::model(null, ['route' => ['articles.store']]); !!}
		{!! Form::label('title', '標題'); !!}
		{!! Form::text('title', null, ['placeholder="請輸入名稱.."']); !!}
		<br/>
		{!! Form::label('content', '內容'); !!}
		{!! Form::textarea('content', null, ['placeholder="請輸入內容.."']); !!}
		<hr/>
		{!! Form::submit('送出'); !!}
	{!! Form::close(); !!}
```

	> 如有錯誤不能使用 form 的話，請查閱 [此章節](../crud.md) 的**加入 From、html 套件**，檢查是否有加入。

## post method
* 編輯 `/app/Http/Controllers/ArticlesController.php` 下的 store method，依步驟作**表單驗證**、**新增資料**、**設定 flash_message**、**導頁**

	```
	public function store(Request $request)
	{
		$this->validate($request, [
			'title' => 'required|max:255',
			'content' => 'required',
		]);

		$input = $request->all();
		Article::create($input);

		Session::flash('flash_message', '文章新增成功！');

		return redirect()->route ('articles.index');
	}
```

* 使用 flash_message 必須要加入使用 Session，所以於  `/app/Http/Controllers/ArticlesController.php` 開頭加入 `use Session;`

* 因為 `$input = $request->all()` 會將所有 POST 變數都取出來，所以當 `Article::create($input);` 時會發生錯誤，故需編輯 Model `/App/Article.php` 加入可填寫條件

	```
	protected $fillable = [
		'title',
		'content'
	];
```

* 若是表單驗證失敗，則會回到 create 頁面，並且多一個變數**提示錯誤**，故在 `/resources/views/articles/create.blade.php` 加入提示錯誤

	```
	@if($errors->any())
		<ul>
			@foreach($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	@endif
```

	> 錯誤訊息可在 `/resources/lang/` 下，依不同語系做修改，語系設定可以修改 `/config/app.php` 內的 **locale**、**fallback_locale**
