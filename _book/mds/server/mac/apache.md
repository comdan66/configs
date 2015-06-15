# Mac Apache 筆記

## apache 指令
* 開啟 `sudo apachectl start`
* 重開 `sudo apachectl restart`
* 停止 `sudo apachectl stop`

## 設定 httpd.conf
* 路徑 `/private/etc/apache2/httpd.conf`
* 設定 Directory

	```
<Directory />
    Options FollowSymLinks
    AllowOverride None
    Order allow,deny
    Allow from all
</Directory>
```

* 開啟 httpd-vhosts 功能，將 `Include /private/etc/apache2/extra/httpd-vhosts.conf` 註解移除


* 開啟 php，`LoadModule php5_module libexec/apache2/libphp5.so` 註解移除

* 開啟 rewrite，`LoadModule rewrite_module libexec/apache2/mod_rewrite.so` 註解移除

5. 新增 index 檔案格式

	```
<IfModule dir_module>
    DirectoryIndex index.html index.php
</IfModule>
```


## 設定 httpd-vhosts.conf

* 路徑 `/private/etc/apache2/extra/httpd-vhosts.conf`
* 基本設定

	```
NameVirtualHost *:80  
<VirtualHost *:80>
    ServerAdmin comdan66@gmail.com
    DocumentRoot "/Users/OA/www"

    ErrorLog "/private/var/log/apache2/error_log"
    CustomLog "/private/var/log/apache2/access_log" common    

    <Directory "/Users/OA/www">
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
    ServerName test.ioa.tw
    ServerAlias test.ioa.tw

    ServerAdmin comdan66@gmail.com
    DocumentRoot "/Users/OA/www/test"

    ErrorLog "/private/var/log/apache2/error_log"
    CustomLog "/private/var/log/apache2/access_log" common

    <Directory "/Users/OA/www/test">
        Options FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
```