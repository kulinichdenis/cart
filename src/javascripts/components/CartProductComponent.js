var React = require('react');
var _ = require("underscore");

var CartProductComponent = React.createClass({

    handlerValue:function(e){
        e.preventDefault();
        var target = e.target;
        var value = target.value || 0;
        this.props.up(this.props.product.code, value);

    },

    deleteItem:function(e){
        e.preventDefault();
        this.props.deleteItem(this.props.product.code);
    },

    render: function () {
        var value = this.props.product.quantity;
        return(
            <div>
                <div className="row product">
                    <img className="col-md-3" src={this.props.product.img} alt={this.props.product.title}/>
                    <div className="col-md-5">
                        <h3>{this.props.product.title}</h3>
                        <p>{this.props.product.description}</p>
                    </div>
                    <div className="price col-md-2">
                    $ {this.props.product.price}
                    </div>
                    <div className="col-md-1">
                        <input data-product={this.props.product.id} type="number" min="1" className="form-control"
                        value={value}  onChange={this.handlerValue}/>
                    </div>
                    <a data-product={this.props.product.i} href="#" className="delete fui-cross" onClick={this.deleteItem}></a>
                </div>
            </div>
        );
    }
})

module.exports = CartProductComponent;