import generateComp from './plopConfig/zsj/generateComp.js';
console.log(generateComp);
export default function (plop) {
  plop.setHelper('upperCase', function (text) {
    const firstChar = text.charAt(0).toUpperCase();
    console.log(text);
    return firstChar + text.substring(1);
  });

  // create your generators here
  plop.setGenerator('comp', generateComp);
}
