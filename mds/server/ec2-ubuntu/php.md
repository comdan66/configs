# EC2 Ubuntu MySQL 筆記

## 安裝
* 更新 apt-get，指令 `sudo apt-get update`
* 安裝 php 指令 `sudo apt-get install php5 libapache2-mod-php5`

## 驗證是否安裝成功
* 在 DocumentRoot 下新增 `info.php`

	```
<?php
    phpinfo ();
?>
```
* 並且輸入網址 `http://127.0.0.1/info.php` 後便可以瀏覽結果