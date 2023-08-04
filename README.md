# japan-heritage 日本遺産オープンデータ

- [日本遺産一覧](https://code4fukui.github.io/japan-heritage/)
- [日本遺産 構成文化財一覧](https://code4fukui.github.io/japan-heritage/props.html)
- [日本遺産 構成文化財 緯度経度エラー一覧](https://code4fukui.github.io/japan-heritage/props-err.html)

## オープンデータ

- [日本遺一覧](japan-heritage.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage.cbor)
- [日本遺産 構成文化財一覧](japan-heritage_props.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props.cbor)
- [日本遺産 構成文化財一覧 詳細](japan-heritage_props_detail.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.cbor)
- [日本遺産 緯度経度付き](japan-heritage_withpos.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.cbor)

## 作成方法

1. 日本遺産一覧取得
  ```deno run -A scrape.js``` → japan-heritage.csv
2. 構成文化財一覧取得
  ```deno run -A scrape-properties.js``` → japan-heritage_props.csv
3. 構成文化財詳細取得
  ```deno run -A scrape-properties-detail.js``` → japan-heritage_props_detail.csv
4. 構成文化財から位置情報を付与
  ```deno run -A make-withpos.js``` → japan-heritage-withpos.csv

## src 出典

- 出典: [日本遺産ポータルサイト｜文化庁が認定する日本の文化・伝統](https://japan-heritage.bunka.go.jp/ja/) ライセンス [CC BY](https://www.mext.go.jp/b_menu/1351168.htm)

 
