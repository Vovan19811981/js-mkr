/**
 * Завдання 2 — Масиви, об'єкти та функції вищого порядку
 * Функція processProducts(products) аналізує масив товарів.
 */

function processProducts(products) {
  // Товари в наявності
  const inStockProducts = products.filter((p) => p.inStock === true);

  // Масив назв товарів у наявності
  const available = inStockProducts.map((p) => p.name);

  // Сума цін товарів у наявності (через reduce)
  const totalPrice = inStockProducts.reduce((acc, p) => acc + p.price, 0);

  // Найдешевший товар серед наявних
  let cheapest = null;
  if (inStockProducts.length > 0) {
    cheapest = inStockProducts.reduce((min, p) =>
      p.price < min.price ? p : min
    ).name;
  }

  // Прайс-лист для ВСІХ товарів (через map)
  const priceList = products.map((p) => `${p.name} — ${p.price} грн`);

  return {
    available,
    totalPrice,
    cheapest,
    priceList,
  };
}

// --- Тести ---
console.log("=== Завдання 2 ===");

const products = [
  { name: "Чай", price: 50, inStock: true },
  { name: "Кава", price: 120, inStock: false },
  { name: "Цукор", price: 30, inStock: true },
];

console.log(processProducts(products));
// {
//   available: ['Чай', 'Цукор'],
//   totalPrice: 80,
//   cheapest: 'Цукор',
//   priceList: ['Чай — 50 грн', 'Кава — 120 грн', 'Цукор — 30 грн']
// }

// Крайній випадок — порожній масив
console.log(processProducts([]));
// { available: [], totalPrice: 0, cheapest: null, priceList: [] }

// Крайній випадок — нічого немає в наявності
const noStock = [{ name: "Хліб", price: 25, inStock: false }];
console.log(processProducts(noStock));
// { available: [], totalPrice: 0, cheapest: null, priceList: ['Хліб — 25 грн'] }
