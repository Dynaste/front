const initialState = {
  date: new Date(1635951730000),
  location: {
    x: "48.52258",
    y: "1.693479",
    address: ""
  },
  tasksList: [],
  name: "",
  guestsList: []
};

function partyCreationStore(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ADDRESS":
      let newLoc = {...state.location};
      newLoc.address = payload.address;
      return { ...state, location: newLoc };
    case "ADD_DATE":
      return { ...state, date: payload.date };
    case "ADD_COORD":
      let newCoord = {...state.location};
      newCoord.x = payload.position.latitude+"";
      newCoord.y = payload.position.longitude+"";
      return { ...state, location: newCoord };
    case "ADD_TASKLIST":
      return { ...state, tasksList: payload.tasksList };
    case "ADD_NAME":
      return { ...state, name: payload.name };
    case "ADD_GUESTLIST":
      return {...state, guestsList: payload.guestsList}
    case "RESET_PARTY_CREATION":
      return initialState;

    default:
      return state;
  }
}

export default partyCreationStore;
