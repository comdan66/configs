# 巢狀 CRUD(nested)
* 請先完成 [基礎 CRUD](crud.md)
* 依續 [基礎 CRUD](crud.md)，以下以 article(文章)、comments(留言) 為範例說明

## 新增 migration
* 新增一筆 migration `php artisan make:migration create_comments_table`
* 編輯 `/database/migrations/` 剛剛新增的 migration file

	```
	public function up()
	{
		Schema::create('comments', function (Blueprint $table) {
		$table->increments('id')->unsigned()->comment ('主 Key');
		$table->text('content')->comment ('內容');

		$table->integer('article_id')->unsigned ();
		$table->foreign('article_id')->references('id')->on('articles');
		$table->timestamps();
		});
	}
	public function down()
	{
		Schema::drop('comments');
	}
```
* 執行 migration `php artisan migrate`

## 新增 controller
* 新增 controller `php artisan make:controller ArticleCommentsController`

## 新增 model
* 新增 model `php artisan make:model Comment`


## 設定 routes
* 編輯 `/app/Http/routes.php`
* 新增 `Route::resource('articles.comments', 'ArticleCommentsController');`


## RESTful Route rul

* `link_to_route()` 遇到兩個變數狀況時，第三個參數則可放 array

| Method | url | 行為 | route 名稱 |
| -- | -- | -- | -- |
| GET    | /articles/{article id}/comments                   | index       | articles.comments.index |
| GET    | /articles/{article id}/comments/create            | create      | articles.comments.create |
| POST   | /articles/{article id}/comments/                  | create post | articles.comments.store |
| GET    |	 /articles/{article id}/comments/{comment id}      | show        | articles.comments.show |
| GET    | /articles/{article id}/comments/{comment id}/edit | edit        | articles.comments.edit |
| PUT    | /articles/{article id}/comments/{comment id}      | edit post    | articles.comments.update |
| DELETE | /articles/{article id}/comments/{comment id}      | destroy     | articles.comments.destroy |

## 開始編輯
* [Comments Controller](nested_crud/step1.md)
* [Create Comment](nested_crud/step2.md)
* [Read Comment](nested_crud/step3.md)
* [Update Comment](nested_crud/step4.md)
* [Delete Comment](nested_crud/step5.md)

---

程式碼範例：[OA's practice laravel5 Nested CRUD](https://github.com/comdan66/practice_laravel5/tree/Nested_CRUD)

---

相關參考：

* [Nested resources controllers structure](https://laracasts.com/discuss/channels/laravel/nested-resources-controllers-structure)
* [官方英文文件 - http://laravelcollective.com/docs/5.1/html](http://laravelcollective.com/docs/5.1/html)
