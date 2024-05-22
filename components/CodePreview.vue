<template>
    <div class="code-preview">
      <div class="code">
        <pre>{{ code }}</pre>
      </div>
      <div class="output">
        <button @click="runCode">Run Code</button>
        <pre>{{ output }}</pre>
      </div>
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
        output: ''
      };
    },
    methods: {
      runCode() {
        try {
          this.output = eval(this.code);
        } catch (error) {
          this.output = error.toString();
        }
      }
    }
  };
  </script>
  
  <style>
  .code-preview {
    margin: 20px 0;
  }
  .code {
    background-color: #1e1e1e;
    color: antiquewhite;
    padding: 10px;
    border: 1px solid #ccc;
  }
  .output {
    margin-top: 10px;
  }
  button {
    margin-bottom: 10px;
  }
  </style>
  