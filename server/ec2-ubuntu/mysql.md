## 安裝
1. sudo apt-get install mysql-server mysql-client
2. 輸入密碼
3. 輸入確認密碼

## 驗證
1. mysql -u root -p
2. 輸入密碼

## 進階
1. 開啟外部連接權限，修改 `/etc/mysql/my.cnf`，改 `bind-address` 值為 `0.0.0.0`(任何地方)，[https://kylegoslin.wordpress.com/2012/05/18/109/](https://kylegoslin.wordpress.com/2012/05/18/109/)
2. 重新啟動 MySQL，`sudo service mysql restart`
