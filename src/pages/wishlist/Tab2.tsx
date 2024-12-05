import { IonContent, IonHeader, IonPage, IonSelect,IonSelectOption } from '@ionic/react';
import React, { useState } from 'react';
import './Tab2.css';
import Products from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import { useAppSelector,useAppDispatch } from '../../store';
import { sortWishlist } from '../../store/slices/product.slice';

const Tab2: React.FC = () => {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const [sortOption, setSortOption] = useState<'name' | 'price' | 'addedAt'>('addedAt');
  let order = ''
  const orderProduct = (option: 'name' | 'price' | 'addedAt') => {
    setSortOption(option);
    dispatch(sortWishlist(option));
  }
  
  return (
    <IonPage>
      <Header title={'Productos deseados'}/>
      <IonContent fullscreen>
        <div className='containerOrder'>
          <IonSelect onIonChange={(e) => orderProduct(e.detail.value)} aria-label="Ordenar" placeholder="Ordenar">
            <IonSelectOption value="name">Nombre</IonSelectOption>
            <IonSelectOption value="price">Precio</IonSelectOption>
            <IonSelectOption value="fecha">Fecha</IonSelectOption>
          </IonSelect>
        </div>
        <Products products={wishlistItems} 
                wishlist={wishlistItems} 
                loading={false} 
                error={null}
                order={order}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
