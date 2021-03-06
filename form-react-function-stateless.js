import React, {  useState } from 'react'

function App() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setName(`${firstname} ${lastname}`)
  }
  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Learn React Function</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">firstname</label>
                      <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="firstname" name="firstname" className="form-control"/>
                    </div>
                    <div className="mb-4">
                    <label htmlFor="lastname" className="form-label">lastname</label>
                      <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} id="lastname" name="lastname" className="form-control"/>
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
    </div>
  )
}

export default App;
