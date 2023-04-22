import RestoListPresenter from '../../models/restoListModel';
import RestoDetailPresenter from '../../models/restoDetailModel';
import RestoDataSource from '../../data/resto-api-source';
import FavoriteRestoIdb from '../../data/resto-fav-idb';
import { createElement } from '../../utils';

import './_home-page';
import './_detail-page';
import './_favorite-page';

function home() {
  const view = createElement('home-page');
  const model = RestoDataSource;
  const presenter = new RestoListPresenter({ view, model });
  return presenter;
}

function detail() {
  const view = createElement('detail-page');
  const model = {
    detail: RestoDataSource,
    favorite: FavoriteRestoIdb,
  };
  const presenter = new RestoDetailPresenter({ view, model });
  return presenter;
}

function favorite() {
  const view = createElement('favorite-page');
  const model = FavoriteRestoIdb;
  const presenter = new RestoListPresenter({ view, model });
  return presenter;
}

export { home, detail, favorite };
