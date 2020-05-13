import React, { Component} from 'react';

class People extends Component {
    state = {
        people: []
      }
      componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then((data) => {
          this.setState({ people: data })
          console.log(this.state.people)
        })
        .catch(console.log)
      }

      render() {

        return (
           <div className="container">
            <div className="col-xs-12">
            <h1 className="text-align-right">People</h1>
            {this.state.people.map((pasta) => (
                

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name: {pasta.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                  <span>Age: { pasta.age} </span>           
                  </h6>
                </div>
              </div>
            ))}
            </div>
           </div>
        );
      }
    }

    export default People;