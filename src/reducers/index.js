import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions'

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false,
}

export function movies(state = initialMoviesState, action)
{
    console.log('MOVIES REDUCER');
    switch (action.type)
    {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filtered_array = state.favourites.filter(movie => movie.Title !== action.movie.Title);
            return {
                ...state,
                favourites: filtered_array
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;

    }
}

const initialSearchState = {
    result: {}
};
export function search(state = initialSearchState, action)
{
    console.log('SEARCH REDUCER');
    return state;
}
/* everytime we dispatch an action both of the child reducers will be called because we have passed the root reducer in our create store method
and this root reducer will be called everytime i dispatch an action , and hence movies and search will be called separately... */


//ROOT REDUCER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const initialRootState = {
    movies: initialMoviesState,
    search:initialSearchState
}
export default function rootReducer(state=initialRootState, action)
{
    return {
        movies: movies(state.movies, action),
        search: search(state.search, action)
    }
}