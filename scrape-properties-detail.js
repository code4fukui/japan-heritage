import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { writeData } from "https://js.sabae.cc/writeData.js";
import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

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
