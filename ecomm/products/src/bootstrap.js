import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// context/situation #1
// running in dev env in isolation
// using local index.html file with an id of dev-products
// render app into that element
if (process.env.NODE_ENV === 'development') {
  // ideally using a unique ID that a parent container app wouldn't have
  const el = document.querySelector('#dev-products');

  if (el) {
    // probably running in isolation
    mount(el);
  }
}

// context/situation #2
// running in development or production in container app
// no guarantee that element with 'dev-products' id exists
// don't immediately render the app
export { mount };