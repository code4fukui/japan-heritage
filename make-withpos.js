import { writeData } from "https://js.sabae.cc/writeData.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const heris = await CSV.fetchJSON("./japan-heritage.csv");
const props = await CSV.fetchJSON("./japan-heritage_props_detail.csv");
for (const heri of heris) {
  const p = props.find(p => p.jhno == heri.jhno && p.lat);
  if (!p) {
    //throw new Error("can't find prop with pos: " + heri.jhno);
    console.log("can't find prop with pos: " + heri.jhno + " areas: " + heri.areas);
  } else {
    heri.lat = p.lat;
    heri.lng = p.lng;
  }
  heri.url_props = "https://code4fukui.github.io/japan-heritage/japan-heritage_props_detail/" + heri.jhno + ".csv";
}
await writeData("japan-heritage_withpos", heris);
