import { IonCol, IonGrid, IonRow, IonCard,IonCardContent,IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonButton,
 IonSpinner, IonAlert } from '@ionic/react';
import { Product } from '../interfaces/ProductInterfaces';

import { useDispatch } from 'react-redux';
import { addWishlist, removeWishlist} from '../store/slices/product.slice';
import { ApiError } from '../interfaces/apiErrorInterfaces';


interface CardProps{
    items: Product[];
    wishlistItems: Product[];
    loading: boolean;
    error: ApiError | null;
    order?: string;
}
  
const Cards: React.FC<CardProps> = ({ items, wishlistItems, loading, error, order }) => {
    const dispatch = useDispatch();

    //se verifica si producto esta en la lista deseados
    const isWishlist = (id: number) => {
        return wishlistItems.some(item => item.id === id);
      };

    //se agrega o se retira producto de la lista de deseados
    const addProductToWishList = (item:Product) =>{
        if(isWishlist(item.id)){             
          dispatch(removeWishlist(item.id));
        }else{            
          dispatch(addWishlist(item));
        }        
      };

    if(loading){
        return <IonSpinner color="primary"/>
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
    
    if(items.length > 0){
        return (
            <IonGrid>
                <IonRow>
                    {items.map((item) => (
                    <IonCol key={item.id+'p'} size='6'>
                        <IonCard id={item.id.toString()}>
                            <img src={item.images[0]}></img>
                            <IonCardHeader>
                                <IonCardSubtitle>${item.price}</IonCardSubtitle>
                                <IonCardTitle>{item.title}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent></IonCardContent>
                            <IonButton fill="clear"
                            color={isWishlist(item.id) ? 'danger' : 'primary'}
                            onClick={() => addProductToWishList(item)}>
                                {isWishlist(item.id)? 'REMOVE':'ADD'}
                            </IonButton>
                        </IonCard>
                    </IonCol>
                    ))}  
                </IonRow>                          
            </IonGrid>       
        )
    }

    if(wishlistItems.length > 0 && items.length == 0){
        
        return (
            <IonGrid>
                <IonRow>
                    {wishlistItems.map((item) => (
                    <IonCol key={item.id+'w'} size='6'>
                        <IonCard id={item.id.toString()}>
                            <img src={item.images[0]}></img>
                            <IonCardHeader>
                                <IonCardSubtitle>${item.price}</IonCardSubtitle>
                                <IonCardTitle>{item.title}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent></IonCardContent>
                            <IonButton fill="clear"
                            color={isWishlist(item.id) ? 'danger' : 'primary'}
                            onClick={() => addProductToWishList(item)}>
                                {isWishlist(item.id)? 'REMOVE':'ADD'}
                            </IonButton>
                        </IonCard>
                    </IonCol>
                    ))}  
                </IonRow>                          
            </IonGrid>   
        );
    }
    
}

export default Cards;