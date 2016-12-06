import React from 'react';
import ReactDOM from 'react-dom';
var createclass = React.createClass({
    getInitialState: function() {
      return {total:0}
    },

    addTotal: function(price){
      this.setState({total:this.state.total+price});
    },

    render:function()
    {
      
      var services = this.props.items.map(function(save){
              return < Service name ={save.name} price={save.price} active={save.active} total={save.total} />;
      }); 
      
      return <div>
                <h1>Our Service</h1>
                <div id="service">
                {services}
                <p><b>Total:{this.state.total}</b></p>
                </div>
            </div>;
    }
}); 
    var services = createclass({
        getInitialState: function(){
          return {active : false};
        },

        clickhandler: function(){
          var active = !this.state.active;
          this.setState = ({active : active});
          this.props.addTotal(active ? this.props.price : !this.props.price);
        },
          render: function(){

            return  <p className= {this.state.active ? 'active' : ''} onClick= {this.clickhandler}>
                      {this.props.name}<b>{this.state.price}</b> 
                    </p>;
          }
    });
    

    var service = [
      {Name : 'Web Development', price: 300},
      {Name : 'Design', price : 200},
      {Name : 'Intergration' price:300},
      {Name : 'Training' price: 220}
    ]; 

    React.renderComponent(
        <createclass items ={services}/>,
        document.getElementbyId("container");
      );