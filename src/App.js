import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductDetails from "./components/ProductDetails";
import ProductSales from "./components/ProductSales";
import Navigation from "./components/Navigation";
import SalesGraph from "./components/SalesGraph";

import { fetchProducts } from './actions/productActions';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})


class App extends Component {

  products = (event) => {
    this.props.fetchProducts();
  }

 render() {
  return (
    <div class="stackline">
      <aside class="details">
        <ProductDetails />
        <Navigation />
 
      </aside>

        {/* <SalesGraph /> */}

        <ProductSales />


    </div>
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
