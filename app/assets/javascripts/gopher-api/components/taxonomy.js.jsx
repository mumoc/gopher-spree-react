var Taxonomy = React.createClass({
  render: function() {
    return (
      //There is no way to return more than one element
      //(I like it, but spree is not so good speaking of html structure)
      //That's the reasong of the extra div here
      <div>
        <h4 className='taxonomy-root'>{ 'Shop by ' + this.props.taxonomy.name }</h4>
        <TaxonTree taxon={ this.props.taxonomy.root } />
      </div>
    )
  }
});

var TaxonomiesList = React.createClass({
  render: function() {
    var taxonomies = [];

    this.props.taxonomies.forEach(function(taxonomy) {
      taxonomies.push(<Taxonomy taxonomy={ taxonomy } key={ taxonomy.id } />);
    });

    return (
      <nav id='taxonomies' className='sidebar-item'>
        { taxonomies }
      </nav>
    )
  }
});

var TaxonomiesSection = React.createClass({
  loadTaxons: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',

      success: function(response) {
        this.setState({ taxonomies: response.taxonomies });
      }.bind(this),

      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return { taxonomies: [] };
  },

  componentDidMount: function() {
    this.loadTaxons();
  },

  render: function() {
    return (
      <TaxonomiesList taxonomies= { this.state.taxonomies } />
    )
  }
});

