import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AuthApi from "./AuthApi";
import Cookies from "js-cookie"


function App() {
  const [auth, setAuth] = useState(false);
  const readCookie = () => {
    const user = Cookies.get("user")
    if(user) {
      setAuth(true)
    }
  
  }
  React.useEffect( () => {
    readCookie();
  }, [])


  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes />
      </Router>
      </AuthApi.Provider>

    </div>
  );
}


const Login = () => {
  const Auth = React.useContext(AuthApi)
  const handleClick = () => {
    Auth.setAuth(true);
    Cookies.set("user", "loginTrue")
  }
  return (
    <div>
      <h1>Welcome to my first react cookies tutorial</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )

}

const Dashboard = () => {
 const Auth = React.useContext(AuthApi)
  const handleClick = () => {
    Auth.setAuth(false);
    Cookies.remove("user")
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleClick} >logout</button>
    </div>
  )
}

const Routes = () => {
  const Auth = React.useContext(AuthApi)
  return (
    <Switch>
      <ProtectedLogin path="/login" component={Login} auth={Auth.auth} />
      <ProtectedRoute path="/dashboard" auth={Auth.auth} component={Dashboard} />
    </Switch>
  )
}


const ProtectedRoute = ({ auth, component:Component, ...rest  }) => {
  return (
    <Route  
    { ...rest }
    render = { () => auth ?  (
      <Component />
     ) : 
     (
       <Redirect to="/login" />
     )
    }
    />
  )
}


const ProtectedLogin = ({ auth, component:Component, ...rest  }) => {
  return (
    <Route  
    { ...rest }
    render = { () => !auth ?  (
      <Component />
     ) : 
     (
       <Redirect to="/dashboard" />
     )
    }
    />
  )
}


export default App;
