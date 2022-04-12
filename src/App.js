import './App.css';
import Index from './Page/Index';
import Login from './Page/Login';
import { BrowserRouter, Route, Router, HashRouter, Switch } from 'react-router-dom';
import Signup from './Page/Signup';
import Home from './Page/Home';
import Profile from './Page/Profile';
import Reset from './Page/Resetpw';
import Forex from './Page/Forex';
import Navebar from './Page/Navebar';
import GPForex from './Page/GPForex';
import ZigZag2 from './Page/Zigzag';
import SignupComplete from './Page/SignupComplete';
import ResetComplete from './Page/ResetComplete';

import Admin from './Page/Adminpage/Admin';
import Database from './Page/Adminpage/Database';
import Userchangedata from './Page/Adminpage/Userchangedata'
import Updatedata from './Page/Adminpage/Updatedata';

function App() {

  return (

    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/Index/Login/' component={Login} />

        <Route path='/Index/Home/'>
            <Home />
        </Route>

        <Route path='/Index/Profile/'>
            <Profile />
        </Route>

        <Route path='/Index/Reset/' component={Reset} />
        <Route path='/Index/Forex/' component={Forex} />

        <Route path='/Index/GPForex/:forex_name'>
            <GPForex />
        </Route>

        <Route path='/Index/Zigzag/:forex_name'>
            <ZigZag2 />
        </Route>

        <Route path='/Index/Signup' component={Signup} />
        <Route path='/Index/SignupComplete/' component={SignupComplete}/>
        <Route path='/Index/ResetComplete/' component={ResetComplete}/>

        <Route path='/Index/Admin'>
            <Admin />
        </Route>
        <Route path='/Index/Database'>
            <Database />
        </Route>
        <Route path='/Index/Userchangedata/:usr'>
            <Userchangedata />
        </Route>
        <Route path='/Index/Updatedata'>
            <Updatedata />
        </Route>
     
      </Switch>
    </BrowserRouter>
  );
}

export default App;
