import React,{Component} from "react"
import axios from "axios"
import "./main.css"
// import Navbar from "./navbar";
import Fav from "./favorite";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

  


class Planet extends Component{
    constructor(props)
    {
        super(props)

    this.state={
      array:[],
      favorite:[]
    }
    }
    componentDidMount()
    {
        axios.get("https://assignment-machstatz.herokuapp.com/planet")
        .then(response=>{
            console.log(response);
            const data=response.data;
            this.setState(
                {array:data}
            )
        })
    }
     
     favor(name)
     {
        this.setState(
            {
                favorite:[...this.state.favorite,name]
            }
        )
  
        }
    render(){

       
        const {array}=this.state;
         //console.log(this.state.favorite)
    return (<div className="listplanet">
    <h1>List Of Planet</h1>
    {
        array.map(post=><div key={post.id} className="list">{post.name}
        <button style={{padding:"5px"}} onClick={()=>this.favor(post.name)}>Favorite</button>
        </div>)
    } 
    <h1>Favourit</h1>
     <Router>
         <Link to="/Fav">Favourit</Link>
     <Switch>
       <Route exact path="/Fav" 
           render={()=> <Fav  favorites={this.state.favorite}/>}/>
           </Switch>
         </Router> 
   
    </div>
    )
    
}

}
export default Planet