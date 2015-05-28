# 安裝 Package

## Move Tab
* 開啟 package 位置，`Preferences` > `Browse Packages...`
* 新增名稱為 `move_tab` 的資料夾，並將 `res/move_tab/` 的內容複製進去
* 修改 Key Bindings
	* 開啟 Key Bindings，位置在 `preferences` > `Key Bindings - User`
	* 加入以下指令

		```
  {"keys": ["super+alt+shift+left"], "command": "move_tab", "args": { "position": "-1" }},
  {"keys": ["super+alt+shift+right"], "command": "move_tab", "args": { "position": "+1" }}
```

	> 以上參考 [SublimeText/MoveTab](https://github.com/SublimeText/MoveTab)