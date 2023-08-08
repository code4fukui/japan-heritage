import { writeData } from "https://js.sabae.cc/writeData.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const props = await CSV.fetchJSON("./japan-heritage_props_detail.csv");
const heris = {};
for (const p of props) {
  if (!heris[p.jhno]) {
    heris[p.jhno] = [p];
  } else {
    heris[p.jhno].push(p);
  }
}
for (const jhno in heris) {
  await writeData("japan-heritage_props_detail/" + jhno, heris[jhno]);
}
