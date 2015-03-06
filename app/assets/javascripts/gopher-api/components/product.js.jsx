var ProductListItem = React.createClass({
  render: function() {
    return (
      <div className='col-md-3 product-list-item' data-hook='products_list_item' itemScope='' itemType='http://schema.org/Product'>
        <div className='panel panel-default'>
            <div className='panel-body text-center product-body'>
              <a itemProp='url' href={ '/products/' + this.props.product.slug } >
                <img itemProp='image' alt={ this.props.product.name } src={ this.props.product.master.images[0].small_url } />
              </a>
              <br/>
              <a className='info' itemProp='name' title={ this.props.product.name } href={ '/products/' + this.props.product.slug }>{ this.props.product.name }</a>
            </div>

            <div className='panel-footer text-center'>
              <span itemProp='offers' itemScope='' itemType='http://schema.org/Offer'>
                <span className='price seldivng lead' itemProp='price'>{ this.props.product.price }</span>
              </span>
            </div>
        </div>
      </div>
    )
  }
});

var ProductsList = React.createClass({
  render: function() {
    var products = [];

    this.props.products.forEach(function(product){
      products.push(<ProductListItem product={ product } key={ product.id } />);
    });

    return (
      <div id='products' className='row'>
        { products }
      </div>
    )
  }
});

var ProductsSection = React.createClass({
  loadProducts: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',

      success: function(response) {
        products = response.products;
        delete response.products;
        this.setState({ products: products, pagination: response });
      }.bind(this),

      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  //This method is called once in the divfetime of the class
  getInitialState: function() {
    return { products: [], pagination: {} };
  },

  //This method is called when the component is rendered
  componentDidMount: function() {
    this.loadProducts();
  },

  render: function() {
    return (
      <div data-hook='homepage_products'>
        <ProductsList products= { this.state.products } />
        <Paginator pagination= { this.state.pagination } />
      </div>
    )
  }
});
