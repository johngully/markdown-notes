<template>
  <div>
    <h2>Input Preview</h2>
    <div v-html="notesAsHtml"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MarkdownPreview',
  computed: {
    ...mapGetters(['notesAsHtml']),
  }
}
</script>