/**
 * Завдання 3 — Замикання та async/await
 * createApiClient(baseUrl) — замикання для зберігання baseUrl і лічильника запитів.
 */

function createApiClient(baseUrl) {
  // Приватний лічильник — зберігається у замиканні, недоступний ззовні
  let requestCount = 0;

  return {
    /**
     * Асинхронний GET-запит.
     * @param {string} path — шлях, що додається до baseUrl
     * @returns {Promise<object>} — розпарсений JSON або { error: "Запит не вдався" }
     */
    async get(path) {
      try {
        const response = await fetch(baseUrl + path);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        requestCount++; // збільшуємо лічильник після успішного запиту
        return data;
      } catch (error) {
        requestCount++; // лічимо навіть невдалі запити
        return { error: "Запит не вдався" };
      }
    },

    /**
     * Повертає кількість виконаних запитів.
     * @returns {number}
     */
    getRequestCount() {
      return requestCount;
    },
  };
}

// --- Демонстрація використання (Node.js 18+ або браузер) ---
async function demo() {
  console.log("=== Завдання 3 ===");

  const api = createApiClient("https://jsonplaceholder.typicode.com");

  // Запит 1 — один користувач
  const user = await api.get("/users/1");
  console.log("Користувач:", user.name, user.email);

  // Запит 2 — список постів (перші 3)
  const posts = await api.get("/posts");
  console.log("Постів отримано:", Array.isArray(posts) ? posts.length : 0);

  // Запит 3 — невдалий запит
  const bad = await api.get("/nonexistent-endpoint-404");
  console.log("Невдалий запит:", bad);

  // Лічильник
  console.log("Кількість запитів:", api.getRequestCount()); // 3
}

demo().catch(console.error);
