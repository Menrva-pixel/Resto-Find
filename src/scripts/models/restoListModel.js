import Presenter from './viewModel';

class RestoListModel extends Presenter {
  constructor(options) {
    super(options);
  }

  async showContent() {
    try {
      const allRestoList = await this._model.getRestoList();
      if (allRestoList.length > 0) {
        this.displayContent(allRestoList);
      } else {
        this.displayMessage('Daftar Kosong');
      }
    } catch (error) {
      this.displayMessage(error.message);
    }
  }
}

export default RestoListModel;
