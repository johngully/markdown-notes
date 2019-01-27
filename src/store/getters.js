import marked from 'marked';

export default {
  notesAsHtml: state => marked(state.notes)
}
