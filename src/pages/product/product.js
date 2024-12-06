import { getPBImageURL } from "@/api/getPBImageURL";

// console.log("ss");

async function renderProduct() {
  const response = await fetch(`${import.meta.env.VITE_PB_API}/collections/products/records`);
  console.log(response);

  const data = await response.json();
  console.log(data.items[0].brand);

  const products = data.items;
  console.log(products);

  const tag = `
      <div class="container">
      <ul>
        ${products
          .map(
            (item) => `
        <li>
          <a href="/">
            <figure>
              <img src="${getPBImageURL(item)}" alt="" />
            </figure>
            <span class="brand">${item.brand}</span>
            <span class="description">${item.description}</span>
            <span class="price">${item.price.toLocaleString()}</span>
            <div>
              <span class="discount">${item.discount}%</span>
              <div class="real-price">${(item.price - item.price * (item.discount / 100)).toLocaleString()}</div>
            </div>
          </a>
        </li>
          `
          )
          .join("")}
      <ul>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", tag);
}

renderProduct();
