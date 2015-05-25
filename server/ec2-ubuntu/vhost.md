```
# root
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

# www.ioa.tw
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