---
title: "Binary Search: The Algorithm Every Dev Should Love"
date: 2025-06-20
---

# Binary Search: The Algorithm Every Dev Should Love

Let’s talk about **binary search**—the classic, super-efficient way to find stuff in a sorted array. It’s everywhere: databases, search engines, even deep inside your favorite programming languages. And honestly? It’s a joy to use.

---

## The Big Idea

> Divide and conquer, but make it chill.

At each step, you split the array in two:

- If the **middle value** matches your target → you win.
- If the middle is **bigger**, search the left half.
- Otherwise, search the right half.

➡️ Every round, you **halve the search space**. Feels good, right?

---

## When to Use It

- The array must be **sorted in ascending order**
- You go from **O(n)** (linear search) to **O(log n)** (so much faster!)

---

## TypeScript Implementation

```ts
function binarySearch(arr: number[], target: number): number {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) return mid
    if (arr[mid] < target) left = mid + 1
    else right = mid - 1
  }

  return -1 // not found
}
```

---

## Example

```ts
const array = [3, 5, 8, 12, 17, 23]
binarySearch(array, 12) // → 3 (index)
```

Step by step:

1. Middle = 8 → 12 is bigger → go right
2. Middle = 17 → 12 is smaller → go left
3. Middle = 12 → found it!

---

## Why It Rocks

* 🔍 **Fast** on big sorted arrays
* 🤓 **Simple to code**
* 🧠 Complexity: **O(log n)** (that’s super efficient)

---

## Gotchas

* ⚠️ Only works on **sorted data**
* Not always worth it if:
  * The array is tiny
  * It changes a lot (maybe use a Map or Set instead)

---

## Variations

* **Recursive search**
* **First/last occurrence search**
* **Search on objects or dates**
* **Floating-point search** (like `Math.sqrt()` by bisection)

---

## Wrap-Up

Binary search is a **fundamental, fun, and fast algorithm**. It’s a great intro to efficient coding, and honestly, it’s just cool to have in your dev toolkit. Give it a try next time you need to find something fast!
