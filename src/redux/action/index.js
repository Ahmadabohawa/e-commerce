

// For Add item to cart

export const addCart=(product)=>{

    console.log("type of product ", typeof product)
    console.log(" product : ", product)
    
            return{
                type:"ADDITEM",
                payload:product // {id:23,title:shirt ,price : 25 $}
            }
}


//For Delete item from cart
export const deleteitem=(product)=>{
    return{
        type :"DELITEM",
        payload:product
    }
}

export const plusItem=(product)=>{
    return{
        type :"PLUSITEM",
        payload:product
    }
}

export const checkOut=()=>{
    return{
        type:"CHECKOUT"
    }
}


export const additem=({name,file,price,description})=>{
    return{
        type:"ADD",
        payload:{name,file,price,description}
    }
}
