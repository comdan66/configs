# Mac Elasticsearch 筆記

## Tools
可以在 browser 上直接查詢DSL的結果  
[https://chrome.google.com/webstore/detail/sense-beta/lhjgkmllcaadmopgmanpapmpjgmfcfig?hl=zh-TW](https://chrome.google.com/webstore/detail/sense-beta/lhjgkmllcaadmopgmanpapmpjgmfcfig?hl=zh-TW)

1. 先裝 [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)


### Install ElasticSearch

1. Brew 安裝 `brew install elasticsearch`
2. 設定指向 `ln -sfv /usr/local/opt/elasticsearch/*.plist ~/Library/LaunchAgents`
3. 開啟 `launchctl load ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist`
4. 關閉 `launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist`


### 已經使用 brew install elasticsearch  改 使用 elasticsearch-rtf

1. `cd /usr/local/Cellar/elasticsearch`
2. `git clone https://github.com/medcl/elasticsearch-rtf 1.0.0`
3. `brew switch elasticsearch 1.0.0`

> 可以使用 `git clone https://github.com/medcl/elasticsearch-rtf` 下載最新，然後 `brew switch elasticsearch` 按 tab 選擇版本。

### Install Plugin 

1. `brew info elasticsearch`
2. 取得   Plugins: `/usr/local/var/lib/elasticsearch/plugins/`

#### Example
1. `cd /usr/local/var/lib/elasticsearch/plugins/`
2. `plugin -install mobz/elasticsearch-head`
3. 開啟瀏覽器：[http://localhost:9200/_plugin/head/](http://localhost:9200/_plugin/head/)
