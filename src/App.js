import Categorylist from "./Categorylist";
import Productlist from "./Productlist";
import Seri from "./Seri";
import React, { Component } from "react";

import { Col, Container, Row } from "reactstrap";
export default class App extends Component {
  state={
    categorynamer:"" ,products:[]}
  changecategory=(categor)=>{
    this.setState({categorynamer:categor.categoryName})
    this.getproducts(categor.id)
  }
  componentDidMount(){
    this.getproducts();
  }
  getproducts=(categoryid)=>{

    let url="http://localhost:3000/products";
    if(categoryid){
      url+="?categoryId="+categoryid;
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=> this.setState({products:data}));
  
   }
    
  render() {
    let product = { title: "category list", bar: "barmen" };
    return (
      <div  >
        <Container>
          <Seri></Seri>

          <Row>
          <Col xs="3"  >
              <div>
                <Categorylist categorynamer={this.state.categorynamer} changecategory={this.changecategory} info={product}> </Categorylist>
              </div>
            </Col>
            
            <Col xs="9" >
              <Productlist categorynamer={this.state.categorynamer} products={this.state.products} geri="product list"></Productlist>
            </Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}
