/* eslint-disable no-prototype-builtins */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const DB_PROMISE = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

class favRestoIdb {
  static async getResto(id) {
    if (id === undefined) {
      return;
    }
    const db = await DB_PROMISE;
    return db.get(OBJECT_STORE_NAME, id);
  }

  // Get all gallery restaurant
  async getRestoList() {
    return (await DB_PROMISE).getAll(OBJECT_STORE_NAME);
  }

  // Put gallery restaurant
  static async addResto(resto) {
    if (!Object.prototype.hasOwnProperty.call(resto, 'id')) {
      return;
    }
    const db = await DB_PROMISE;
    return db.put(OBJECT_STORE_NAME, resto);
  }

  // Delete gallery restaurant
  static async deleteResto(id) {
    const db = await DB_PROMISE;
    return db.delete(OBJECT_STORE_NAME, id);
  }
}

export default favRestoIdb;
