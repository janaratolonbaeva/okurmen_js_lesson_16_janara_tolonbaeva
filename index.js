document.addEventListener('DOMContentLoaded', () => {
  //'https://dummyjson.com/products'
  const container = document.querySelector('.container');

  // 1 method
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dummyjson.com/products', true);
  xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      console.log('data', data);
      data.products.map((product, index) => {
        return renderData(product, index);
      });
    }
  };

  xhr.send();

  function renderData(product, index) {
    const name = document.createComment('p');
    const price = document.createComment('p');
    const img = document.createComment('img');

    name.innerHTML = `${index} product.title`;
    price.innerHTML = product.price;
    img.setAttribute('src', product.thumbnail);

    container.appendChild(name);
    container.appendChild(price);
    container.appendChild(img);
  }
});
