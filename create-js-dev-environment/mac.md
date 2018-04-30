# Mac 版 JS 開発環境構築ガイド

## 導入するツール

* [nvm](https://github.com/creationix/nvm)

## なぜ導入するのか

### nvm

* Node.js のバージョン管理ツール
* Node.js は頻繁にバージョンが変わる
* あるバージョン(4.x, 8.x. など)で動く事を保証するため、バージョンを確認しておく必要がある
* nvm を使うと、簡単に Node.js のバージョンを切り替えたり、新しいものを入手したり出来る

### インストール手順

* [こちらに記載](https://github.com/creationix/nvm)の通りです

#### インストールスクリプトの実行

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

#### nvm の自動読み込み設定の登録

* micro / vim / emacs などで、.bash_profile / .bashrc / .zshrc のいずれか(使っているもの)を開く
* 下記のスクリプトを貼り付ける

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

* `source ~/.bash_profile` (または別の編集した設定ファイル) を実行して、`nvm`コマンドが実行できるか確認する
