<template>
  <div>
    <h2>Input Note</h2>
    <textarea v-model="notes" @input="autosaveNotes()"></textarea>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MarkdownEditor',
  computed: {
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