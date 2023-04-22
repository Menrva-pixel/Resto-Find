import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

class favRestoIdb {
  static async getResto(id) {
    if (id === undefined) {
      return;
    }
    const db = await dbPromise;
    return db.get(OBJECT_STORE_NAME, id);
  }

  static async getRestoList() {
    const db = await dbPromise;
    return db.getAll(OBJECT_STORE_NAME);
  }

  static async addResto(resto) {
    if (!Object.prototype.hasOwnProperty.call(resto, 'id')) {
      return;
    }
    const db = await dbPromise;
    return db.put(OBJECT_STORE_NAME, resto);
  }

  static async deleteResto(id) {
    const db = await dbPromise;
    return db.delete(OBJECT_STORE_NAME, id);
  }
}

export default favRestoIdb;
