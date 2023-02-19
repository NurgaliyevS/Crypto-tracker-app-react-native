import {
  bitcoinImage,
  ethereumImage,
  tetherImage,
  polygonImage,
} from "../Constants/index";

function fakeDataMethod(source, title, price, percentage, isPositive, id) {
  this.source = source;
  this.title = title[0].toUpperCase() + title.slice(1, title.length).toLowerCase();
  this.price = price + '$';
  this.percentage = percentage + "%";
  this.isPositive = isPositive;
  this.id = id;
}

const obj1 = new fakeDataMethod(bitcoinImage, "bitcoin", 30000, 0.1, 30, true, 1);
const obj2 = new fakeDataMethod(ethereumImage, "ethereum", 2750, 0.2, 10, true, 2);
const obj3 = new fakeDataMethod(polygonImage, "polygon", 300, 30, true, 3);
const obj4 =new fakeDataMethod(tetherImage, "tether", 1, 0.1, false, 4);

export const fakeData = {
    obj1,
    obj2,
    obj3,
    obj4
}