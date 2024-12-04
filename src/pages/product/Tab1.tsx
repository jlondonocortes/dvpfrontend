import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import './Tab1.css';
import Cards from '../../components/cards/Cards';
import { useProducts } from '../../services/ProductService';
import { useAppSelector } from '../../store';

const Tab1: React.FC = () => {
  const { products, loading, error } = useProducts();  
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Productos</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Productos</IonTitle>
          </IonToolbar>
        </IonHeader>        
        <Cards items={products} wishlistItems={wishlistItems}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
