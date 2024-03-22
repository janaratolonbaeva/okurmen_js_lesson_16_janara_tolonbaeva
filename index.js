document.addEventListener('DOMContentLoaded', () => {
  //'https://dummyjson.com/products'
  const container = document.querySelector('.container');

  // 1 method
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dummyjson.com/products', true);
});
