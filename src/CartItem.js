import React from 'react';

const CartItem=(props)=>{
    // constructor() {
    //     super();
    //     this.state={
    //         price:999,
    //         title: 'Mobile Phone',
    //         qty:1,
    //         img:''
    //     }
    //     //this.increaseQuantity=this.increaseQuantity.bind(this); 
    //     }
    //     increaseQuantity=()=>{
    //         console.log('this',this.state);
    //         this.setState((prevstate)=>{
    //             return {
    //                 qty: prevstate.qty + 1
    //             }
    //         });
    // }
    //     decreaseQuantity=()=>{
    //        const {qty }=this.state;

    //        if (qty == 0){
    //            return ;
    //        }
    //         this.setState((prevstate)=>{
    //             return {
    //                 qty: prevstate.qty - 1
    //             }
    //         });
    // }
        const {price, title ,qty }=props.product;
        const {
            product, 
            onIncreaseQuantity,
            onDecreaseQuantity, 
            onDeleteProduct}=props;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize:25} }>{title}</div>
                    <div style={ {color:'#777'} }>Rs {price}</div>
                    <div style= {  {color:'#777'} }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/*Buttons */}
                        <img 
                            alt="increase"
                            className="action-icons'"
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                            onClick={()=>onIncreaseQuantity(product )} 
                        />
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/128/2740/premium/2740679.png?token=exp=1651120877~hmac=dccdccb3a7be0a9f3cf151ac542f26e2'
                            onClick={()=>this.onDecreaseQuantity(product)}
                        />

                        
                        
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/128/484/premium/484662.png?token=exp=1651120989~hmac=df64a954e4a7b84a3c51dd1b687c64c8'
                            onClick={()=>onDeleteProduct(product.id)}
                        />
                    
                    </div>
                </div>
            </div>
            
        );
    }


const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;