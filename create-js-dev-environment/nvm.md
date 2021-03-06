# nvm の使い方

nvm は、下記の目的に使用出来る。

* Node.js のインストール
* アンインストール
* 複数バージョンの切り替え

## Node.js のインストール

```
nvm ls-remote            # インストール可能なバージョン一覧の表示
nvm install 9.11.1       # 9系の現在(2018年4月30日)の最新版をインストールする
nvm alias default 9.11.1 # nodeコマンドを実行したら、常に9.11.1が動くようにする
node --version           # => v9.11.1 と表示される
nvm ls                   # インストール済みのバージョン一覧の表示
```

### (補足) LTS 版

* Node.js には、長期的なサポートを行う LTS 版 (Long Term Support) が存在する
* 現在(2018 年 4 月 30 日)、最新の LTS 版は、8.11.1 となっている
* サポート期間は、2019 年 12 月まで
* サーバーとして長期間動かし続ける場合などは、LTS を採用すべき

## アンインストール

```
nvm uninstall 9.11.1
```

## 複数バージョンの切り替え

```
nvm use 8.11.1           # 一時的に8.11.1が動くようにする
nvm alias default 8.11.1 # nodeコマンドを実行したら、常に8.11.1が動くようにする
```
