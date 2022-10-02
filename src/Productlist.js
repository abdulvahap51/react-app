import React, { Component } from 'react'
import {  Table} from "reactstrap";

export default class Productlist extends Component {
    
  render() {
    return (
      <div>
        <h1>{this.props.geri}-{this.props.categorynamer}</h1>
        <hr class="featurette-divider"></hr>
        {/* <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup> */}
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>productName</th>
            <th>unitPrice</th>
            <th>unitsInStock</th>
            <th>quantityPerUnit</th>
          </tr>
        </thead>
        <tbody>
        {this.props.products.map(product => ( 
        <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.productName}</td>
            <td>{product.unitPrice}</td>
            <td>{product.unitsInStock}</td>
            <td>{product.quantityPerUnit}</td>
          </tr>
           

          ))}
         
          
        </tbody>
      </Table>
      </div>
    )
  }
}
