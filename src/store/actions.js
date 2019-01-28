import debounce from 'lodash/debounce';

// Refactor this interval to a configuration
const autosaveInterval = 2000;

export default {
  autosaveNotes: debounce(function ({ dispatch }, notes) {
    console.debug('ACTION:', 'autosaveNotes', `debounced to every ${autosaveInterval}ms`);
    dispatch('saveNotes', notes);
  }, autosaveInterval),

  saveNotes: function ({ commit }, notes) {
    console.debug('ACTION:', 'saveNotes')
    // return a promise after saving the notes
    commit('saveNotesSuccess', notes);
  }
}
