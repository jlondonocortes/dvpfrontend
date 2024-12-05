import {  useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../interfaces/ProductInterfaces'
import { ApiError } from '../interfaces/apiErrorInterfaces';

const API_URL = 'https://api.escuelajs.co/api/v1/products';


export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ApiError | null>(null);
    const IMG_DEFAULT = "producto-sin-imagen.png";

    const checkImage = (items: Product[]) => {        
        return items.map(item => {      
            //if(typeof item.images !== "string") return item;      
            try{
                const images = item.images.join(","); 
                item.images = JSON.parse(`${images}`);
            }catch(err){ 
                item.images = [IMG_DEFAULT];
            }
           return item; 
        });          
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                setLoading(true);
                const response = await axios.get(API_URL);
                const result =checkImage(response.data);
                setProducts(result);
            }catch(err){
                const apiError: ApiError = {
                    message: err instanceof Error ? err.message : 'Error desconocido',
                    status: err instanceof axios.AxiosError ? err.response?.status || 500 : 500
                }
                setError(apiError);
            } finally{
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);
    return { products, loading, error};

}


