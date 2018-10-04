# 『超速! Webページ速度改善ガイド』サンプルコード

技術評論社刊『超速! Webページ速度改善ガイド』（佐藤歩、泉水翔吾著）のサンプルコードです。

## 5thフォルダ

5thフォルダには次のフォルダが含まれています。

### scrolling-layout-thrashing

5.1節「レイアウト算出の調査と改善」にて扱うサンプルコードが含まれています。

### evaluate-expensive-styles

5.2節「ペイント処理の調査と改善」にて扱うサンプルコードが含まれています。

### accidental-layer-creation

5.3節「意図しないCompositingの調査と改善」にて扱うサンプルコードが含まれています。

## 9thフォルダ

9thフォルダには次のフォルダが含まれています。

### service-worker

9.1節「Service Workerによるネットワークリソースの制御」にて扱うService Workerのサンプルコードを含みます。

コマンドラインで対象フォルダに移動して、以下のコマンドを実行するとローカルサーバーが起動します。

```bash
$ python -m http.server
```

起動後、ブラウザのアドレスバーに`http://localhost:8000`を入力すると、`index.html`が表示され`service-worker.js`がインストールされます。
