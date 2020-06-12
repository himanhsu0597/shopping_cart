import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    constructor()
    {
        super();
       this.state={
           products:[
                {
                    price:999,
                    qty:1,
                    title:"Phone",
                    url:"",
                    id:1
                },
                {
                    price:9990,
                    qty:2,
                    title:"Tablet",
                    url:"",
                    id:2
                },
                {
                    price:99,
                    qty:10,
                    title:"Watch",
                    url:"",
                    id:3
                },
                {
                    price:99900,
                    qty:3,
                    title:"Laptop",
                    url:"",
                    id:4
                }

           ]
       }
       //this.increaseQuantity=this.increaseQuantity.bind(this);
      // this.testing();
    }

    handleIncreaseQuantity = (product) => {
        console.log("output product",product);
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;

        this.setState({
            products
        })

    }
    handleDecreaseQuantity = (product) => {
        console.log("output product",product);
        const {products}=this.state;
        const index=products.indexOf(product);
        if( products[index].qty==0)
        return;
        products[index].qty-=1;

        this.setState({
            products
        })

    }
    handleDeleteQuantity = (id) => {
        console.log("output product",id);
        const {products}=this.state;
        const newProducts=products.filter((product)=>product.id!==id);
        

        this.setState({
            products:newProducts
        })

    }
    render()
    {
       // console.log(this.state);
        const { products }=this.state;
        return (
            <div className="cart">
            {
                products.map((product)=>{
                    return (
                        <CartItem 
                                product={product}
                                key={product.id}
                                increaseQuantity={this.handleIncreaseQuantity}
                                decreaseQuantity={this.handleDecreaseQuantity}
                                deleteQuantity={this.handleDeleteQuantity}
                        />
                    )
                    
                })
            }
            </div>
        )
    }
}

export default Cart;