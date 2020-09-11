import { CHANGE_DATA, SET_FORM_DATA, SET_LABEL_FILE, SET_PRIMARY_NOTES, SET_HINT_NOTES, SET_GLASSWARES } from '../constants/cardCreation';


export const changeData = (name, data) => {
  // console.log('inside chnage data action', name, data);
  return {
    type: CHANGE_DATA,
    data,
    name
  }
};

export const setFormData = data => {
  // console.log('inside set form data action', data);
  return {
    type: SET_FORM_DATA,
    data
  }
};

export const setLabelFileRedux = data => {
  return {
    type: SET_LABEL_FILE,
    data,
  }
};
export const setPrimaryNotesRedux = data => {
  return {
    type: SET_PRIMARY_NOTES,
    data,
  }
};
export const setHintNotesRedux = data => {
  return {
    type: SET_HINT_NOTES,
    data,
  }
};
export const setGlasswaresRedux = data => {
  return {
    type: SET_GLASSWARES,
    data,
  }
};
