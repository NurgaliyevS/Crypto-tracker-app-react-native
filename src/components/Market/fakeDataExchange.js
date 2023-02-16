import {
  bybitLogo,
  coinbaseLogo,
  krakenLogo,
  kucoinLogo,
  binanceLogo,
} from "../Constants/index";

function fakeDataMethod(source, title, price, percentage, isPositive) {
  this.source = source;
  this.title =
    title[0].toUpperCase() + title.slice(1, title.length).toLowerCase();
  this.price = price.toLocaleString('en-US') + " Bn";;
  this.percentage = percentage + "%";
  this.isPositive = isPositive;
}

const obj1 = new fakeDataMethod(binanceLogo, "Binance", 91.728, 32.26, true);
const obj2 = new fakeDataMethod(bybitLogo, "Bybit", 15.911, 39.27, true);
const obj3 = new fakeDataMethod(coinbaseLogo, "Coinbase Exchange", 2.391, 69.47, true);
const obj4 = new fakeDataMethod(krakenLogo, "Kraken", 1.217, 10.70, true);
const obj5 = new fakeDataMethod(kucoinLogo, "KuCoin", 4.514, 39.68, true);

export const fakeDataExchange = {
  obj1,
  obj2,
  obj3,
  obj4,
  obj5
};
