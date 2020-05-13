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
            <div className="card">
                <div className="card-body">
                    <div className="mt-5">
                        <h4 className="card-title"> {this.state.film.title}</h4>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">ID: {this.state.film.id}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    <div>Director: {this.state.film.director} </div>
                                    <div> Producer: {this.state.film.producer} </div>
                                    <div>Release Date: {this.state.film.release_date} </div>
                                    <div>Score: {this.state.film.rt_score} </div>
                                </h6>
                            </div>
                        </div>

                      
                    </div>





                </div>
            </div >








        )
    };
}


export default FilmDetails;