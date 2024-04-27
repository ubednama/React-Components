import React, { Component } from 'react'

class AddItem extends Component {
  constructor(props){
    super(props);
    this.state={
      productName: "",
      productPrice: 0,
    }
  }
  render() {
    return (
      <>
        <form className='row mb-3' onSubmit={(e) =>{e.preventDefault();this.props.addItem(this.state.productName, Number(this.state.productPrice))}}>
            <div className="mb-3 col-4">
                <label htmlFor="InputName" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  aria-describedby="inputName"
                  name='productName'
                  onChange={
                    (e) => {
                      this.setState({
                        productName: e.currentTarget.value
                      })
                  }}
                  value={this.state.productName} />
            </div>
            <div className="mb-3 col-4">
                <label htmlFor="Price" className="form-label">Price</label>
                <input
                  type="Number"
                  className="form-control"
                  id="inputPrice"
                  name='productPrice'
                  onChange={
                    (e) => {
                      this.setState({
                        productPrice: e.currentTarget.value
                      })
                  }}
                  value={Number(this.state.productPrice)} />
            </div>
            <div className='col-2 d-flex justify-content-center align-items-center mt-3'>
              <button type="submit" className="btn btn-primary" >Add</button>
            </div>
        </form>
      </>
    )
  }
}

export default AddItem;