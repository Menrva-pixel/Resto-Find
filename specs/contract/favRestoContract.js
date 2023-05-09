/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the restaurant that has been added', async () => {
    favoriteResto.addResto({ id: 1 });
    favoriteResto.addResto({ id: 2 });
    expect(await favoriteResto.getResto(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getResto(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getResto(3))
      .toEqual(undefined);
  });
  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteResto.addResto({ aProperty: 'property' });
    expect(await favoriteResto.getRestoList())
      .toEqual([]);
  });
  it('can return all of the restaurants that have been added', async () => {
    favoriteResto.addResto({ id: 1 });
    favoriteResto.addResto({ id: 2 });
    expect(await favoriteResto.getRestoList())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });
  it('should remove favorite restaurant', async () => {
    favoriteResto.addResto({ id: 1 });
    favoriteResto.addResto({ id: 2 });
    favoriteResto.addResto({ id: 3 });
    await favoriteResto.deleteResto(1);
    expect(await favoriteResto.getRestoList())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });
  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteResto.addResto({ id: 1 });
    favoriteResto.addResto({ id: 2 });
    favoriteResto.addResto({ id: 3 });
    await favoriteResto.deleteResto(4);
    expect(await favoriteResto.getRestoList())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};
export { itActsAsFavoriteRestoModel };
