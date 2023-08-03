# japan-heritage 日本遺産オープンデータ

- 

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

 
