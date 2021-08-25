const initialState = {
    incoming: [],
    previous: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_PARTY':
            if (payload.parties && payload.parties.length > 0) {
                
            } else {
                return {
                    ...state
                }
            }
        
        case 'MODIFY_PARTY':

        case 'DELETE_PARTY':

        case 'RESET':

        default:
            return state;
    }
  }
  
  export default taskReducer;
  