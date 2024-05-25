<template>
  <div class="recursion-container">
    <div class="code-container">
      <pre><code id="code-sample">{{ codeSamples[code] }}</code></pre>
    </div>
    <div class="stack-container">
      <h2>Call Stack</h2>
      <div id="stack" class="stack">
        <div v-for="(item, index) in stack" :key="index" class="stack-item">
          {{ item }}
        </div>
      </div>
    </div>
    <button class="step-button" @click="step">Step</button>
    <button class="reset-button" @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      stepIndex: 0,
      stack: [],
      codeSamples: {
        fib: `
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 5
        `,
        factorial: `
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
        `,
        isEven: `
function isEven(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
}

console.log(isEven(4)); // true
        `,
        "memo-ex": `
function memoizedFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  return memo[n];
}

console.log(memoizedFib(5)); // 5
        `
      },
      steps: {
        fib: [
          "Call fib(5)",
          "Call fib(4)",
          "Call fib(3)",
          "Call fib(2)",
          "Call fib(1)",
          "Return 1",
          "Return 1 + fib(0)",
          "Return 1 + 0",
          "Return 1 + fib(1)",
          "Return 1 + 1",
          "Return 2 + fib(2)",
          "Return 2 + 1",
          "Return 3 + fib(3)",
          "Return 3 + 2",
          "Return 5"
        ],
        factorial: [
          "Call factorial(5)",
          "Call factorial(4)",
          "Call factorial(3)",
          "Call factorial(2)",
          "Call factorial(1)",
          "Call factorial(0)",
          "Return 1",
          "Return 1 * 1",
          "Return 2 * 1",
          "Return 3 * 2",
          "Return 4 * 6",
          "Return 5 * 24"
        ],
        isEven: [
          "Call isEven(4)",
          "Call isEven(2)",
          "Call isEven(0)",
          "Return true"
        ],
        "memo-ex": [
          "Call memoizedFib(5)",
          "Call memoizedFib(4)",
          "Call memoizedFib(3)",
          "Call memoizedFib(2)",
          "Call memoizedFib(1)",
          "Return 1",
          "Return 1 + memoizedFib(0)",
          "Return 1 + 0",
          "Return 1 + memoizedFib(1)",
          "Return 1 + 1",
          "Return 2 + memoizedFib(2)",
          "Return 2 + 1",
          "Return 3 + memoizedFib(3)",
          "Return 3 + 2",
          "Return 5"
        ]
      }
    };
  },
  methods: {
    step() {
      const steps = this.steps[this.code];
      if (this.stepIndex < steps.length) {
        this.stack.push(steps[this.stepIndex]);
        this.stepIndex++;
      }
    },
    reset() {
      this.stepIndex = 0;
      this.stack = [];
    }
  }
};
</script>
