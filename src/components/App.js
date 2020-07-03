import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions'
import {StoreContext} from '../index';

class App extends React.Component
{
    componentDidMount()
    {
        //make api call
        //dispatch action
        const { store } = this.props;
        store.subscribe(() =>
        {
            this.forceUpdate();
        })
        store.dispatch(addMovies(data));
    }
    isMovieFavourite = (movie) =>
    {
        const { movies } = this.props.store.getState();
        const { favourites } = movies;
        const index = favourites.indexOf(movie);
        if (index !== -1)//we have found the movie
            return true;
        else
            return false;
    }
    onChangeTab = (val) =>
    {
        this.props.store.dispatch(setShowFavourites(val))
    }
    render()
    {
        const { movies, search } = this.props.store.getState();
        const { list, favourites, showFavourites } = movies;
        const displayMovies = showFavourites ? favourites : list;
        
        return (
            <div className="App">
                <Navbar 
                    /* dispatch={this.props.store.dispatch}
                    search={search} */
                />
                <div className="main">
                    <div className="tabs">
                        <div className={`tab ${!showFavourites ? 'active-tabs' : ''}`} onClick={() => { this.onChangeTab(false) }}>Movies</div>
                        <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => { this.onChangeTab(true) }}>Favourites</div>
                    </div>
                    <div className="list">
                        {displayMovies.map((movie, index) => (
                            <MovieCard
                                movie={movie}
                                key={`movies${index}`}
                                dispatch={this.props.store.dispatch}
                                isFavourite={this.isMovieFavourite(movie)}
                            />
                        ))}
                    </div>
                    {displayMovies.length === 0 ? <div className="no-movies">No Movies to show!</div> : null}
                </div>
            </div>
        );
    }
}

class AppWrapper extends React.Component
{
    render()
    {
        return(
            <StoreContext.Consumer>
                {(store)=>
                {
                    return (
                        <App store={store}/>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default AppWrapper;
