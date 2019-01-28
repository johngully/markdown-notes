<template>
  <div id="app">
    <OpenNotes />
    <MarkdownEditor />
    <MarkdownPreview />
    <SaveStatus />
  </div>
</template>

<script>
import MarkdownEditor from './components/MarkdownEditor.vue'
import MarkdownPreview from './components/MarkdownPreview.vue'
import OpenNotes from './components/OpenNotes.vue'
import SaveStatus from './components/SaveStatus.vue'

export default {
  name: 'app',
  components: {
    MarkdownEditor,
    MarkdownPreview,
    OpenNotes,
    SaveStatus
  }
}
</script>

<style>
html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  padding: 0;
  margin: 0;
}

.light-mode {
  background-color: #ffffff;
  color: #2c3e50;
}
.light-mode textarea {
  background-color: #ffffff;
  color: #2c3e50;
}

.dark-mode {
  color: #ffffff;
  background-color: #2c3e50;
}
.dark-mode textarea {
  color: #ffffff;
  background-color: #2c3e50;
}
.dark-mode a {
  color: #ffffff;
  font-weight: 550;
}

input, textarea {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 1em;
}

textarea {
  border: 0;
}

#app {
  box-sizing: border-box;
  height: 100vh;
  padding: 1% 2%;
  
  display: grid;
  grid-template-columns: 1fr 2% 1fr;
  grid-template-rows: 100px auto 50px;
  justify-items: stretch;
  justify-content: stretch;
}

#open-notes {
  grid-column: 1 / span 3;
  grid-row: 1;
}

#markdown-editor {
  background-color: green;
}

#markdown-editor textarea {
  width: 100%;
  height: 100%;
  resize: none;
  outline: 0;
}

#markdown-preview {
  
}

#save-status {
  grid-column: 1;
  grid-row: 3;
  align-self: end;
}

.positon-left {
  grid-column: 1;
  grid-row: 2;
}
.position-right {
  grid-column: 3;
  grid-row: 2;
}
.position-full {
  grid-column: 1 / span 3;
  grid-row: 2;
}
.position-none {
  display: none;
}
</style>
