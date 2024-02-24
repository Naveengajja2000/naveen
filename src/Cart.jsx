function Cart(props){
    function getTotal(){
       return props.cart.reduce((t,p)=>{
                 return t+(p.price*p.count)
                 },0)
    }
    return (
        <div className="border border-4 border-secondary p-2 rounded">
            <h1>Cart:</h1>
            {
              props.cart.map((p)=>{
                return <li className="d-flex flex-wrap justify-content-between">
                    <div className="w-50">{p.title}</div>
                    <div className="w-25 text-end">{p.count}*{p.price}</div>
                    <div className="w-25 text-end">{p.count*p.price}</div>
                    </li>
              })  
            }
            <hr/>
            <h1 className="text-end bg-primary rounded">Total:{getTotal()}</h1>
        </div>
    )
}

export default Cart