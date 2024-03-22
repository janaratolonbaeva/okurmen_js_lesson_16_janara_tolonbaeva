document.addEventListener('DOMContentLoaded', () => {
  //'https://dummyjson.com/products'
  const container = document.querySelector('.container');

  // 1 method
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dummyjson.com/products', true);
  xhr.addEventListener('load', () => {
    // if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    renderData(data);
  });

  xhr.send();

  function renderData(data) {
    data.products.map((product, index) => {
      const name = document.createElement('p');
      const price = document.createElement('p');
      const img = document.createElement('img');

      name.innerHTML = `${index + 1} ${product.title}`;
      price.innerHTML = product.price;
      img.setAttribute('src', product.thumbnail);

      container.appendChild(name);
      container.appendChild(price);
      container.appendChild(img);

      return container;
    });
  }

  // 2 method
});
