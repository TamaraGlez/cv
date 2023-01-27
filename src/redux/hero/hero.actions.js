import store from "../store";
const { dispatch } = store;

export const setHero = (data) => {
    dispatch({
        type: 'SET_HERO',
        payload: data,
    })
}