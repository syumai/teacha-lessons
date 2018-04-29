# Mac 版 開発環境構築ガイド

## 概要

* Web 開発を行う事を前提に、必要になるツール類の紹介、インストール手順をガイドします。

## 導入するツール

* [Homebrew](https://brew.sh/index_ja)
* [Homebrew cask](https://caskroom.github.io/)

## なぜ導入するのか

### Homebrew

* **Mac で Web 開発するならほぼ必須。**
* `brew install node`などの、簡単なコマンドでアプリケーションをインストール出来るようになる
* 各サイトにインストーラーを DL しに行かなくていいので楽
* アンインストールも簡単
* 更新も簡単

### Homebrew cask

* Homebrew は、基本 CLI(※1)用のツールの導入にしか使えないため、インストール出来ないアプリケーションがある
* Homebrew cask を導入すると、Google Chrome 等の GUI アプリケーションも Homebrew を通じて`brew cask install google-chrome`等のコマンドでインストール出来るようになる

> ※1) CLI...(Command Line Interface)。ターミナルエミュレータ等を使い、キーボードのみでコンピュータを操作するためのインターフェース。マウスを使ったグラフィカルな操作を行うインターフェースの事を、GUI (Graphical User Interface)と呼ぶ。

## その他、セットで入れたいツール

### テキストエディタ

* Visual Studio Code
  * Vue 向けの優れたプラグインが多いのでおすすめ
* Atom
* [micro](https://github.com/zyedidia/micro)
  * Vim / Emacs が苦手な方におすすめ

## 導入手順

### Homebrew の導入

#### ターミナルを開く

* [Launchpad](https://support.apple.com/kb/PH25704?locale=ja_JP&viewlocale=ja_JP)から、**その他**を選択して、**ターミナル**を開きます。

#### Xcode Command Line Tools をインストールする

* ターミナルで、下記コマンドを実行してください。

```console
xcode-select --install
```

* 管理者用のパスワードを求められたら入力してください。
* このツールのインストールにはしばらく時間がかかります。

#### Homebrew をインストールする

* 下記コマンドを実行してください。

```console
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* 上記コマンドの実行が完了したら、 `brew --help` が動くことを確認してください。

#### Homebrew cask をインストールする

* 下記コマンドを実行してください。

```console
brew tap caskroom/cask
```

### テキストエディタの導入 (必要があれば)

#### Visual Studio Code / Atom

```console
brew cask install visual-studio-code
brew cask install atom
```

#### micro

```console
brew install micro
echo "EDITOR=\"$(which micro)\"" >> ~/.bashrc # .bash_profileや、.zshrcの場合もあり
```
