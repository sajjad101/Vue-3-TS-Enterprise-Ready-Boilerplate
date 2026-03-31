📘 Understanding markRaw
🔍 What is markRaw?

markRaw is a Vue 3 utility function that tells Vue NOT to make an object reactive.

By default, Vue wraps objects inside a Proxy to track changes (reactivity system). This is useful, but in some cases it adds unnecessary overhead.

👉 markRaw skips this process.

⚡ Why is it important?

Using markRaw helps:

Improve performance (no deep reactivity tracking)
Reduce memory usage
Prevent unwanted reactivity side effects
🧠 When should you use it?

Use markRaw when:

You are working with large objects
You are using third-party libraries (charts, maps, editors)
You have class instances
You DON'T need Vue to track changes inside the object
❌ When NOT to use it?

Avoid using markRaw when:

You need UI updates when data changes
You rely on Vue reactivity for that object


🧩 Real-World Example
import { markRaw } from 'vue'
import Chart from 'chart.js'


const chartInstance = markRaw(new Chart(ctx, config))

👉 Vue will NOT try to track internal changes of Chart.js 👉 Better performance