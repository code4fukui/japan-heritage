import { CSV } from "https://js.sabae.cc/CSV.js";
import { writeData } from "https://js.sabae.cc/writeData.js";

const props = await CSV.fetchJSON("./japan-heritage_props_detail.csv");
const sum = props.length;
const errprops = props.filter(p => !p.lat);
const err = errprops.length;
console.log(err, sum, (err / sum * 100).toFixed(1));

await writeData("japan-heritage_props_detail_err", errprops);
