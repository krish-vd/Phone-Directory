import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
class PhoneDirectory extends Component{

    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'Krish Desai',
                phone: '7600486767'
            },
            {
                id: 2,
                name: 'Hetal Desai',
                phone: '9428611032'
            }
        ]
        }
    }
    deleteSubscriberHandler = (subscriberId) => {
        console.log(subscriberId);
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList: subscribersList});
        console.log("Phone Directory");
        console.log(this.state.subscribersList);
    }
    render() {
        return(
            <Router>
                <div className="main-container">
                    <Routes>
                <Route  path='/' element={<ShowSubscribers subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                <Route  path='/add' element={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />} />
                </Routes>
                </div>

            </Router>
        )
    }
}

export default PhoneDirectory;