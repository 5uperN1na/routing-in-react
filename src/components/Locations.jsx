import React, {Component} from 'react';

class Locations extends Component{
    state = {
        locations: []
      }
      componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then(res => res.json())
        .then((data) => {
          this.setState({ locations: data })
          console.log(this.state.locations)
        })
        .catch(console.log)
      }

      render() {

        return (
           <div className="container">
            <div className="col-xs-12">
            <h1>Locations!</h1>
            {this.state.locations.map((hamburgers) => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{hamburgers.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                  <span>{ hamburgers.climate} </span>           
                  </h6>
                </div>
              </div>
            ))}
            </div>
           </div>
        );
      }
    }
    

export default Locations;