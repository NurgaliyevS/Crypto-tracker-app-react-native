import {
  bitcoinImage,
  ethereumImage,
  tetherImage,
  polygonImage,
} from "../Constants/index";

function fakeDataMethod(source, title, desiredPrice, currentPrice) {
  this.source = source;
  this.title =
    title[0].toUpperCase() + title.slice(1, title.length).toLowerCase();
  this.desiredPrice = desiredPrice.toLocaleString('en-US') + "$";
  this.currentPrice = currentPrice.toLocaleString('en-US') + "$";
}

const obj1 = new fakeDataMethod(bitcoinImage, "bitcoin", 55000, 39432);
const obj2 = new fakeDataMethod(ethereumImage, "ethereum", 5000, 2852.93);
const obj3 = new fakeDataMethod(polygonImage, "polygon", 50, 30.22);
const obj4 = new fakeDataMethod(tetherImage, "tether", 0.95, 0.99);

export const fakeData = {
  obj1,
  obj2,
  obj3,
  obj4,
};
