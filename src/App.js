import './App.css';
import Index from './Project_forex/Page/Index';
import Login from './Project_forex/Page/Login';
import { BrowserRouter, Route, Router, HashRouter, Switch } from 'react-router-dom';
import Signup from './Project_forex/Page/Signup';
import Home from './Project_forex/Page/Home';
import Profile from './Project_forex/Page/Profile';
import Reset from './Project_forex/Page/Resetpw';
import Reset_changepw from './Project_forex/Page/Resetpw_changepw';
import ResetpwSucsess from './Project_forex/Page/ResetpwSucsess';
import Forex from './Project_forex/Page/Forex';
import Navebar from './Project_forex/Page/Navebar';
import GPForex from './Project_forex/Page/GPForex';
import ZigZag2 from './Project_forex/Page/Zigzag';
import SignupComplete from './Project_forex/Page/SignupComplete';
import ResetComplete from './Project_forex/Page/ResetComplete';

import Admin from './Project_forex/Page/Adminpage/Admin';
import Database from './Project_forex/Page/Adminpage/Database';
import Userchangedata from './Project_forex/Page/Adminpage/Userchangedata'
import Updatedata from './Project_forex/Page/Adminpage/Updatedata';

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
        <Route path='/Index/Resetpassword/' component={Reset_changepw} />
        <Route path='/Index/ResetComplete/' component={ResetComplete}/>
        <Route path='/Index/ResetpwSucsess/' component={ResetpwSucsess}/>
        <Route path='/Index/Forex/' component={Forex} />

        <Route path='/Index/GPForex/:forex_name'>
            <GPForex />
        </Route>

        <Route path='/Index/Zigzag/:forex_name'>
            <ZigZag2 />
        </Route>

        <Route path='/Index/Signup' component={Signup} />
        <Route path='/Index/SignupComplete/' component={SignupComplete}/>

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
