## httpd.conf

1. 設定 Directory

	```
<Directory />
    Options FollowSymLinks
    AllowOverride None
    Order allow,deny
    Allow from all
</Directory>
```

2. 開啟 httpd-vhosts.conf

	`Include /private/etc/apache2/extra/httpd-vhosts.conf`


3. 開啟 php

	`LoadModule php5_module libexec/apache2/libphp5.so`

4. 開啟 rewrite

	`LoadModule rewrite_module libexec/apache2/mod_rewrite.so`

5. 新增 index

	```
<IfModule dir_module>
    DirectoryIndex index.html index.php
</IfModule>
```

## httpd-vhosts.conf

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

* 新增 host

	```
<VirtualHost *:80>
    ServerName oa.ioa.tw
    ServerAlias oa.ioa.tw

    ServerAdmin comdan66@gmail.com
    DocumentRoot "/Users/OA/www/oa"

    ErrorLog "/private/var/log/apache2/error_log"
    CustomLog "/private/var/log/apache2/access_log" common

    <Directory "/Users/OA/www/oa">
        Options FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
```