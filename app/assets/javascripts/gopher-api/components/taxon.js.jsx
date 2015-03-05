var Taxon = React.createClass({
  render: function() {
    return (
      <a className='list-group-item' href={ '/t/' + this.props.taxon.permalink }>
        { this.props.taxon.name }
      </a>
    )
  }
});

var TaxonTree = React.createClass({
  render: function() {
    var taxons = [];

    this.props.taxon.taxons.forEach(function(taxon){
      taxons.push(<Taxon taxon={ taxon } key={ taxon.id } />);
    });

    return (
      <div className='list-group'>
        { taxons }
      </div>
    )
  }
});

