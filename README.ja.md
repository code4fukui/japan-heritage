# japan-heritage

日本遺産のオープンデータです。公式ポータルサイトから自動的にスクレイピングされ、更新されています。このリポジトリでは、日本遺産、その構成文化財、および関連ニュースの構造化されたデータセットを提供しています。

## ライブデモ

以下のインタラクティブなウェブページでデータを探索できます：

-   **[日本遺産マップ＆リスト](https://code4fukui.github.io/japan-heritage/)**: すべての日本遺産のインタラクティブなマップと一覧表。
-   **[構成文化財マップ＆リスト](https://code4fukui.github.io/japan-heritage/props.html)**: すべての構成文化財の網羅的なマップとリスト。
-   **[ジオコーディングエラー](https://code4fukui.github.io/japan-heritage/props-err.html)**: 緯度・経度データを自動抽出できなかった文化財のリスト。
-   **[ニュースアーカイブ](https://code4fukui.github.io/japan-heritage/news.html)**: すべてのニュース記事の検索可能な一覧表。
-   **[最新ニュース](https://code4fukui.github.io/japan-heritage/news-new.html)**: 最新のニュース記事100件のギャラリー。

## データセット

すべてのデータは CSV、JSON、CBOR 形式で利用可能です。

-   **日本遺産**: `japan-heritage.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage.cbor)
-   **座標付き日本遺産**: `japan-heritage_withpos.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.cbor)
-   **構成文化財（基本リスト）**: `japan-heritage_props.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props.cbor)
-   **構成文化財（詳細リスト）**: `japan-heritage_props_detail.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.cbor)
-   **構成文化財（日本遺産別）**: `japan-heritage_props_detail/`
    -   このディレクトリには、日本遺産ごとに個別のファイル（例: `1.csv`、`2.json` など）に分割された詳細な文化財データが含まれています。
-   **ニュースアーカイブ**: `japan-heritage_news.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_news.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_news.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_news.cbor)

## データ生成パイプライン

データセットは、一連の Deno スクリプトを使用して生成および更新されます。

1.  **日本遺産リストの取得**: `deno run -A scrape.js`
    -   日本遺産のメインリストをスクレイピングします。
    -   出力: `japan-heritage.csv`
2.  **構成文化財リストの取得**: `deno run -A scrape-properties.js`
    -   各日本遺産のすべての構成文化財の基本リストをスクレイピングします。
    -   出力: `japan-heritage_props.csv`
3.  **構成文化財の詳細取得**: `deno run -A scrape-properties-detail.js`
    -   各文化財のページにアクセスし、画像や地図リンクからの地理座標を含む詳細情報を抽出します。
    -   出力: `japan-heritage_props_detail.csv`
4.  **日本遺産別の文化財データ分割**: `deno run -A make-props_detail_each.js`
    -   詳細な文化財データを日本遺産ごとに個別のファイルに分割します。
    -   出力: `japan-heritage_props_detail/` ディレクトリ
5.  **日本遺産リストへの座標追加**: `deno run -A make-withpos.js`
    -   代表的な座標をメインの日本遺産リストに追加します。
    -   出力: `japan-heritage_withpos.csv`
6.  **ニュースリストの取得**: `deno run -A scrape-news.js`
    -   ニュースとイベントのアーカイブをスクレイピングします。GitHub Actions がスケジュールに従ってこのスクリプトを実行し、データを最新の状態に保ちます。
    -   出力: `japan-heritage_news.csv`

## コミュニティアプリケーション

このオープンデータを使用して構築されたアプリケーションです：

-   [open-hinata](https://kenzkenz.xsrv.jp/open-hinata/#6/137.5795/37.45059%3FS%3D1%26L%3D%5B%5B%7B%22id%22%3A%22nihonisan%22%2C%22ck%22%3Atrue%2C%22o%22%3A1%7D%2C%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%5D) ([X/Twitter](https://twitter.com/taisukef/status/1687569608457469955))
-   日本遺産（文化財）マップ *(demo unavailable)* ([GitHub](https://github.com/shi-works/japan-heritage-map) / [X/Twitter](https://twitter.com/taisukef/status/1687566995993337856))

## データソースとライセンス

-   **出典**: [日本遺産ポータルサイト｜文化庁が認定する日本の文化・伝統](https://japan-heritage.bunka.go.jp/en/)
-   **ライセンス**: データは [CC BY](https://www.mext.go.jp/b_menu/1351168.htm) の下で提供されています。
