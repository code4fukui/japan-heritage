import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { writeData } from "https://js.sabae.cc/writeData.js";
import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";

const url = "https://japan-heritage.bunka.go.jp/ja/stories/";
const html = await fetchOrLoad(url);
const dom = HTMLParser.parse(html);
const stories = dom.querySelectorAll(".con_story .wrp_sto > li");
const list = [];
for (const st of stories) {
  const url = st.querySelector("a").getAttribute("href");
  const num = st.querySelector(".num").text;
  const image = "https://japan-heritage.bunka.go.jp" + st.querySelector(".wrp_img > img").getAttribute("src");
  const areasli = st.querySelectorAll(".area li");
  const areas = areasli.map(a => a.text).join(",");
  const name = st.querySelector(".st").text;
  const subname = st.querySelector(".txt").text;
  const jhno = parseInt(num.substring(num.indexOf("#") + 1));
  list.push({ jhno, url, name, subname, image, areas });
}
await writeData("japan-heritage", list);
