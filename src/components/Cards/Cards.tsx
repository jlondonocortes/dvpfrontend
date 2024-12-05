import { IonCol, IonGrid, IonRow, IonCard,IonCardContent,IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonButton,IonIcon } from '@ionic/react';
 import { heart, heartOutline } from 'ionicons/icons';
import { Product } from '../../interfaces/ProductInterfaces';
import { useDispatch } from 'react-redux';
import { addWishlist, removeWishlist} from '../../store/slices/product.slice';
import './Cards.css';


interface CardProps{
   /*order?: string;*/
    products: Product[];
    wishlist: Product[];
}
  
const Cards: React.FC<CardProps> = ({ products, wishlist }) => {
    const dispatch = useDispatch();

    //se verifica si producto esta en la lista deseados
    const isWishlist = (id: number) => {
        return wishlist.some(item => item.id === id);
    };

    //se agrega o se retira producto de la lista de deseados
    const addProductToWishList = (item:Product) =>{
        if(isWishlist(item.id)){             
            dispatch(removeWishlist(item.id));
        }else{            
            dispatch(addWishlist(item));
        }        
    };    

    return (
        <IonGrid>
            <IonRow>
                {products.map((item) => (
                <IonCol key={item.id+'p'} size='6' sizeSm='4' sizeMd='3'>
                    <IonCard id={item.id.toString()}>
                        <img src={item.images[0] } onError={(e) => e.currentTarget.src = "producto-sin-imagen.png"}></img>
                        <IonCardHeader>
                            <IonCardSubtitle>${item.price}</IonCardSubtitle>
                            <IonCardTitle>{  item.title }</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>{ (item.description.length > 50) ? item.description.substring(0,50)+'...': item.description }</p>
                        </IonCardContent>
                        <IonButton fill="clear"
                        color={isWishlist(item.id) ? 'danger' : 'primary'}
                        onClick={() => addProductToWishList(item)}>
                            <IonIcon icon= {isWishlist(item.id)? heart: heartOutline} ></IonIcon>
                        </IonButton>
                    </IonCard>
                </IonCol>
                ))}  
            </IonRow>                          
        </IonGrid>       
    )
    

    
}

export default Cards;