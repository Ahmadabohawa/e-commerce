const cart=[]

const handleCart=(state=cart,action)=>{

    const product = action.payload; 

        switch (action.type) {

          case "ADDITEM":
                //check if product already exist
                const exist=state.find((x)=>x.id===product.id);
                if(exist){
                return(
                     state.map((item)/* id:23,title:shirt,price : 40 $*/ =>
                     item.id===product.id ? {...item, qty : item.qty+1}: item                     
                ))
                }else{
                    return[
                        ...state,
                        {
                            ...product,
                            qty:1
                        }
                    ]
                }
                break;

            case "DELITEM":
                const exist1=state.find((x)=>x.id===product.id);
                if(exist1.qty===1){
                    return state.filter((x)=>x.id!==exist1.id)
                }else{
                    return state.map((item)=>
                    item.id===product.id ? {...item,qty:item.qty-1}:item
                    )
                }  
                break;    

            case "PLUSITEM":
            const exist2=state.find((x)=>x.id===product.id);
                    if(exist2){
                        return state.map((item)/* id:23,title:shirt,price : 40 $*/ =>
                                item.id===product.id ? {...item, qty : item.qty+1}: item
                ) 
                    }
                    else
                    {
                        return false
                    }
            case "CHECKOUT":
                return state=[]

            
            default:
                return state

        }

}
export default handleCart