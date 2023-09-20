// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCart from "./ProductsCart";


const Products = () => {
    const {products} = useLoaderData()
    console.log(products);
    
    // const [products, setProducts] = useState([])
    // useEffect(()=>{
    //     fetch(`https://dummyjson.com/products`)
    //     .then(res =>res.json())
    //     .then(data=>setProducts(data.products))
    // },[])
    
    return (
        <div className="grid grid-cols-3 gap-5 p-5">
            {
                products?.map(product => <ProductsCart key={product.id} product={product}></ProductsCart>)
            }
        </div>
    );
};

export default Products;