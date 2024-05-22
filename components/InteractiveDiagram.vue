<template>
  <div class="event-loop-visualizer">
    <div class="section">
      <h3>Call Stack</h3>
      <ul>
        <li v-for="(item, index) in callStack" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="section">
      <h3>Web APIs</h3>
      <ul>
        <li v-for="(item, index) in webAPIs" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="section">
      <h3>Callback Queue</h3>
      <ul>
        <li v-for="(item, index) in callbackQueue" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="section">
      <h3>Event Loop</h3>
      <button @click="runEventLoop">Run Event Loop</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      callStack: [],
      webAPIs: [],
      callbackQueue: []
    };
  },
  methods: {
    runEventLoop() {
      this.callStack.push('main()');

      setTimeout(() => {
        this.webAPIs.push('setTimeout()');
        this.webAPIs.shift();
        this.callbackQueue.push('callback from setTimeout()');
      }, 1000);

      this.callStack.push('console.log("Start")');
      console.log('Start');
      this.callStack.pop();

      this.webAPIs.push('setTimeout()');
      this.webAPIs.pop();

      setTimeout(() => {
        this.webAPIs.push('setTimeout()');
        this.webAPIs.shift();
        this.callbackQueue.push('callback from setTimeout()');
      }, 500);

      this.callStack.push('console.log("End")');
      console.log('End');
      this.callStack.pop();

      this.callStack.pop();

      setInterval(() => {
        if (this.callbackQueue.length > 0) {
          this.callStack.push(this.callbackQueue.shift());
          this.callStack.pop();
        }
      }, 1000);
    }
  }
};
</script>

<style>
.event-loop-visualizer {
  display: flex;
  gap: 20px;
}

.section {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f4f4f4;
  padding: 5px;
  margin-bottom: 5px;
}
</style>
