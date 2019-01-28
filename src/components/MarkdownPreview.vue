<template>
  <div id="markdown-preview" class="position-right">
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