import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Categorylist extends Component {
 
 componentDidMount(){
  this.getcategories();
 }


  state={
    categories:[
      
    ]
    
  };
  getcategories=()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=> this.setState({categories:data}));
  
   }
  
    
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <hr class="featurette-divider"></hr>
        <ListGroup>
          {this.state.categories.map(categor => (
            <ListGroupItem onClick={()=>this.props.changecategory(categor)} key={categor.id}>{categor.categoryName}</ListGroupItem>

          ))}
          
        </ListGroup>
        <hr class="featurette-divider"></hr>
        {/* <h3>{this.props.categorynamer}</h3> */}
      </div>
    );
  }
}
