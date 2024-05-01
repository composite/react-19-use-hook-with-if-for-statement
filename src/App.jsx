import { use } from 'react';

const wait = () =>
  new Promise((ok) => setTimeout(ok, ~~(Math.random() * 1000)));

const fetchProductList = async () => {
  await wait();
  return [1, 2, 3, 4, 5].map((r) => ({ productId: r }));
};

const fetchProductDetail = async (id) => {
  await wait();
  return {
    name: 'Product ' + id,
    enabled: !!~~(Math.random() * 2),
  };
};

const fetchEmptyReason = async () => {
  await wait();
  return "I don't know";
};

function App() {
  const list = use(fetchProductList());

  for (let i = 0; i < list.length; i++) {
    const item = use(fetchProductDetail(list[i].productId));
    if (item.enabled) {
      list[i] = <li key={list[i].productId}>Product name: {item.name}</li>;
    } else list[i] = false;
  }

  if (list.every((r) => !r)) {
    const reason = use(fetchEmptyReason());
    return <div>Product not found: {reason}</div>;
  }

  return <ul>{list}</ul>;
}

export default App;
