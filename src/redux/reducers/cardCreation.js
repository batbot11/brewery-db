import { CHANGE_DATA, SET_FORM_DATA, SET_LABEL_FILE, SET_PRIMARY_NOTES, SET_HINT_NOTES, SET_GLASSWARES } from '../constants/cardCreation';

const initialState = {
  productData : {
    name: "",
    isNewProduct: false,
    abv: "",
    ibu: "",
    isAvailable: false,
    srm: 0,
    isGlutenFree: false,
    isOrganic: false,
    isNonAlcoholic: false,
    allergyWarnings: ['none'],
    label: "",
    associationStyle: "",
    customStyleName: "",
    tasteDescription: "",
    bitterness: 0,
    primaryNotes: [],
    hintNotes: [],
    productDescription: "",
    glassware: "",
    suggestedServingTemp: "",
    suggestedFoodPairing: "",
    yeasts: '',
    hops: '',
    malts: ''
  },
  labelFile: null,
  primaryNotes: [],
  hintNotes: [],
  glasswares: [],
};

const cardCreationReducer = (state = initialState, action) => {
  // console.log('inside card creation reducer', action);
  switch (action.type) {
    case CHANGE_DATA:
      return {...state, [action.name]: action.data};
    case SET_FORM_DATA:
      return {...state, productData: action.data};
    case SET_LABEL_FILE:
      return {...state, labelFile: action.data};
    case SET_PRIMARY_NOTES:
      return {...state, primaryNotes: action.data};
    case SET_HINT_NOTES:
      return {...state, hintNotes: action.data};
    case SET_GLASSWARES:
      return {...state, glasswares: action.data};
    default:
      return state;
  }
};

export default cardCreationReducer;