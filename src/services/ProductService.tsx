import {  useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../interfaces/ProductInterfaces'
import { ApiError } from '../interfaces/apiErrorInterfaces';

const API_URL = 'https://api.escuelajs.co/api/v1/products';


export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ApiError | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                setLoading(true);
                const response = await axios.get(API_URL);
                setProducts(response.data);
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

