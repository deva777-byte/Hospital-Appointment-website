import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Appointment  from './ProfileDetails';

const Application = ()=>(
    <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/login" component = {Login} />
        <Route  path = "/profile/:id" component = {Appointment} /> 
    </Switch>
)

export default Application;