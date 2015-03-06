var Page = React.createClass({
  pageClass: function() {

    return (
      "page"
    )
  },

  pageUrl: function() {
    return (
      '?page=' + this.props.page.number
    )
  },

  render: function() {
    return (
      <li className= { this.pageClass() }>
        <a href={ this.pageUrl() }>
          { this.props.page.text }
        </a>
      </li>
    )
  }
});

var Paginator = React.createClass({
  pages: [],

  defaultPagination: {
    count: 1,
    current_page: 3,
    pages: 5,
    per_page: 10,
    total_count: 1
  },

  getPages: function() {
    var pagination = []
    var page = 1
    while(page <= this.state.pagination.pages) {
      pagination.push({ number: page, text: page })
      page++
    }

    if (!(this.state.pagination.current_page === this.state.pagination.pages)) {
      pagination.push({ number: (this.state.pagination.current_page +1), text: 'Next' });
      pagination.push({ number: this.state.pagination.pages, text: 'Last' });
    }


    if (!(this.state.pagination.current_page === 1)) {
      pagination.unshift({ number: (this.state.pagination.current_page -1), text: 'Prev' });
      pagination.unshift({ number: 1, text: 'First' });
    }

    return pagination
  },

  getInitialState: function() {
    return { pagination: this.defaultPagination }
  },

  componentDidMount: function() {
    var pages = this.getPages();
    var _this_ = this;
    pages.forEach(function(page) {
      _this_.pages.push(<Page page={ page } />)
    });
  },

  render: function() {
    return (
      <ul className='pagination'>
        { this.pages }
      </ul>
    )
  }
});


