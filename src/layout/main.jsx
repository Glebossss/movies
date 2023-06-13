import React from "react";
import { Movies } from "../Components/Movies";
import { Search } from "../Components/search";
import { Preloader } from "../Components/preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=49cae11d&s=Avengers').then((response) => response.json()).then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (str, type = "all") => {
        fetch(`https://www.omdbapi.com/?apikey=20d64e58&s=${str}${
            type !== "all" ? `&type=${type}` :""
            }`
        )
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    render() {
        const { movies, loading } = this.state;

        return(
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
            </main>
        );
    }
}

export { Main };