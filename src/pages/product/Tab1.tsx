import { IonContent,  IonPage } from '@ionic/react';
import './Tab1.css';
import Cards from '../../components/Cards';
import { useProducts } from '../../services/ProductService';
import { useAppSelector } from '../../store';

const Tab1: React.FC = () => {
  const { products, loading, error } = useProducts();  
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  
  return (
    <IonPage>
      <IonContent fullscreen>       
        <Cards items={products} 
              wishlistItems={wishlistItems} 
              loading={loading} 
              error={error}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
