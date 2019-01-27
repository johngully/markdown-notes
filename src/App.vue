<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MarkdownEditor />
    <MarkdownPreview />
  </div>
</template>

<script>
import MarkdownEditor from './components/MarkdownEditor.vue'
import MarkdownPreview from './components/MarkdownPreview.vue'

export default {
  name: 'app',
  components: {
    MarkdownEditor,
    MarkdownPreview
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
