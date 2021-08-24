const initialState = {
  date: new Date(1635951730000),
  position: "",
  address: "",
  tasksList: [],
  name: ""
};

function partyCreationStore(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ADDRESS":
      return { ...state, address: payload.address };
    case "ADD_DATE":
      return { ...state, date: payload.date };
    case "ADD_COORD":
      return { ...state, position: payload.position };
    case "ADD_TASKLIST":
      return { ...state, tasksList: payload.tasksList };
    case "ADD_NAME":
      return { ...state, name: payload.name };
    case "RESET_PARTY":
      return initialState;

    default:
      return state;
  }
}

export default partyCreationStore;
