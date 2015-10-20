# Route

## 常用 Request Method:
* GET `Route::get('/', function () { /**/ });`
* POST `Route::post('articles/store', function () { /**/ });`
* PUT `Route::put('articles/update', function () { /**/ });`
* DELETE `Route::delete('articles/destroy', function () { /**/ });`

	> 給予名稱，便於使用函式取得連結，如以下範例：

	```
	Route::get('articles/profile', ['as' => 'profile', function () { /**/ }]);

	// 取得 url
	$url = route('profile');
	
	// 取得 導頁
	redirect()->route('profile');
	```

## 普通 RESTful
* 以 [articles](mds/laraval/crud.md) 為範例，設定如下：

	```
	Route::resource('articles', 'ArticlesController');
```

* 名稱對應

| Method | url | 行為 | route 名稱 |
| -- | -- | -- | -- |
| GET    | /articles                   | index       | articles.index |
| GET    | /articles/create            | create      | articles.create |
| POST   | /articles                   | create post | articles.store |
| GET    |	 /articles/{article id}      | show        | articles.show |
| GET    | /articles/{article id}/edit | edit        | articles.edit |
| PUT    | /articles/{article id}      | edit pos    | article.update |
| DELETE | /articles/{article id}      | destroy     | article.destroy li

---

相關參考：

* [英文官網 - http://laravel.com/](http://laravel.com/)
* [英文文件官網 - http://laravelcollective.com/](http://laravelcollective.com/)
* [中文官網 - http://laravel.tw/](http://laravel.tw/)
	