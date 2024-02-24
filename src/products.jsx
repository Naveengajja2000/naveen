import { useEffect, useState } from "react"
import Cart from "./Cart"
import axios from "axios"
function Products(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProducts(res.data)
        })
    },[])

    function addToCart(product){
        setCart([...cart,{...product,count:1}])
    }

    function isProductInCart(product){
        var x = cart.find(function(cp){
            if(cp.title === product.title){
                return true
            }
            else{
                return false
            }
        })
        return x;
    }

    function getCartProductCount(product){
        var x = cart.find(function(cp){
            if(cp.title === product.title){
                return true
            }
            else{
                return false
            }
        })
        return x?x.count:0
    }

    function incCount(product){
        var temp = cart.map((cp)=>{
            if(cp.title === product.title){
                cp.count=cp.count+1
            }
            return cp
        })
        setCart([...temp])
    }
    function decCount(product){
        var temp = cart.map((cp)=>{
            if(cp.title === product.title){
                cp.count=cp.count-1
            }
            return cp
        })
        setCart([...temp])
    }
    return(
        <div className=" d-flex flex-wrap border border-4 border-info p-2 w-100 rounded">
            <div className="w-50 d-flex flex-wrap ">
                {products.length>0 &&(
                    products.map((product)=>{
                        return <div className="border p-2 w-50 text-center">
                           <div className="">
                           <img src={product.image} width="100px" height='100px'  alt="" className="rounded"/>
                            <div className="p-1 bg-warning rounded ">
                                <h5>{product.title.slice(0,20)}</h5>
                                <h6>{product.price}</h6>
                                {
                                    isProductInCart(product) &&( 
                                    <div>
                                    <button className="btn btn-secondary rounded" onClick={()=>{decCount(product)}}>-</button>
                                    <b>{getCartProductCount(product)}</b>
                                    <button className="btn btn-secondary rounded" onClick={()=>{incCount(product)}}>+</button>
                                    </div>)
                                }
                                {
                                    !isProductInCart(product) && (<button className="btn btn-success rounded " onClick={()=>{addToCart(product)}}>Add to Cart</button>)
                                }
                            </div>
                           </div>

                            </div>
             })
                )}
            </div>
            <div className="w-50">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Products