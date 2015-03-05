var Taxonomy = React.createClass({
  render: function() {
    return (
      <h4 class='taxonomy-root'>{ this.props.taxonomy.name }</h4>
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
      <nav id='taxonomies' class='sidebar-item'>
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
    return { taxonomies: [{ name: 'Categories', id: 1 }] };
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

