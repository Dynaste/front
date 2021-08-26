const initialState = {
    current: {}
  };
  
  const currentPartyStore = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CURRENT_PARTY':
            return { ...state, current: payload.current };
        case 'RESET_CURRENT_PARTY': 
            return initialState;
        default:
            return state;
    }
  }
  
  export default currentPartyStore;
  