import React from 'react';
import Cart from "./Cart"
import Navbar from "./Navbar"


class App extends React.Component {
  constructor()
    {
        super();
       this.state={
           products:[
                {
                    price:999,
                    qty:1,
                    title:"Phone",
                    url:"https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=659&q=80",
                    id:1
                },
                {
                    price:9990,
                    qty:2,
                    title:"Tablet",
                    url:"https://images.unsplash.com/photo-1464380573004-8ca85a08751a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    id:2
                },
                {
                    price:99,
                    qty:10,
                    title:"Watch",
                    url:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                    id:3
                },
                {
                    price:99900,
                    qty:3,
                    title:"Laptop",
                    url:"https://images.unsplash.com/photo-1559163499-413811fb2344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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
        if( products[index].qty===0)
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
    getCartCount=()=>{
      const{products}=this.state;
        let count=0;
        products.map((product)=>{
          count+=product.qty;
        })
        return count;
    }
    getTotalPrice=()=>{
      const{products}=this.state;
        let count=0;
        products.map((product)=>{
          count+=product.qty*product.price;
        })
        return count;
    }

  render(){
    const {products}=this.state;
    return (
      <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.handleDecreaseQuantity}
          deleteQuantity={this.handleDeleteQuantity}
      />
      <div style={{padding:10,fontSize:20}}>Total: {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
