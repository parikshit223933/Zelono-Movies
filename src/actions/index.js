// {
//     type:'ADD_MOVIES',
//     movies:[m1, m2, m3]
// }
// {
//     type:'DECREASE_COUNT'
// }

/* ACTION TYPES */
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';

/* THESE FUNCTIONS ARE CALLED ACTION CREATORS */
export function addMovies(movies)
{
    return {
        type: ADD_MOVIES,
        movies//this is the shorthand to write movies:movies
    }
}

export function addFavourites(movie)
{
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}
export function removeFromFavourites(movie)
{
    return{
        type: REMOVE_FROM_FAVOURITES,
        movie
    };
}

export function setShowFavourites(val)
{
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
}