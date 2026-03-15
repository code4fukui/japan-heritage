# japan-heritage

Open data for Japanese Heritage Sites.

## Demo
- [Japanese Heritage List](https://code4fukui.github.io/japan-heritage/)
- [Japanese Heritage Cultural Properties List](https://code4fukui.github.io/japan-heritage/props.html)
- [Japanese Heritage Cultural Properties Latitude/Longitude Errors](https://code4fukui.github.io/japan-heritage/props-err.html)
- [Japanese Heritage News List](https://code4fukui.github.io/japan-heritage/news.html)
- [Japanese Heritage Latest 100 News](https://code4fukui.github.io/japan-heritage/news-new.html)

## Open Data

- [Japanese Heritage List](japan-heritage.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage.cbor)
- [Japanese Heritage Cultural Properties List](japan-heritage_props.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props.cbor)
- [Japanese Heritage Cultural Properties Details](japan-heritage_props_detail.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.cbor)
- [Japanese Heritage Cultural Properties Details by Heritage Site](japan-heritage_props_detail) CSV/JSON/CBOR
- [Japanese Heritage with Coordinates](japan-heritage_withpos.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.cbor)
- [Japanese Heritage News List](japan-heritage_news.csv) [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_news.csv)/[JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_news.json)/[CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_news.cbor)

## Applications

- [open-hinata](https://kenzkenz.xsrv.jp/open-hinata/#6/137.5795/37.45059%3FS%3D1%26L%3D%5B%5B%7B%22id%22%3A%22nihonisan%22%2C%22ck%22%3Atrue%2C%22o%22%3A1%7D%2C%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%5D) [X](https://twitter.com/taisukef/status/1687569608457469955)
- [Japanese Heritage (Cultural Properties) Map](https://shi-works.github.io/japan-heritage-map/) [GitHub](https://github.com/shi-works/japan-heritage-map) [X](https://twitter.com/taisukef/status/1687566995993337856)

## Data Generation

1. Fetch Japanese Heritage List
  ```deno run -A scrape.js``` → japan-heritage.csv
2. Fetch Cultural Properties List
  ```deno run -A scrape-properties.js``` → japan-heritage_props.csv
3. Fetch Cultural Properties Details
  ```deno run -A scrape-properties-detail.js``` → japan-heritage_props_detail.csv
5. Split Cultural Properties by Heritage Site
  ```deno run -A make-props_detail_each.js``` → japan-heritage_props_detail/
6. Attach coordinates and URLs to Cultural Properties
  ```deno run -A make-withpos.js``` → japan-heritage_withpos.csv
7. Fetch News List
  ```deno run -A scrape-news.js``` → japan-heritage_news.csv

## Source

- Source: [Japanese Heritage Portal Site | Cultural Properties recognized by the Agency for Cultural Affairs](https://japan-heritage.bunka.go.jp/en/) License [CC BY](https://www.mext.go.jp/b_menu/1351168.htm)