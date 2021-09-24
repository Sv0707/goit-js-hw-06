
const countElem = document.querySelectorAll('.item');

console.log(`Number of categories: ${countElem.length}`);

countElem.forEach(item => {
  console.log(`Category: ${item.querySelector("h2").textContent}` );
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
}
);