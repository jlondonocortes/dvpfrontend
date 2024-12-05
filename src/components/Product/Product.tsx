import { IonSpinner, IonAlert } from '@ionic/react';
import { Product } from '../../interfaces/ProductInterfaces';
import { ApiError } from '../../interfaces/apiErrorInterfaces';
import './Product.css';
import Cards from '../Cards/Cards';


interface ProductProps{
    products: Product[];
    wishlist: Product[];
    loading: boolean;
    error: ApiError | null;
    order?: string;
}

const Products: React.FC<ProductProps> = ({products, wishlist, loading, error}) => {

    if(loading){
        return <div className='containerSpinner'><IonSpinner color="primary"/></div>
    }

    if(error){
        return (
            <IonAlert
            isOpen={!!error}
            header={'Error de Conexión'}
            message={`${error.message} (Código: ${error.status})`}
            buttons={['OK']}
            />
        );
    }

    if(products.length > 0){
        return (
            <Cards products={products} wishlist={wishlist}/>
        ) 
    }

    if(products.length == 0){
        return (
            <div className='containerMessage'>
                <h3>Lista de productos vacía.</h3>
            </div>
        )
    }
     
}


export default Products;