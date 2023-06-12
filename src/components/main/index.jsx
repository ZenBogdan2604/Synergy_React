import { Route, Switch } from "react-router-dom";
import About from "../about";
import Test from "../test";
import Home from "../home";
import Rule from "../rule";
import Time from "../time";
import SmartHouse from "../smart-house"

const Main = () => {
    return ( 
    <div>
<Switch>
<Route path='/home' component={Home}/>
<Route path='/test' component={Test}/>
<Route path='/about-me' component={About}/>
<Route path='/heaven' component={Rule}/>
<Route path='/time' component={Time}/>
<Route path='/smart' component={SmartHouse}/>
</Switch>
    </div>
    );
};

export default Main;