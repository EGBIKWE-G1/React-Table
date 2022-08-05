import React, { Component } from 'react'
import Table from './Table'

export class TableSection extends Component {
    constructor(props) {
        super (props);
        this.state = {isShowing: false};
    }

  render() {
    return (
        <div className="">
            <div className="Btn-Header">
        <button className="btn btn-outline-secondary  Btn-All mb-4"
        onClick={() => this.setState({isShowing: !this.state.isShowing})}
        >ALL</button>

        <div className="Btn-Right">
        <button className="btn btn-outline-secondary mr-3">Filter</button>
        <button className="btn btn-outline-secondary "> Category <i className='fas fa-angle-down arrowIcon'></i></button>
        </div>
        </div>
        {
            this.state.isShowing ? (
        <Table />
            ) : null
        }        
        <br />
        </div>
    )
  }
}

export default TableSection