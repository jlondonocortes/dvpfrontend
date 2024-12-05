import { IonContent,  IonPage } from '@ionic/react';
import './Tab1.css';
import Products from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import { useProducts } from '../../services/ProductService';
import { useAppSelector } from '../../store';

const Tab1: React.FC = () => {
  const { products, loading, error } = useProducts();  
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  
  return (
    <IonPage>
      <Header title={'Lista de productos'}/>
      <IonContent fullscreen>       
        <Products products={products} 
              wishlist={wishlistItems} 
              loading={loading} 
              error={error}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
