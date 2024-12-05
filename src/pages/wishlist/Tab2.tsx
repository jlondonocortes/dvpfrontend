import { IonContent, IonHeader, IonPage, IonList,IonItem, IonSelect,IonSelectOption } from '@ionic/react';
import './Tab2.css';
import Cards from '../../components/Cards';
import { useAppSelector } from '../../store';
import { sortWishlist } from '../../store/slices/product.slice';

const Tab2: React.FC = () => {
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  let order = ''
  const orderProduct = (e: any) => {
    let items = sortWishlist(e); console.log(items);
  }
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <div className='containerOrder'>
          <IonSelect onIonChange={(e) => orderProduct(e.detail.value)} aria-label="Ordenar" placeholder="Ordenar">
            <IonSelectOption value="name">Nombre</IonSelectOption>
            <IonSelectOption value="price">Precio</IonSelectOption>
            <IonSelectOption value="fecha">Fecha</IonSelectOption>
          </IonSelect>
        </div>
        <Cards items={[]} 
                wishlistItems={wishlistItems} 
                loading={false} 
                error={null}
                order={order}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
