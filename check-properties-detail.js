import { CSV } from "https://js.sabae.cc/CSV.js";

const props = await CSV.fetchJSON("./japan-heritage_props_detail.csv");
const sum = props.length;
const err = props.filter(p => !p.lat).length;
console.log(err, sum, (err / sum * 100).toFixed(1));
