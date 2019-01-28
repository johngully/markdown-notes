export default {
  openNotesSuccess: function (state, notes) {
    console.debug('MUTATION:', 'openNotesSuccess', notes);
    state.notes = notes;
    state.file.currentFilePath = state.file.selectedFilePath;
    // Do not set pendingChanges = true since this is the first time the notes are set
  },

  openNotesError: function (state, error) {
    console.debug('MUTATION:', 'openNotesError', error);
  },

  saveNotesSuccess: function (state, notes) {
    console.debug('MUTATION:', 'saveNotesSuccess', notes)
    // TODO: This may not be needed after saving the file
    state.file.pendingChanges = false;
  },

  saveNotesError: function (state, error) {
    console.debug('MUTATION:', 'saveNotesError', error);
    // TODO: Hanlde error conditions when the file is not saved
  },

  updateNotes: function (state, notes) {
    console.debug('MUTATION:', 'updateNotesError', notes);
    state.notes = notes;
    state.file.pendingChanges = true;
  }
}
