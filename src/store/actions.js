import debounce from 'lodash/debounce';
import { promises as fs } from 'fs';

// Refactor this interval to a configuration
const autosaveInterval = 5000;
const fileEncoding = 'utf-8';

export default {
  autosaveNotes: debounce(function ({ dispatch }, { filePath, notes }) {
    console.debug('ACTION:', 'autosaveNotes', `debounced to every ${autosaveInterval}ms`);
    return dispatch('saveNotes', { filePath, notes });
  }, autosaveInterval),

  openNotes: function ({ commit }, filePath) {
    console.debug('ACTION:', 'openNotes', filePath);
    return fs.readFile(filePath, fileEncoding)
      .then(notes => commit('openNotesSuccess', notes))
      .catch(error => commit('openNotesError', error));
  },

  saveNotes: function ({ commit }, { filePath, notes }) {
    console.debug('ACTION:', 'saveNotes')
    return fs.writeFile(filePath, notes, fileEncoding)
      .then(notes => commit('saveNotesSuccess', notes))
      .catch(error => commit('saveNotesError', error));
  }
}
