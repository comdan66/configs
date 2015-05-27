## 開新 user

* `sudo adduser newuser`
* 輸入密碼
* 確認密碼
* 基本資料，可以直接 Enter 使用預設值跳過

> 注意，EC2 上可能遇到新使用者不能 ssh 上機器的狀況，請參考 [此篇](http://stackoverflow.com/questions/8339912/allowing-users-to-ssh-to-an-ec2-ubuntu-instance) 設定。

> * 編輯 `/etc/ssh/sshd_config`，將 **PasswordAuthentication** 設定 **yes**，儲存離開
> * 重新載入 ssh config，指令 `sudo service ssh reload`


## 移除 user

* `sudo userdel -r olduser`