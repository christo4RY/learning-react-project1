import { createContext, useEffect, useReducer, useState } from "react";


export const StateProducts = createContext();

export const StateProductsProvider = ({children}) => {
    
    const [products,setProducts] = useState([]);
    const [search,setSearch] = useState("");
    const [isProductsLoading,setIsProductsLoading] = useState(true)

    useEffect(()=>{
        fetchProducts()
    },[])

    const filterProducts =  products.filter(product=> product.title.toLowerCase().includes(search))
    useEffect(()=>{
        dispatch({type:"GET_PRODUCTS",payload:products})
        dispatch({type:"GET_PRODUCTS",payload:filterProducts})
    },[products,search])

    const fetchProducts = async () =>{
        const data = await fetch("https://dummyjson.com/products");
        const {products} = await data.json()
        setProducts(products)
        setIsProductsLoading(false)
    }

    const initalState = {
        products:[],
        carts:[]
    }

    const reducer = (state,action) => {
        switch (action.type) {
            case "GET_PRODUCTS":
                return {
                    ...state,products:action.payload
                }
            case "ADD_TO_CART":
                const isExist = state.carts.find((cart)=> cart.id == action.payload.id)
                if(isExist){
                  return {
                    ...state
                  }  
                }else{
                    return {
                        ...state,carts:[...state.carts,{...action.payload}]
                    }
                }
            case "REMOVE_PRODUCT_FROM_CARTS":
                return {
                    ...state,
                    carts:state.carts.filter(cart => cart.id != action.payload.id)
                }
            case "REMOVE_CART":
                return {
                    ...state,
                    carts:state.carts.filter(cart=> cart.id != action.payload.id)
                }
            case "REMOVE_ALL_CARTS":
                return {
                    ...state,
                    carts:state.carts = []
                }
            default:
                break;
        }
    }

    const [state,dispatch] = useReducer(reducer,initalState)

    const data = {
        state,
        dispatch,
        search,
        setSearch,
        isProductsLoading,
        setIsProductsLoading
    }

    return (
        <StateProducts.Provider value={data}>
            {children}
        </StateProducts.Provider>
    )
}