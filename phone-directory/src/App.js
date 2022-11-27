import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {

  constructor()
  {
   super();
   this.state = {
     subscribersListToShow: []
   } 
  }
  clickHandler(message){
    alert(message)
  }
  render() {
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
        <Header heading="Phone-Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
          this.state.subscribersListToShow.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,"Delete Clicked")}>Delete</button>
                </span>
            </div>
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
