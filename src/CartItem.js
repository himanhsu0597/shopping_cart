import React from 'react';

class  CartItem extends React.Component{

    render()
    {
        return(
          <div className="cart-item">

            <div className="left-block">
            <img  style={styles.image} />

            </div>

            <div className="right-block">
                <div style={{fontSize:"25px"}}>Phone</div>
                <div style={{color:"gray"}}>Rs 999</div>
                <div >Qty: 10</div>
                <div className="cart-item-actions" >
                    
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
  backgroundColor:"red"
}

}

export default CartItem;