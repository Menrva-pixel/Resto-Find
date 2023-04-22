export default class ViewModel {
  constructor({ view, model }) {
    this.view = view;
    this._model = model;
  }

  displayContent(content) {
    this.view.data = content;
  }

  displayMessage(message) {
    this.view.showMessage(message);
  }
}
