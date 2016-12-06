import React from 'react';
import ReactDOM from 'react-dom';


var services = [
      {name : 'Web Development', price: 300},
      {name : 'Design', price : 400},
      {name : 'Integration', price:250},
      {name : 'Training', price: 220},
      {name : 'Web Development', price: 300},
      {name : 'Design', price : 400},
      {name : 'Integration', price:250},
      {name : 'Training', price: 220}
    ]; 

var One = React.createClass({
    getInitialState: function() {
      return {total : 0};
    },

    addTotal: function( price ){
        this.setState( { total: this.state.total + price } );
    },


    render:function()
    {
      //console.log(this.props.items);
      var self = this;
      var services = this.props.items.map(function(save,index){
              return <Service key={index} name={save.name} price={save.price} active={save.active} total={save.total} addTotal={self.addTotal} />;
      });

      return( <div>
                <h1>Our Services</h1>
                <div id="service">
                {services}
                <p>Total   :  <b>{this.state.total}</b></p>
                </div>
            </div>
            );
    }
}); 
    var Service = React.createClass({
        getInitialState: function(){
          return {active : false};
        },
        clickhandler: function (){
        var active = !this.state.active;
        this.setState({ active: active });
        this.props.addTotal( active ? this.props.price : -this.props.price );

    },

          render: function(){
              console.log(this.props);
            return  <p className= {this.state.active ? 'active' : ''} onClick= {this.clickhandler}>
                      {this.props.name}   :   <b>{this.props.price}</b> 
                    </p>;
          }
    });


    ReactDOM.render(
        <One items={ services }/>, document.getElementById("container")
      );