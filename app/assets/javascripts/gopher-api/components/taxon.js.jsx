var Taxon = React.createClass({
  render: function() {
    return (
      <a href=''>
        'asdasd'
      </a>
    )
  }
});

var TaxonTree = React.createClass({
  render: function() {
    return (
      <div class='list-group'>
        <Taxon taxon={ this.props.taxon } />
      </div>
    )
  }
});
//def taxons_tree(root_taxon, current_taxon, max_level = 1)
      //return '' if max_level < 1 || root_taxon.children.empty?
      //content_tag :div, class: 'list-group' do
        //root_taxon.children.map do |taxon|
          //css_class = (current_taxon && current_taxon.self_and_ancestors.include?(taxon)) ? 'list-group-item active' : 'list-group-item'
          //link_to(taxon.name, seo_url(taxon), class: css_class) + taxons_tree(taxon, current_taxon, max_level - 1)
        //end.join("\n").html_safe
      //end
    //end
//
//
//
//<nav id="taxonomies" class="sidebar-item" data-hook="">
      //<h4 class="taxonomy-root">Shop by Categories</h4>
      //<div class="list-group"><a class="list-group-item" href="/t/categories/bags">Bags</a>
//<a class="list-group-item" href="/t/categories/mugs">Mugs</a>
//<a class="list-group-item" href="/t/categories/clothing">Clothing</a></div>
      //<h4 class="taxonomy-root">Shop by Brand</h4>
      //<div class="list-group"><a class="list-group-item" href="/t/brand/ruby">Ruby</a>
//<a class="list-group-item" href="/t/brand/apache">Apache</a>
//<a class="list-group-item" href="/t/brand/spree">Spree</a>
//<a class="list-group-item" href="/t/brand/rails">Rails</a></div>
//</nav>



