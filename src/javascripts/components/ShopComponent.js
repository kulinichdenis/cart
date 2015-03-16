var _ = require("underscore");
var React = require('react');
var ProductComponent = require("./ProductComponent");

var ShopComponent = React.createClass({
  render: function() {

      return (
        <div>
            <h1>Shop</h1>
            <div className="row">
            {this.props.products.map(function(elem,index) {
               return <ProductComponent product={elem} key={index} on={this.props.onClick} up={this.props.onUpdate}/>
            }.bind(this))
            }
            </div>
        </div>
    );
  }
})

module.exports = ShopComponent;

//}