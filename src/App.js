import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor () {
    super();
    this.state= {
        products: [
            {
                price: 999,
                title: 'Watch ',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id:3
            },
            {
                price: 9999,
                title: 'Mobile ',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id:3
            },
            {
                price: 39999,
                title: 'Laptop ',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                id:3
            }
        ]
    }

    handleIncreaseQuantity = (product) =>{
        console.log("heyy please inc the qty of ",product);
        const { products }=this.state;
        const index = products.indexOf(product);

        products[index].qty +=1;

        this.setState({
            products
        })

    }
    handleDecreaseQuantity = (product) =>{
        console.log("heyy please inc the qty of ",product);
        const { products }=this.state;
        const index = products.indexOf(product);
        if (products[index].qty===0) return;
        products[index].qty -=1;

        this.setState({
            products
        })

    }
    handleDeleteProduct = (id)=>{
        const {products} = this.state;

        const items = products.filter((items)=> items.id!== id);

        this.setState({
            products: items
        })
    }

    getCartCount =()=>{
      const { products } = this.state;

      let count = 0;

      products.forEach((product)=>{
        count += product.qty;
      })
      return count;
    }

    getCartTotal=()=>{
      const {products}=this.state;

      let cartTotal=0;

      products.mao((product)=>{
        cartTotal=cartTotal+product.qty * product.price
      })
      return cartTotal;
    }
  }
  render(){
    const { products }= this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
        products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onhandleDeleteProduct={this.handleDeleteProduct}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ { padding: 10, fontSize: 20}}>Total: {this.getCartTotal()}</div>
      </div>
    ); 
  }
}

export default App;
 