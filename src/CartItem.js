import React from 'react';
import { resolve } from 'url';
import { reject } from 'q';

class  CartItem extends React.Component{
    constructor()
    {
        super();
       this.state={
            price:999,
            qty:1,
            title:"My Phone",
            url:""
       };
       //this.increaseQuantity=this.increaseQuantity.bind(this);
      // this.testing();
    }
     increaseQuantity=()=>
    {
        //this.state.qty+=1;   doesn't re render ,though the value do gets changed
       // console.log('this.state', this.state);
        // type 1 change shallow merge.Use this when new state is not dependent on previous state
        // this.setState({
        //     qty:this.state.qty+1
        // });
             // type 2 change shallow merge .Use this when new state is dependent on previous state
        this.setState((prevState)=>{
            return{
            qty:prevState.qty+1
            }
        },()=>{
            console.log(this.state);
        });

    }
    decreaseQuantity=()=>{
        const {qty}=this.state;
        if(qty==0)
        {
           // console.log("Quantity can't ve negative");
            return;
        }
    //    console.log('this.state', this.state);

                this.setState((prevState)=>{
                    return {
                        qty:prevState.qty-1
                    }
                },()=>{
                    console.log(this.state);
                });
    }
    testing()
    {
        const promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('done');

            },5000);

        });
        promise.then(()=>{

            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            //updated 100 will be visible because setState acts like synchronous function in Promise 
            console.log(this.state);
        })
    }

    render()
    {
        const {price,qty,title}=this.state;
        return(
          <div className="cart-item">

            <div className="left-block">
            <img  style={styles.image} />

            </div>

            <div className="right-block">
                <div style={{fontSize:"25px"}}>{title}</div>
                <div style={{color:"gray"}}>Rs {price}</div>
                <div style={{color:"gray"}}>Qty: {qty}</div>
                <div className="cart-item-actions" >
                    {/*Buttons*/}
                    <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick={this.increaseQuantity}
                        />
                    <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/659/659892.svg"
                            onClick={this.decreaseQuantity}
                        />
                    <img
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        />

                </div>
            </div>
          </div>
        );
    }

}

const styles={
image:{
    height: 100,
  width: 100,
  borderRadius:4,
  backgroundColor:"Gray"
}

}

export default CartItem;