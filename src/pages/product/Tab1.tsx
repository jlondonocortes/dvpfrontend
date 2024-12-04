import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import './Tab1.css';
import Cards from '../../components/cards/Cards';

//array test
import Item from '../../interfaces/ItemInterfaces';
const cards: Item[] = [
  {
    "id": 25,
    "title": "Alexander",
    "price": 39,
    "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
    "images": [
      "https://i.imgur.com/YaSqa06.jpeg",
      "https://i.imgur.com/isQAliJ.jpeg",
      "https://i.imgur.com/5B8UQfh.jpeg"
    ],
    "creationAt": "2024-12-03T06:28:26.000Z",
    "updatedAt": "2024-12-04T00:57:58.000Z",
    "category": {
      "id": 2,
      "name": "Periféricos",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2024-12-03T06:28:26.000Z",
      "updatedAt": "2024-12-03T20:25:49.000Z"
    }
  },
  {
    "id": 27,
    "title": "Sleek Smartwatch with Vibrant Display",
    "price": 16,
    "description": "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
    "images": [
      "https://i.imgur.com/LGk9Jn2.jpeg",
      "https://i.imgur.com/1ttYWaI.jpeg",
      "https://i.imgur.com/sPRWnJH.jpeg"
    ],
    "creationAt": "2024-12-03T06:28:26.000Z",
    "updatedAt": "2024-12-03T06:28:26.000Z",
    "category": {
      "id": 2,
      "name": "Periféricos",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2024-12-03T06:28:26.000Z",
      "updatedAt": "2024-12-03T20:25:49.000Z"
    }
  }];

const Tab1: React.FC = () => {
  const wishlistItems:Item[] = [];

  const isWishlist = (id: number) => {
    return wishlistItems.some(item => item.id === id);
  };

  const addWishList = (item:Item) =>{
    if(isWishlist(item.id)){
      // remove
    }else{
      // add
    }
  };

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
        <Cards items={cards}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
