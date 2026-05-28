/**
 * Завдання 1 — Змінні, умови, цикли, функції
 * Функція summarizeNumbers(numbers) повертає статистику по масиву чисел.
 */

function summarizeNumbers(numbers) {
  // Обробка порожнього масиву
  if (!numbers || numbers.length === 0) {
    return {
      count: 0,
      sum: 0,
      evenCount: 0,
      max: undefined,
      category: "empty",
    };
  }

  let sum = 0;
  let evenCount = 0;
  let max = numbers[0];

  // Цикл для обчислень (без методів вищого порядку)
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];

    sum += n;

    if (n % 2 === 0) {
      evenCount++;
    }

    if (n > max) {
      max = n;
    }
  }

  // Визначення категорії
  let category;
  if (sum > 0) {
    category = "positive";
  } else {
    category = "non-positive";
  }

  return {
    count: numbers.length,
    sum,
    evenCount,
    max,
    category,
  };
}

// --- Тести ---
console.log("=== Завдання 1 ===");
console.log(summarizeNumbers([4, 7, 2, 9]));
// { count: 4, sum: 22, evenCount: 2, max: 9, category: 'positive' }

console.log(summarizeNumbers([]));
// { count: 0, sum: 0, evenCount: 0, max: undefined, category: 'empty' }

console.log(summarizeNumbers([-3, -1, -2]));
// { count: 3, sum: -6, evenCount: 1, max: -1, category: 'non-positive' }

console.log(summarizeNumbers([0]));
// { count: 1, sum: 0, evenCount: 1, max: 0, category: 'non-positive' }
