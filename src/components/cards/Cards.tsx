import { IonCol, IonGrid, IonRow, IonCard,IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import Item from '../../interfaces/ItemInterfaces';

interface CardProps{
    items: Item[];
    filter?: string;
}
  
const Cards: React.FC<CardProps> = ({ items }) => {
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
                            <IonButton fill="clear">Add</IonButton>
                        </IonCard>
                    </IonCol>
                    ))}  
                </IonRow>                          
            </IonGrid>
        </div>        
    )
}

export default Cards;