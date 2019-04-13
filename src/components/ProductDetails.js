import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class ProductDetails extends React.Component {
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
      <section>
            {products.map( product => 

                  <div class="details__info">
                    <img src={product.image} />
                    <h1>{product.title}</h1>
                    <p>{product.subtitle}</p>
                  
                    <ul class="details__tags">
                     {product.tags.map(tag =>
                      <li>{tag}</li>
                    )}

                    </ul>
                  </div>
                  
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

export default connect(mapStateToProps)(ProductDetails);