import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { writeData } from "https://js.sabae.cc/writeData.js";
import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { GooglePlaceAPI } from "https://code4fukui.github.io/GooglePlaceAPI/GooglePlaceAPI.js";

const DEFAULT_ZOOM = 16;

const host = "https://japan-heritage.bunka.go.jp";

const props = await CSV.fetchJSON("./japan-heritage_props.csv");
for (const prop of props) {
  const url = prop.url;
  const html = await fetchOrLoad(url);
  const dom = HTMLParser.parse(html);
  const maplink = dom.querySelector(".wrp_st .c_lnk1 > a")?.getAttribute("href");
  if (maplink) {
    const n = maplink.indexOf("&ll=");
    if (n >= 0) {
      const ll = maplink.substring(n + 4, maplink.indexOf("&", n + 4));
      const n2 = ll.indexOf("%");
      const lat = ll.substring(0, n2);
      const lng = ll.substring(n2 + 3);
      const n3 = maplink.indexOf("&z=");
      const n4 = maplink.indexOf("&", n3 + 3);
      const zoom = maplink.substring(n3 + 3, n4 < 0 ? maplink.length : n4);
      prop.lat = lat;
      prop.lng = lng;
      prop.zoom = zoom;
    } else {
      const n2 = maplink.indexOf("/@");
      if (n2 >= 0) {
        const ll = maplink.substring(n2 + 2, maplink.indexOf("z", n2)).split(",");
        if (ll) {
          prop.lat = ll[0];
          prop.lng = ll[1];
          prop.zoom = ll[2];
        }
      } else {
        const n2 = maplink.indexOf("cid=");
        if (n2 >= 0) {
          const n3 = maplink.indexOf("&", n2 + 4);
          const cid = maplink.substring(n2 + 4, n3 < 0 ? maplink.length : n3);
          console.log("cid", cid);
          const pos = await GooglePlaceAPI.fetchPosFromCID(cid);
          if (pos) {
            prop.lat = pos.lat;
            prop.lng = pos.lng;
            prop.zoom = pos.zoom;
          } else {
            // https://japan-heritage.bunka.go.jp/ja/culturalproperties/result/1461/

            console.log("can't get pos " + url);
          }
        } else {
          const params = new URL(maplink).searchParams;
          const ftid = params.get("ftid");
          if (ftid) {
            console.log("ftid", ftid);
            const pos = await GooglePlaceAPI.fetchPosFromFTID(ftid);
            if (pos) {
              prop.lat = pos.lat;
              prop.lng = pos.lng;
              prop.zoom = pos.zoom;
            } else {
              console.log("can't get pos " + url);
            }
          } else {
            // https://japan-heritage.bunka.go.jp/ja/culturalproperties/result/3099/
            // error: Uncaught (in promise) Error: error! https://www.bing.com/maps?&mepi=0~~Unknown~Address_Link&ty=18&q=%E9%9B%A3%E6%B3%A2%E5%AE%AE%E8%B7%A1&ss=ypid.YN5286x2241593699821071964&ppois=34.678707122802734_135.52635192871094_%E9%9B%A3%E6%B3%A2%E5%AE%AE%E8%B7%A1_YN5286x2241593699821071964~&cp=34.678707~135.526352&v=2&sV=1
            if (maplink.startsWith("https://www.bing.com/maps")) {
              const ll = params.get("ppois").split("_");
              prop.lat = ll[0];
              prop.lng = ll[1];
              prop.zoom = DEFAULT_ZOOM;
              console.log("bing ", ll)
            } else {
              // mid - Google my map
              // https://www.google.com/maps/d/embed?mid=1dLXFwGArp-aJ06ysVJS-CiSMtT_tW8o&ehbc=2E312F
              // https://japan-heritage.bunka.go.jp/ja/culturalproperties/result/4367/
              const mid = params.get("mid");
              if (mid) {
                console.log("My Maps id", mid);
              } else {
                throw new Error("error! " + maplink + " " + url);
              }
            }
          }
        }
      }
    }
    if (prop.lat && (isNaN(prop.lat) || isNaN(prop.zoom))) {
      console.log(prop, maplink);
      Deno.exit();
    }
    const img = dom.querySelector(".img img").getAttribute("src");
    if (img) {
      prop.image = host + img;
    } else {
      console.log(img);
    }
    //console.log(prop);
    //console.log(prop.lat, prop.lng, prop.zoom)
  }
}
  
await writeData("japan-heritage_props_detail", props);
