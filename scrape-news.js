import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { writeData } from "https://js.sabae.cc/writeData.js";
import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const chkupdate = Deno.args[0] == "update";

const list = chkupdate ? (await CSV.fetchJSON("japan-heritage_news.csv")).reverse() : [];

const url = "https://japan-heritage.bunka.go.jp/ja/news/?page=";
A: for (let i = 1;; i++) {
  console.log("chk news page", i);
  const html = await fetchOrLoad(url + i, chkupdate);
  const dom = HTMLParser.parse(html);
  const ul = dom.querySelectorAll(".wrp_news")[1];
  if (!ul) break;
  const news = ul.querySelectorAll("> li");
  for (const a of news) {
    const url = a.querySelector("a").getAttribute("href");
    const chk = list.find(n => n.url == url);
    if (chk) break A;
    const img0 = a.querySelector(".wrp_img img").getAttribute("src");
    const image = img0[0] == "/" ? "https://japan-heritage.bunka.go.jp" + img0 : img0;
    const jhid = parseInt(a.querySelector(".wrp_txt .story")?.text.substring(1));
    if (!jhid) continue;
    const type = a.querySelector(".num").text;
    const day = a.querySelector(".wrp_txt .day").text.replace(/\./g, "-");
    const title = a.querySelector(".wrp_txt .st").text;
    const description = a.querySelector(".wrp_txt .txt")?.text || "";
    const areas = a.querySelectorAll(".wrp_txt .prefec li").map(l => l.text).join(",");
    list.push({ day, jhid, type, title, description, areas, url, image });
    console.log(day, jhid, title, areas);
  }
}
list.reverse();
await writeData("japan-heritage_news", list);

/*
                        <li>
            <a href="https://japan-heritage.bunka.go.jp/ja/news/3151/"  >
            <div class="wrp_img">
                                <p class="img">
                    <img src="/ja/datas/cache/images/2023/08/04/328x181_ea1e9d427fb5664c32c517a73e421e58_09224d53f920100656796d3b46ce918fae247567.png" alt="">
                </p>
                                <p class="lnk c_lnk2"><span>詳細を見る</span></p>
                                                <p class="num">イベント</p>
                            </div>
            <div class="wrp_txt">
                                <p class="story">#068 本邦国策を北海道に観よ！</p>
                                <p class="day"><em>2023.08.04</em></p>
                <p class="st">【北海道安平町】日本遺産「炭鉄港」記念イベント「鉄路の軌跡」を開催します</p>
                                                    <p class="txt">日本遺産「炭鉄港」の構成文化財であるＤ51ステーションのシンボル「Ｄ51 320」。日本の近代化を石炭輸送で支えた蒸気機関車・旧追分機関区の栄光とその軌跡を振り返る鉄道イベントを開催いたします。</p>
                                                <ul class="prefec">
                                        <li>北海道</li>
                                    </ul>
                            </div>
            </a>
        </li>
*/
