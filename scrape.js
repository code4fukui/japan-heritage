import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { writeData } from "https://js.sabae.cc/writeData.js";
import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";

const url = "https://japan-heritage.bunka.go.jp/ja/stories/";
const html = await fetchOrLoad(url);
/*
const uselocal = true;
const html = uselocal ?
  await Deno.readTextFile("./index.html") :
  await (await fetch(url)).text();
*/

const dom = HTMLParser.parse(html);
const stories = dom.querySelectorAll(".con_story .wrp_sto > li");
const list = [];
for (const st of stories) {
  if (!st.querySelector(".num")) continue;
  //console.log(st.querySelector(".num"))
  const url = st.querySelector("a").getAttribute("href");
  const num = st.querySelector(".num").text;
  const image = "https://japan-heritage.bunka.go.jp" + st.querySelector(".wrp_img > img").getAttribute("src");
  const areasli = st.querySelectorAll(".area li");
  const areas = [];
  for (const area of areasli) {
    areas.push(area.text);
  }
  //.forEach(i => i.text);
  
  const name = st.querySelector(".st").text;
  const subname = st.querySelector(".txt").text;
  //console.log(num, url, areas, name, subname);
  list.push({
    jhno: parseInt(num.substring(num.indexOf("#") + 1)),
    url,
    name,
    subname,
    image,
    areas: areas.join(","),
  });
}
await writeData("japan-heritage", list);
