<template>
  <div>
    <h2>Input Note</h2>
    <textarea v-model="notes" @input="autosaveNotes()"></textarea>
    <div v-if="pendingChanges">Unsaved changes</div>
    <div v-else>Saved successfully</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MarkdownEditor',
  computed: {
    ...mapState(['pendingChanges']),
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
      this.$store.dispatch('autosaveNotes', this.notes)
    }
  }
};
</script>