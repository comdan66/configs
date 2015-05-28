# Sublime Text 2 常用設定

## 常用 package
* sublimeLinter
* scss
* sftp

## Key Bindings 常用設定
位置在 `preferences` > `Key Bindings - User`

```
[
  {"keys": ["super+b"], "command": "insert_snippet", "args": {"contents": "echo '<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\" /><pre>';\r\nprint_r ($0);\r\nexit ();"}},
  {"keys": ["super+j"], "command": "insert", "args": {"characters": "background-color: rgba(255, 0, 0, 0.2);"}},
  {"keys": ["super+k"], "command": "insert", "args": {"characters": "background-color: rgba(0, 128, 0, 0.2);"}},
  {"keys": ["super+l"], "command": "insert", "args": {"characters": "background-color: rgba(0, 0, 255, 0.2);"}},
  {"keys": ["super+r"], "command": "revert" },
  {"keys": ["super+Shift+b"], "command": "insert_snippet", "args": {"contents": "echo '<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\" /><pre>';\r\nvar_dump ($0);\r\nexit ();"}},
  {"keys": ["super+Shift+c"], "command": "insert_snippet", "args": {"contents": "'conditions' => array ($0)"}},
  {"keys": ["super+Shift+x"], "command": "insert_snippet", "args": {"contents": "\rconsole.info ($0);\n"}},
  {"keys": ["super+Shift+z"], "command": "insert_snippet", "args": {"contents": "console.error ($0);"}},
  {"keys": ["super+Shift+v"], "command": "insert", "args": {"characters": "border: 1px solid rgba(255, 0, 0, .3);"}}
]
```

## Settings 常用設定
位置在 `preferences` > `Settings - User`，或按 `command + ,`

```
{
  "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",
  "font_face": "monaco",
  "font_options":
  [
    "no_bold",
    "no_italic",
    "",
    "gray_antialias",
    "subpixel_antialias",
    "no_round"
  ],
  "font_size": 17.0,
  "ignored_packages":
  [
    "Vintage"
  ],
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "word_wrap": false
}

```