
import './App.css';
import Planet from "./compo1.js";

import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
 const App=()=>
 {
  
     return(
      <Router>
       
         <Link to="/planet">
          <li>Planet</li>
         </Link>
         <p>Click to get list of plant</p>
         
        
      <Switch>
       <Route exact path="/planet" component={Planet}/>
      
        
       </Switch>
       </Router>
     )
   }



export default App;
