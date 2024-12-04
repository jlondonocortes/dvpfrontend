import { IonCol, IonGrid, IonRow, IonCard,IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import { Product } from '../../interfaces/ProductInterfaces';

import { useDispatch } from 'react-redux';
import { addWishlist, removeWishlist} from '../../store/slices/product.slice';


interface CardProps{
    items: Product[];
    wishlistItems: Product[];
}
  
const Cards: React.FC<CardProps> = ({ items, wishlistItems }) => {
    const dispatch = useDispatch();

    const isWishlist = (id: number) => {
        return wishlistItems.some(item => item.id === id);
      };
    const addWishList = (item:Product) =>{
        if(isWishlist(item.id)){
          dispatch(removeWishlist(item.id));
        }else{
          dispatch(addWishlist(item));
        }
      };
    
    return (
        <div>
            <IonGrid>
                <IonRow>
                    {items.map((item) => (
                    <IonCol size='6'>
                        <IonCard id={item.id.toString()}>
                            <img src={item.images[0]}></img>
                            <IonCardHeader>
                                <IonCardSubtitle>${item.price}</IonCardSubtitle>
                                <IonCardTitle>{item.title}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent></IonCardContent>
                            <IonButton fill="clear"
                            color={isWishlist(item.id) ? 'danger' : 'primary'}
                            onClick={() => addWishList(item)}>
                                {isWishlist(item.id) ? 'REMOVE':'ADD'}
                            </IonButton>
                        </IonCard>
                    </IonCol>
                    ))}  
                </IonRow>                          
            </IonGrid>
        </div>        
    )
}

export default Cards;