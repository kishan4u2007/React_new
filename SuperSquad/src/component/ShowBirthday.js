import React, { Component } from 'react';
import PartyPropper from '../assets/party-popper.jpg'

class ShowBirthday extends Component {

    timeSince(date) {
        let currentData = new Date().getTime();
        let other_date = new Date(date).getTime();
        let diffenece = Math.abs(currentData -  other_date);

        let days =  Math.floor(diffenece/(1000*3600*24));
        let years = Math.floor(days / 365);
        days -= years*365

        let months = Math.floor( days / 31);
        days -= months*31

        return `${years} years, ${months} months, ${days} days`
    }

    render() {
        return (
          <div>
            <h3>{this.props.date}</h3> 
            <h4>Congrats on  {this.timeSince(this.props.date)}</h4>
            <img src={PartyPropper} alt="PartyPropper" className="PartyPropper" />
          </div>
        );
       } 
      }
export default ShowBirthday;