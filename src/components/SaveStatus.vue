<template>
  <div id="save-status">
    <div v-if="pendingChanges">Unsaved changes</div>
    <div v-else>Saved successfully</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SaveStatus',
  computed: {
    ...mapState({
      pendingChanges: state => state.file.pendingChanges
    })
  }
};
</script>