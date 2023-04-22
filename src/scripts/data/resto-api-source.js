import API_ENDPOINT from '../globals/api-endpoint';
import { getData } from '../utils';

class restoApiSource {
  static async getRestoList() {
    try {
      const jsonResponse = await getData(API_ENDPOINT.LIST);
      if (jsonResponse.restaurants) {
        return jsonResponse.restaurants;
      }
      throw new Error('Tidak ada daftar Restaurant.');
    } catch (error) {
      console.error(error);
    }
  }

  static async getRestoDetail(id) {
    try {
      const jsonResponse = await getData(API_ENDPOINT.DETAIL(id));
      if (jsonResponse.restaurant) {
        return jsonResponse.restaurant;
      }
      throw new Error('Tidak dapat menemukan detail Restaurant.');
    } catch (error) {
      console.error(error);
    }
  }
}

export default restoApiSource;
