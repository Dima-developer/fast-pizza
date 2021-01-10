import axios from "axios";

//Thunk Creator
export const fetchPizzas = (category, sortBy) => (dispatch) => {
    //console.log(category, sortBy);
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${
        category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({ data}) => dispatch(setPizzasAction(data)));
};

// Action Creator
export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
});
export const setPizzasAction = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});