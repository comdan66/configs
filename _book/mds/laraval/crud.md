# 基礎 CRUD
* 請先安裝好 Composer、Laravel
* 以下以 article(文章) 為範例說明

## 新增
* `laravel new article`

## 開啟 cache storage
* `chmod -R 777 storage`

## 設定 server
* hosts add `127.0.0.1        article.ioa.tw`
* vhosts add Directory `~/www/article/public`
* apache restart `sudo apachectl restart`
* browser `article.ioa.tw`

## 環境變數
* 修改 `/.env` 資料庫連線方式，分別填入**連線方式**、**資料庫名稱**、**使用者**、**密碼**

	```
	DB_HOST=
	DB_DATABASE=
	DB_USERNAME=
	DB_PASSWORD=
```

## 資料庫
* 新增一個資料庫

## 新增 migration
* 新增一筆 migration `php artisan make:migration create_articles_table`
* 編輯 `/database/migrations/` 剛剛新增的 migration file

	```
	public function up()
	{
		Schema::create('articles', function (Blueprint $table) {
			$table->increments('id')->unsigned()->comment ('主 Key');
			$table->string('title')->comment ('標題');
			$table->text('content')->comment ('內容');
			$table->timestamps();
		});
	}
	public function down()
	{
		Schema::drop('articles');
	}
```
* 執行 migration `php artisan migrate`
> 退回指令 `php artisan migrate:rollback`

## 新增 controller
* 新增 controller `php artisan make:controller ArticlesController`

## 新增 model
* 新增 model `php artisan make:model Article`


## 設定 routes
* 編輯 `/app/Http/routes.php`
* 新增 `Route::resource('articles', 'ArticlesController');`
* browser `article.ioa.tw/articles`

## RESTful Route rul

* 新增連結時，可以使用函式 `link_to_route()` 的方式，例如 `{!! link_to_route('articles.index', '列表') !!}`，第一個變數可參考下表的 **route 名稱**
* 也可以使用 `<a href="{{ route('articles.index') }}">列表</a>`，函式 `route()` 的第一個變數可參考下表的 **route 名稱**

| Method | url | 行為 | route 名稱 |
| -- | -- | -- | -- |
| GET    | /articles                   | index       | articles.index |
| GET    | /articles/create            | create      | articles.create |
| POST   | /articles                   | create post | articles.store |
| GET    |	 /articles/{article id}      | show        | articles.show |
| GET    | /articles/{article id}/edit | edit        | articles.edit |
| PUT    | /articles/{article id}      | edit pos    | article.update |
| DELETE | /articles/{article id}      | destroy     | article.destroy |


## 加入 From、html 套件
* 編輯 `composer.json`
* require 加入 `laravelcollective/html`

	```
	"require": {
	    "laravelcollective/html": "5.1.*"
	}
```
* 更新 `composer update`
> 這步驟會有點久....

* 修改 cache 權限 `chmod -R 777 bootstrap/cache`


* 修改 `config/app.php`，providers 加入 `Collective\Html\HtmlServiceProvider::class,`，aliases 加入 `'Form' => Collective\Html\FormFacade::class,` 以及 `'Form' => Collective\Html\FormFacade::class,`

	```
	'providers' => [
		// ...
		Collective\Html\HtmlServiceProvider::class,
    	// ...
	],
```

	```
	'aliases' => [
		// ...
		'Form' => Collective\Html\FormFacade::class,
		'Html' => Collective\Html\HtmlFacade::class,
		// ...
	],
```

## 開始編輯
* [Articles Controller](mds/laraval/crud/step1.md)
* [Create page](mds/laraval/crud/step2.md)
* [Read page](mds/laraval/crud/step3.md)
* [Update page](mds/laraval/crud/step4.md)
* [Delete page](mds/laraval/crud/step5.md)

---

程式碼範例：[OA's practice laravel5 CRUD](https://github.com/comdan66/practice_laravel5/tree/Base_CRUD)

---

相關參考：

* [CRUD (Create Read Update Delete) in a Laravel App](http://www.sitepoint.com/crud-create-read-update-delete-laravel-app/)
* [官方英文文件 - http://laravelcollective.com/docs/5.1/html](http://laravelcollective.com/docs/5.1/html)
