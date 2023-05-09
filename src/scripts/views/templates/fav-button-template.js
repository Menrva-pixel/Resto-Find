const FAV_BUTTON_TEMPLATE = () => `
  <button tabindex="0" aria-label="fav this restaurant" id="favButton" class="fav">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const UNFAV_BUTTON_TEMPLATE = () => `
  <button tabindex="0" aria-label="unfav this restaurant" id="favButton" class="fav">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export { FAV_BUTTON_TEMPLATE, UNFAV_BUTTON_TEMPLATE };
