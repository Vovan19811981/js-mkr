# Підсумкова модульна робота — JavaScript

**Дисципліна:** Основи програмування мовою JavaScript  
**Охоплення:** Теми 1–11

---

## 🎥 Відео-демонстрація практичної частини

[![Демонстрація роботи практичних завдань](https://img.youtube.com/vi/T4E-XiC0AUI/maxresdefault.jpg)](https://youtu.be/T4E-XiC0AUI?si=phjv4i53fcW3fPHR)

> Відео демонструє роботу всіх 4 практичних завдань з поясненнями.

---

## Структура репозиторію

```
tasks/
  task1.js    — Змінні, умови, цикли, функції (summarizeNumbers)
  task2.js    — Масиви, об'єкти, функції вищого порядку (processProducts)
  task3.js    — Замикання та async/await (createApiClient)
  task4.html  — Класи, ООП та DOM (TodoList)
```

---

## Завдання 1 — `summarizeNumbers`

Функція приймає масив чисел і повертає об'єкт зі статистикою.

**Запуск:**
```bash
node tasks/task1.js
```

**Приклад:**
```js
summarizeNumbers([4, 7, 2, 9]);
// { count: 4, sum: 22, evenCount: 2, max: 9, category: 'positive' }

summarizeNumbers([]);
// { count: 0, sum: 0, evenCount: 0, max: undefined, category: 'empty' }
```

---

## Завдання 2 — `processProducts`

Функція аналізує масив товарів і повертає статистику: наявні, загальна ціна, найдешевший, прайс-лист.

**Запуск:**
```bash
node tasks/task2.js
```

**Приклад:**
```js
const products = [
  { name: "Чай", price: 50, inStock: true },
  { name: "Кава", price: 120, inStock: false },
  { name: "Цукор", price: 30, inStock: true }
];
processProducts(products);
// {
//   available: ['Чай', 'Цукор'],
//   totalPrice: 80,
//   cheapest: 'Цукор',
//   priceList: ['Чай — 50 грн', 'Кава — 120 грн', 'Цукор — 30 грн']
// }
```

---

## Завдання 3 — `createApiClient`

Фабрична функція-замикання для HTTP-клієнта з приватним лічильником запитів.

**Запуск** (Node.js 18+ або браузер):
```bash
node tasks/task3.js
```

**Приклад:**
```js
const api = createApiClient("https://jsonplaceholder.typicode.com");
const user = await api.get("/users/1");   // об'єкт користувача
const posts = await api.get("/posts");    // масив постів
api.getRequestCount();                    // 2
```

---

## Завдання 4 — TodoList (DOM)

Повноцінний застосунок управління завданнями у браузері.

**Запуск:** відкрити `tasks/task4.html` у браузері.

**Функціонал:**
- Додавання завдання кнопкою або клавішею Enter
- Перемикання стану done/undone кліком по рядку
- Видалення завдання кнопкою ✕
- Делегування подій (один обробник на весь список)
- Лічильник виконаних завдань

**Класи:**
- `Task` — завдання з полями `id`, `text`, `done` та методом `toggle()`
- `TodoList` — керування списком: `add()`, `remove()`, `getActive()`
