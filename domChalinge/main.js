// Styling Body
document.body.style.backgroundColor = "#e6e6e6";
document.body.style.padding = "0";
document.body.style.margin = "0";
document.body.style.fontFamily = "arial";

// Start Header

let header = document.createElement("header");
let logo = document.createElement("h1");
let links = document.createElement("ul");
let liOne = document.createElement("li");
let liTwo = document.createElement("li");
let liThree = document.createElement("li");
let allLis = document.querySelectorAll("li");
let logoText = document.createTextNode("Logo");
let liOneText = document.createTextNode("Home");
let liTwoText = document.createTextNode("About");
let liThreeText = document.createTextNode("Services");
let headerClass = document.createTextNode("header");

// Append Header , Header children's To body

document.body.appendChild(header);
header.appendChild(logo);
header.appendChild(links);
// Append Children To Parent

links.appendChild(liOne);
links.appendChild(liTwo);
links.appendChild(liThree);

// Append Text To Element
logo.appendChild(logoText);
liOne.appendChild(liOneText);
liTwo.appendChild(liTwoText);
liThree.appendChild(liThreeText);

// Styling Header
header.classList.add("header");
header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0 50px;
`;

logo.style.color = "#22a96e";

links.style.cssText = `
    list-style: none; 
    margin-left: 10px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

liOne.style.cssText = "margin-right: 15px";
liTwo.style.cssText = "margin-right: 15px";

// End Header

// Starting Main Div

let mainDiv = document.createElement("div");
mainDiv.classList = "main-page";

// Append Main Div To body

document.body.appendChild(mainDiv);

// Main Div Styling

mainDiv.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0px 50px;
    gap: 20px 30px;
    margin-top: 20px;
`;

// Append product To main div

for (let i = 0; i < 1e2; i++) {
  let productDiv = document.createElement("div");
  productDiv.classList = "product";

  mainDiv.appendChild(productDiv);

  let mainH = document.createElement("h1");
  mainH.classList = "title";
  let headingValue = document.createTextNode(`${i + 1}`);

  mainH.appendChild(headingValue);

  // Append Heading to product
  productDiv.appendChild(mainH);

  let mainP = document.createElement("p");
  mainP.classList = "description";
  let mainPvalue = document.createTextNode("Product");
  mainP.appendChild(mainPvalue);
  // Append mainP to product

  productDiv.appendChild(mainP);

  //   productDiv style

  productDiv.style.cssText = `
    padding: 15px 50px;
    text-align: center;
    background-color: white;
  `;
  mainP.style.color = "#777";
}

// End product div

// Start Footer

let footer = document.createElement("footer");
let footerText = document.createTextNode("Copyright 2025");

// Append footer to body

document.body.appendChild(footer);

// Append Text To Footer

footer.appendChild(footerText);

// Footer styling

footer.style.textAlign = "center";
footer.style.paddingBlock = "20px";
footer.style.background = "#22a96e";
footer.style.margin = "10px 0 0 0";
