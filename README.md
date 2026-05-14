# japan-heritage

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Open data for Japan Heritage sites, automatically scraped and updated from the official portal. This repository provides structured datasets for heritage sites, their constituent cultural properties, and related news.

## Live Demos

Explore the data through these interactive web pages:

-   **[Heritage Sites Map & List](https://code4fukui.github.io/japan-heritage/)**: An interactive map and table of all Japan Heritage sites.
-   **[Cultural Properties Map & List](https://code4fukui.github.io/japan-heritage/props.html)**: A comprehensive map and list of all constituent cultural properties.
-   **[Geocoding Errors](https://code4fukui.github.io/japan-heritage/props-err.html)**: A list of cultural properties for which latitude/longitude data could not be automatically extracted.
-   **[News Archive](https://code4fukui.github.io/japan-heritage/news.html)**: A searchable table of all news articles.
-   **[Latest News](https://code4fukui.github.io/japan-heritage/news-new.html)**: A gallery of the 100 most recent news articles.

## Datasets

All data is available in CSV, JSON, and CBOR formats.

-   **Heritage Sites**: `japan-heritage.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage.cbor)
-   **Heritage Sites with Coordinates**: `japan-heritage_withpos.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_withpos.cbor)
-   **Cultural Properties (Basic List)**: `japan-heritage_props.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props.cbor)
-   **Cultural Properties (Detailed List)**: `japan-heritage_props_detail.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail.cbor)
-   **Cultural Properties (by Heritage Site)**: `japan-heritage_props_detail/`
    -   This directory contains detailed property data split into individual files, one for each heritage site (e.g., `1.csv`, `2.json`, etc.).
-   **News Archive**: `japan-heritage_news.csv`
    -   [CSV](https://code4fukui.github.io/japan-heritage/japan-heritage_news.csv) / [JSON](https://code4fukui.github.io/japan-heritage/japan-heritage_news.json) / [CBOR](https://code4fukui.github.io/japan-heritage/japan-heritage_news.cbor)

## Data Generation Pipeline

The datasets are generated and updated using a series of Deno scripts.

1.  **Fetch Heritage List**: `deno run -A scrape.js`
    -   Scrapes the main list of Japan Heritage sites.
    -   Output: `japan-heritage.csv`
2.  **Fetch Cultural Properties List**: `deno run -A scrape-properties.js`
    -   Scrapes the basic list of all constituent cultural properties for each heritage site.
    -   Output: `japan-heritage_props.csv`
3.  **Fetch Cultural Properties Details**: `deno run -A scrape-properties-detail.js`
    -   Visits each cultural property page to extract details, including images and geographic coordinates from map links.
    -   Output: `japan-heritage_props_detail.csv`
4.  **Split Properties by Heritage Site**: `deno run -A make-props_detail_each.js`
    -   Splits the detailed properties data into individual files per heritage site.
    -   Output: `japan-heritage_props_detail/` directory
5.  **Attach Coordinates to Heritage Sites**: `deno run -A make-withpos.js`
    -   Adds representative coordinates to the main heritage site list.
    -   Output: `japan-heritage_withpos.csv`
6.  **Fetch News List**: `deno run -A scrape-news.js`
    -   Scrapes the news and events archive. A GitHub Action runs this script on a schedule to keep the data current.
    -   Output: `japan-heritage_news.csv`

## Community Applications

Applications built using this open data:

-   [open-hinata](https://kenzkenz.xsrv.jp/open-hinata/#6/137.5795/37.45059%3FS%3D1%26L%3D%5B%5B%7B%22id%22%3A%22nihonisan%22%2C%22ck%22%3Atrue%2C%22o%22%3A1%7D%2C%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%2C%5B%7B%22id%22%3A2%2C%22ck%22%3Atrue%2C%22o%22%3A1%2C%22c%22%3A%22%22%7D%5D%5D) ([X/Twitter](https://twitter.com/taisukef/status/1687569608457469955))
-   Japanese Heritage (Cultural Properties) Map *(demo unavailable)* ([GitHub](https://github.com/shi-works/japan-heritage-map) / [X/Twitter](https://twitter.com/taisukef/status/1687566995993337856))

## Data Source and License

-   **Source**: [Japanese Heritage Portal Site | Cultural Properties recognized by the Agency for Cultural Affairs](https://japan-heritage.bunka.go.jp/en/)
-   **License**: The data is provided under [CC BY](https://www.mext.go.jp/b_menu/1351168.htm).