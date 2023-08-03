import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { writeData } from "https://js.sabae.cc/writeData.js";
import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const list = [];

const heris = await CSV.fetchJSON("./japan-heritage.csv");
let pidx = 1;
for (const heri of heris) {
  const url = heri.url + "culturalproperties/";
  const html = await fetchOrLoad(url);
  const dom = HTMLParser.parse(html);

  const props = dom.querySelectorAll(".con_cultural .list > li");
  const jhno = heri.jhno;
  let pno = 1;
  for (const prop of props) {
    const url = "https://japan-heritage.bunka.go.jp" + prop.querySelector("a").getAttribute("href");
    const yomi = prop.querySelector(".st span")?.text.trim() || "";
    const name = prop.querySelector(".st em").text.trim();
    const status = prop.querySelector(".status").text.trim();
    const spot = prop.querySelector(".spot")?.text.trim() || "";
    list.push({
      pidx,
      jhno,
      pno,
      url,
      status,
      name,
      yomi,
      spot,
    });
    pno++;
    pidx++;
    console.log(jhno, pno, name);
  }
}
await writeData("japan-heritage_props", list);
