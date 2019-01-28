export default {
  saveNotesSuccess: function (state, notes) {
    console.debug('MUTATION:', 'saveNotesSuccess', notes)
    // TODO: This may not be needed after saving the file
  },

  saveNotesError: function (error) {
    console.debug('MUTATION:', 'saveNotesError', error);
    // TODO: Hanlde error conditions when the file is not saved
  },

  updateNotes: function (state, notes) {
    console.debug('MUTATION:', 'updateNotesError', notes);
    state.notes = notes;
  }
}
