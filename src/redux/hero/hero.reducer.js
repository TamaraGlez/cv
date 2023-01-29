const INITAL_STATE = {
    hero: {},
};

export const heroReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'SET_HERO': {
            return { ...state, hero: action.payload }
        }
        default:
            return state;
    }
};
//es eo estado inicial, realmente es un objeto