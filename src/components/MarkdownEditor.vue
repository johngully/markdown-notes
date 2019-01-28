<template>
  <div id="markdown-editor" class="position-left">
    <textarea v-model="notes" @input="autosaveNotes()"></textarea>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MarkdownEditor',
  computed: {
    ...mapState({
      currentFilePath: state => state.file.currentFilePath
    }),
    notes: {
      get () {
        return this.$store.state.notes;
      },
      set (value) {
        this.$store.commit('updateNotes', value);
      }
    }
  },
  methods: {
    autosaveNotes: function () {
      this.$store.dispatch('autosaveNotes', { filePath: this.currentFilePath, notes: this.notes })
    }
  }
};
</script>