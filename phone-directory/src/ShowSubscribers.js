import React, { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {


 
  render() {
    console.log("Render Called")
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Krish Desai",
    //     phone: "7600486767",
    //   },
    //   {
    //     id: 2,
    //     name: "Hetal Desai",
    //     phone: "9428611032",
    //   }
    // ];
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
          this.props.subscribersList.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
              <button className="custom-btn delete-btn" onClick={()=>this.props.deleteSubscriberHandler(sub.id)}>Delete</button>
                </span>
            </div>
          })
        }
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;