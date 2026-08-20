// Push product data to GTM dataLayer on page load
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'product_view',
  'product_name': document.getElementById('product-name').innerText,
  'product_price': document.getElementById('product-price').innerText
});

// sends POST request to httpbin.org with product data
async function sendData() {
  const item = window.dataLayer.find(i => i.event === 'product_view');

  const response = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      product_name: item.product_name,
      product_price: item.product_price
    })
  });

  const data = await response.json();
  console.log(data);
}