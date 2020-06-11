import React from 'react';

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
                    <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
                    <img alt="decrease"  className="action-icons" src="https://image.flaticon.com/icons/svg/659/659892.svg"/>
                    <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />

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