import React, {Component} from 'react';


class Films extends Component {
    state = {
        films: []
      }
      componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then((data) => {
          this.setState({ films: data })
          console.log(this.state.films)
        })
        .catch(console.log)
      }

      render() {

        return (
           <div className="container">
            <div className="col-xs-12">
            <h1>Films!</h1>
            {this.state.films.map((pizza) => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{pizza.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                  <span>{ pizza.release_date} </span>           
                  </h6>
                </div>
              </div>
            ))}
            </div>
           </div>
        );
      }
    }
    


export default Films;