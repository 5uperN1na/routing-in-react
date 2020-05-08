import React from 'react';

class FilmDetails extends React.Component {

    state = {
        film: {}
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.filmid}`)
        .then(r => r.json())
        .then(film => this.setState({ film }))
        
    }

    render() {
        return (
            <div className="mt-5">
                <h1 className="text-center">Film Details for {this.state.film.title}</h1>
            </div>
        );
    }
}

export default FilmDetails;