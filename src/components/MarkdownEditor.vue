<template>
  <div>
    <h2>Input Note</h2>
    <textarea v-model="notes" @keyup="saveNotes()">
      # Note Title

      Note contents

      ## Bulleted list

      * One item
      * Another item

      ## Code block

      ```
      function () {
        test
      }
      ```
    </textarea>
    <div v-html="renderedNotes"></div>
  </div>
</template>

<script>
import marked from 'marked';
import debounce from 'lodash/debounce';

// Refactor this interval to a configuration
const autosaveInterval = 5000;
const defaultNotes = `# Note Title

Note contents

## Bulleted list

* One item
* Another item

## Code block
todo
`;

export default {
  name: 'MarkdownEditor',
  computed: {
    renderedNotes: function () {
      return this.renderMarkdown(this.notes);
    }
  },
  data: function () {
    return {
      notes: defaultNotes
    }
  },
  methods: {
    renderMarkdown: function(value) {
      console.log('Render markdown');
      return marked(value, { sanitize: true } );
    },
    saveNotes: debounce(function() {
      console.log('Autosaving Notes');
      // console.log(this.notes);
      // this.renderedNotes = this.renderMarkdown(this.notes);
    }, autosaveInterval)
  },
  props: {

  }
};
</script>