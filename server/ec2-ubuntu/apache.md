## 安裝
1. sudo apt-get install apache2

## 驗證
1. 安裝完後便可以開啟瀏覽器並且輸入網址 http://127.0.0.1 後，便可以瀏覽

> 至 `/etc/apache2/sites-available` 查詢 **DocumentRoot**
> 
> ※ 預設 Apache 的根目錄為 `/var/www/html`，將其更改為你所需要的位置。

## 進階

###  將 MySQL 設定可支援 php 使用

1. `apt-cache search php5`
2. `apt-get install php5-mysql php5-curl php5-gd php5-intl php-pear php5-imagick php5-imap php5-mcrypt php5-memcache php5-ming php5-ps php5-pspell php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl`
3. 重新啟動 apache，`sudo service apache2 restart`

### vhost
1. 修改 apache2.conf Directory 路徑，`sudo nano /etc/apache2/apache2.conf`

	```
    <Directory /home/ubuntu/www/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>
```
2. 複製一份自己的設定，`cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/my.conf`
3. 設定系統時間，若有設定過則免此步驟，`sudo locale-gen zh_TW.UTF-8`
4. 載入使用，`sudo a2ensite my.conf`
5. 重新啟動 apache，`sudo service apache2 restart`

