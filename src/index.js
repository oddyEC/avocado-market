/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};
// Intl
// 1- format dates
// 2. format money

//web api
//Conectarnos al servidor
//web api
async function fetchData() {
  const response = await fetch(`${baseUrl}/api/avo`),
    data = await response.json(),
    allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    image.src = `${baseUrl}${item.image}`;
    image.className =
      "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
    // create title
    const title = document.createElement("h2");
    title.textContent = item.name;
    title.className = "text-lg";

    // create price
    const price = document.createElement("div");
    price.textContent = formatPrice(item.price);
    price.className = "text-gray-600";

    //wrap price & title
    const priceAndTitle = document.createElement("div");
    priceAndTitle.className = "text-center md:text-left";
    priceAndTitle.append(title, price);
    //Wrap Img and priceAndTitle
    const container = document.createElement("div");
    container.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
    container.append(image, priceAndTitle);
    console.log(container);
    allItems.push(container);
  });

  appNode.append(...allItems);
}

fetchData();

//Procesar la respuesta y convertirla en JSON

// json --> data --> Renderizar info browser
