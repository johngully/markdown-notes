<template>
  <div id="open-notes">
    <button type="button" @click="openNotes(selectedFilePath)">Open File</button> <span>{{selectedFilePath}}</span>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'OpenNotes',
  computed: {
    ...mapState({
      selectedFilePath: state => state.file.selectedFilePath
    })
  },
  methods: {
    ...mapActions(['openNotes'])
  }
}
</script>