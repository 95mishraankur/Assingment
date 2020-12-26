import React from "react"
function Fav(props)
{ 
   console.log("hhkjh")
    const mystyle = {
      color: "red",
      margin:"5px",
      padding: "10px",
      display:"flex",
      fontFamily: "Arial"
    }
   return (props.favorites.map(index=>
        {  return<h1 style={mystyle}>
      {index}
      </h1>}))
}

export default Fav










//  class Fav extends Component
//  {

//     constructor(props)
//     {   
//        super(props)
//        console.log(this.props.favorites)
//        this.state={
//          infield:this.props.favorites
//        }
//     }
//    render()
//    {
//      const data= this.state.infield;
//      console.log(data)
//      return <div>{data}</div>
         
//    }
//  }
    
    