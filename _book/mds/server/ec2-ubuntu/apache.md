# EC2 Ubuntu Apache 筆記

## 安裝
* `sudo apt-get install apache2`

## 驗證是否安裝成功
* 安裝完後便可以開啟瀏覽器並且輸入網址 `http://127.0.0.1` 後，看是否便可以瀏覽

	> 至 `/etc/apache2/sites-available` 查詢 **DocumentRoot**
	> 
	> ※ 預設 Apache 的根目錄為 `/var/www/html`，將其更改為你所需要的位置。

## 設定 apache2.conf
* 路徑 `/etc/apache2/apache2.conf`
* 設定 Directory

	```
    <Directory /home/ubuntu/www/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>
```
* 複製一份自己的設定 `cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/my.conf`
* 設定系統時間，若有設定過則免此步驟 `sudo locale-gen zh_TW.UTF-8`
* 重新載入 `sudo a2ensite my.conf`
* 重新啟動 Apache，`sudo service apache2 restart`

## 開啟 php 功能

* `apt-cache search php5`
* `apt-get install php5-mysql php5-curl php5-gd php5-intl php-pear php5-imagick php5-imap php5-mcrypt php5-memcache php5-ming php5-ps php5-pspell php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl`
* 重新啟動 Apache，`sudo service apache2 restart`

## 開啟 rewrite
* `sudo a2enmod rewrite`
* 重新啟動 Apache，`sudo service apache2 restart`

## 設定 httpd-vhosts 功能
* 路徑 `/etc/apache2/sites-available/my.conf`
* 基本設定

	```
<VirtualHost *:80>
    ServerAdmin comdan66@gmail.com

    DocumentRoot /home/ubuntu/www

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <Directory /home/ubuntu/www>
        Options FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
```

* 新增 Host

	```
<VirtualHost *:80>
    ServerName www.ioa.tw
    ServerAlias www.ioa.tw

    ServerAdmin comdan66@gmail.com
    DocumentRoot /home/ubuntu/www

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <Directory /home/ubuntu/www>
        Options FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
```