# EC2 Ubuntu MySQL 筆記

## 安裝
* `sudo apt-get install mysql-server mysql-client`
* 輸入密碼
* 輸入確認密碼

## 驗證是否安裝成功
* `mysql -u root -p`
* 輸入密碼登入

## 進階
* 開啟外部連接權限，修改 `/etc/mysql/my.cnf`，改 `bind-address` 值為 `0.0.0.0`(任何地方)
* 重新啟動 MySQL，`sudo service mysql restart`

	> 參考 [https://kylegoslin.wordpress.com/2012/05/18/109/](https://kylegoslin.wordpress.com/2012/05/18/109/)
