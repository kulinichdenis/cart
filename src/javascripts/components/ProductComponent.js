var _ = require("underscore");
var React = require('react');

var ProductComponent = React.createClass({
    userOnClick:function(e){
        e.preventDefault();
        this.props.on(this.props.product);
    },
    render: function () {
        return(
            <div>
            <a href="#" className="col-md-4 add-to-cart" data-product={this.props.product.code}>
                <img onClick={this.userOnClick} src={this.props.product.img} alt={this.props.product.title}/>
            </a>
            </div>
        );
    }
})
module.exports = ProductComponent;

