import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import * as d3 from "d3";


class SalesGraph extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchProducts());

    }
  

    render() {
        const { error, loading, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        const data = (products.map( product => 
        product.sales ));
        
        const svg = d3.select(".salesGraph").append("svg").attr("width", 700).attr("height", 300);
                    

        svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("weekEnding",  )
        .attr("retailSales", )
        .attr("width", 25)
        .attr("height", (d, i) => d)
        .attr("fill", "green");


      return (
        <section class="salesGraph">
        </section>  
  
      );
    }
  }
  
  const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
  });
  
  export default connect(mapStateToProps)(SalesGraph);