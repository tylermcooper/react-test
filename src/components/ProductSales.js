import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class ProductSales extends React.Component {
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

    return (
      <section class="sales">
            {products.map( product => 

                <table>
                    <tr>
                        <th>Week Ending</th>
                        <th>Retail Sales</th>
                        <th>Wholesale Sale</th>
                        <th>Units Sold</th>
                        <th>Retailer Margin</th>
                    </tr>

                    {product.sales.map( sale => 
                    <tr>
                        <td>{sale.weekEnding}</td> 
                        <td>{sale.retailSales}</td>
                        <td>{sale.wholesaleSales}</td> 
                        <td>{sale.unitsSold}</td> 
                        <td>{sale.retailerMargin}</td> 
                    </tr>
                        
                    )}
                    
                </table>
                  
            )}
      </section>  

    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductSales);