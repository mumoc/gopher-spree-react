var Product = React.createClass({
  render: function() {
    return (
      <li>Title: { this.props.product.name } </li>
    )
  }
});

var ProductsList = React.createClass({
  render: function() {
    var products = [];

    this.props.products.forEach(function(product){
      products.push(<Product product={ product } key={ product.id } />);
    });

    return (
      <ul>{ products }</ul>
    )
  }
});

var ProductsSection = React.createClass({
  loadProducts: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',

      success: function(response) {
        this.setState({ products: response.products });
      }.bind(this),

      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  //This method is called once in the lifetime of the class
  getInitialState: function() {
    return { products: [] };
  },

  //This method is called when the component is rendered
  componentDidMount: function() {
    this.loadProducts();
  },

  render: function() {
    return (
      <div>
        <ProductsList products= { this.state.products } />
      </div>
    )
  }
});

