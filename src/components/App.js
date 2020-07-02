import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from '../data';
import { addMovies } from '../actions'

class App extends React.Component
{
    componentDidMount()
    {
        //make api call
        //dispatch action
        const { store } = this.props;
        store.subscribe(() =>
        {
            console.log('Updated');
            this.forceUpdate();
        })
        store.dispatch(addMovies(data));
        console.log(store.getState());
    }
    isMovieFavourite = (movie) =>
    {
        const { favourites } = this.props.store.getState();
        const index = favourites.indexOf(movie);
        if (index !== -1)//we have found the movie
            return true;
        else
            return false;
    }
    render()
    {
        const { list } = this.props.store.getState();
        console.log('RENDER', this.props.store.getState())
        return (
            <div className="App">
                <Navbar />
                <div className="main">
                    <div className="tabs">
                        <div className="tab">Movies</div>
                        <div className="tab">Favourites</div>
                    </div>
                    <div className="list">
                        {list.map((movie, index) => (
                            <MovieCard
                                movie={movie}
                                key={`movies${index}`}
                                dispatch={this.props.store.dispatch}
                                isFavourite={this.isMovieFavourite(movie)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
