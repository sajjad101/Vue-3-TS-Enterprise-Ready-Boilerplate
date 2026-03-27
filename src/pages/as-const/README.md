## 📌 Core Concept: `as const`

When you use `as const`, TypeScript treats the value as a **literal type** instead of a general type like `string` or `number`.

### Without `as const`:
```ts
const endpoint = 'https://api.example.com';
// type: string ❌
With as const:
const endpoint = 'https://api.example.com' as const;
// type: 'https://api.example.com' ✅
## 🧠 Why It Matters

Using as const allows you to:

✅ Make values immutable (read-only)
✅ Have more precise types (Literal Types)
✅ Reduce potential bugs
✅ Optimize memory usage at compile time
## ⚙️ Code Breakdown
1. Define Config with as const
const CONFIG_OPTIONS = {
  endpoint: 'https://api.example.com',
  timeout: 5000,
  retries: 3
} as const;

🔹 Here, all values are:

readonly
Stored as literal types

2. Derive Type from Config
type Config = typeof CONFIG_OPTIONS;

🔹 This ensures:

Type is always in sync with the value
No need to manually define types
🎯 Real-world Use Cases

Use as const in scenarios like:

🔹 Configuration settings
🔹 Dropdown options
🔹 Manual enums
🔹 Fixed API routes
🔹 Theme settings
❗ Important Note

as const only affects compile-time, not runtime.

It doesn’t significantly change runtime performance
But it makes the code safer and more predictable
## 🧩 Summary

Using as const is a simple yet powerful best practice that:

Makes your code cleaner
Prevents bugs
Improves the TypeScript development experience

## ❗ Important Note

`as const` only affects **compile-time**, not runtime.  

This means:

- It does **not significantly change runtime performance**  
- But it makes your code **safer and more predictable**