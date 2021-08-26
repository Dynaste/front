const initialState = {
    incoming: [],
    previous: [],
  };
  
  const partyReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_PARTY':
            return { ...state, ...payload.parties };
        case 'RESET_PARTIES': 
            return initialState;
        default:
            return state;
    }
  }
  
  export default partyReducer;
  