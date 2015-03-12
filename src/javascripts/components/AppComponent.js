var _ = require("underscore");
var React = require("react");
var CartComponent = require("./CartComponent");
var ShopComponent = require("./ShopComponent");

var AppComponent = React.createClass({

    getInitialState: function () {
        return {
            item: []
        };
    },

    userClick: function (instance) {

        var ids = '';
        var instance = instance;
        instance['quantity'] = 1; //add quantity
        var state = this.state.item;
        var code = instance['code'];

        var flag = state.some(function (elem) {
            if(elem['code'] === code) {
                ids = elem['id']
                return true;
            }
        })

        if (!flag) {
            //add to store
            var id = this.props.store.add(instance); //add
            state.push({code:code, id:id});

        } else {
            //update
            var inst = this.props.store.get(ids);
            inst.quantity += 1;
            this.props.store.update(ids, inst); //update
        }

        this.setState({
            item: state
        });
    },

    userTotal: function (code, value) {
        var that = this.props.store;
        var state = this.state.item;
        state.forEach(function (element) {
            if (element['code'] === code) {
                var inst = that.get(element['id'])
                inst['quantity'] = value;
                that.update(element['id'],inst)
            }
        })
        this.setState({
            item: state
        });
    },

    deleteItem: function(code) {
        var that = this.props.store;
        var state = this.state.item;
        state = state.filter(function (elem) {
            if(elem['code'] === code){
                that.remove(elem['id']);
                return false;
            }else{
                return true;
            }
        })
        console.log(state);
        this.setState({
            item: state
        });
    },

    render: function () {
        var that = this.props.store;
        var states = this.state.item;

        var selectProduct = states.map(function(element) {
            return that.get(element['id']);
        });

        return (
            <div>
                <div className='shop'>
                    <ShopComponent products={this.props.products} onClick={this.userClick} />
                </div>
                <div className='cart'>
                    <CartComponent cart={selectProduct} onUpdate={this.userTotal} delete={this.deleteItem}/>
                </div>
            </div>
        )
    }
})
module.exports = AppComponent;