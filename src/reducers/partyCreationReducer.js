const initialState = {
    date: new Date(1635951730000),
    position: "",
  };
  
  function partyCreationStore(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "ADD_STEP1":
            return { ...state, date: payload.date, position: payload.position};
    
      case "RESET_PARTY":
        return initialState;
  
      default:
        return state;
    }
  }
  
  export default partyCreationStore;
  