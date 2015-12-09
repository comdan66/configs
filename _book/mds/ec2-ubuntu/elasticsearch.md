# Mac Elasticsearch 筆記

### Install ElasticSearch

1. `sudo apt-get install openjdk-7-jre-headless -y`
2. `sudo wget -O - http://packages.elasticsearch.org/GPG-KEY-elasticsearch | sudo apt-key add -`
3. 編輯 `/etc/apt/sources.list`
4. 加入 `deb http://packages.elasticsearch.org/elasticsearch/1.3/debian stable main`
5. `sudo apt-get update`
6. `sudo apt-get install elasticsearch`
7. `sudo update-rc.d elasticsearch defaults 95 10`

### 開關
* 開，`sudo /etc/init.d/elasticsearch start`
* 關，`udo /etc/init.d/elasticsearch stop`

> 也可以用 `sudo service elasticsearch start` 開啟，關閉則是 `sudo service elasticsearch stop`

> 以上參考 [http://blog.bekijkhet.com/2014/06/install-elasticsearch-in-ubuntu-1404.html](http://blog.bekijkhet.com/2014/06/install-elasticsearch-in-ubuntu-1404.html)

### Install Plugin 

1. `cd /usr/share/elasticsearch`
2. 取得 Plugins: `sudo bin/plugin --install ..`

#### Example
1. `cd /usr/share/elasticsearch`
2. `sudo bin/plugin --install mobz/elasticsearch-head`
3. 開啟瀏覽器：http://domain:9200/_plugin/head/

> 以上參考 [https://gist.github.com/ondrej-kvasnovsky/9363975](https://gist.github.com/ondrej-kvasnovsky/9363975)
