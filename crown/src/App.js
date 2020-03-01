import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

const topic = (props) => {
  console.log(props)
  return (
    <div>Topic</div>
  )
}

const topicDetails = (props) => {
  console.log(props)
  return (
  <div>TopicDetails {props.match.params.topicid}</div>
  )
}


class App extends React.Component {
  constructor(props) {
      super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser:user
      });
      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

 

  render() {
    console.log(this.props)
    return (
    <div>
      <Header currentUser = { this.state.currentUser } />
      <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/topic' component={topic} />
        <Route exact path='/topic/:topicid' component={topicDetails} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
    )
  }
  
}

export default App;
