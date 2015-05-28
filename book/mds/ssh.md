# SSH 筆記

## 產生 SSH Keys
* `ssh-keygen -t rsa -C "your_email@example.com"`
* 基本資料，可以直接 Enter 使用預設值跳過

## 自動登入
* 本機端 `pbcopy < ~/.ssh/id_rsa.pub`
* SSH 登入 Server
* 編輯 authorized_keys，`nano ~/.ssh/authorized_keys`
* 於檔案末端貼上