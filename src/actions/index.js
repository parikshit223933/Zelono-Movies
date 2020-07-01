// {
//     type:'ADD_MOVIES',
//     movies:[m1, m2, m3]
// }
// {
//     type:'DECREASE_COUNT'
// }

/* ACTION TYPES */
export const ADD_MOVIES='ADD_MOVIES';

/* THESE FUNCTIONS ARE CALLED ACTION CREATORS */
export function addMovies(movies)
{
    return {
        type:ADD_MOVIES,
        movies//this is the shorthand to write movies:movies
    }
}