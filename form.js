import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      firstname: '',
      lastname: '',
      name: '',
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      name: `${this.state.firstname} ${this.state.lastname}`
    })
  }
  render() {
    const {name} = this.state
    return (
      <div className="p-5">
        <div className="container">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">from login</div>
              <div className="card-body">
                <form onSubmit={this.submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="firstname" className="form-label">firstname</label>
                    <input type="text" value={this.state.firstname} onChange={this.changeHandler} id="firstname" name="firstname" className="form-control"/>
                  </div>
                  <div className="mb-4">
                   <label htmlFor="lastname" className="form-label">lastname</label>
                    <input type="text" value={this.state.lastname} onChange={this.changeHandler} id="lastname" name="lastname" className="form-control"/>
                  </div>
                  <button className="btn btn-primary">save</button>
                </form>
              </div>
              <div className="card-footer">
                my name is {name ? name : '. . .'}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
