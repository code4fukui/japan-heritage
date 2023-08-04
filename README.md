# japan-heritage 日本遺産オープンデータ

- [日本遺産一覧](https://code4fukui.github.io/japan-heritage/)
- [日本遺産 構成文化財一覧](https://code4fukui.github.io/japan-heritage/props.html)
- [日本遺産 構成文化財 緯度経度エラー一覧](https://code4fukui.github.io/japan-heritage/props-err.html)
- [日本遺産 お知らせ一覧](https://code4fukui.github.io/japan-heritage/news.html)
- [日本遺産 お知らせ 新着100](https://code4fukui.github.io/japan-heritage/news-new.html)

## オープンデータ

- [日本遺一覧](japan-heritage.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage.cbor)
- [日本遺産 構成文化財一覧](japan-heritage_props.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props.cbor)
- [日本遺産 構成文化財一覧 詳細](japan-heritage_props_detail.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.cbor)
- [日本遺産 緯度経度付き](japan-heritage_withpos.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.cbor)
- [日本遺産 お知らせ一覧](japan-heritage_news.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_news.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_news.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_news.cbor)

## 活用アプリケーション

- [open-hinata](https://kenzkenz.xsrv.jp/open-hinata/#6/137.5795/37.45059%3FS%3D1%26L%3D%5B%5B%7B%22id%22%3A%22nihonisan%22%2C%22ck%22%3Atrue%2C%22o%22%3A1%7D%2C%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%5D) [X](https://twitter.com/taisukef/status/1687569608457469955)
- [日本遺産（構成文化財）マップ](https://shi-works.github.io/japan-heritage-map/) [GitHub](https://github.com/shi-works/japan-heritage-map) [X](https://twitter.com/taisukef/status/1687566995993337856)

## データ作成方法

1. 日本遺産一覧取得
  ```deno run -A scrape.js``` → japan-heritage.csv
2. 構成文化財一覧取得
  ```deno run -A scrape-properties.js``` → japan-heritage_props.csv
3. 構成文化財詳細取得
  ```deno run -A scrape-properties-detail.js``` → japan-heritage_props_detail.csv
4. 構成文化財から位置情報を付与
  ```deno run -A make-withpos.js``` → japan-heritage_withpos.csv
5. お知らせ一覧取得
  ```deno run -A scrape-news.js``` → japan-heritage_news.csv

## src 出典

- 出典: [日本遺産ポータルサイト｜文化庁が認定する日本の文化・伝統](https://japan-heritage.bunka.go.jp/ja/) ライセンス [CC BY](https://www.mext.go.jp/b_menu/1351168.htm)
