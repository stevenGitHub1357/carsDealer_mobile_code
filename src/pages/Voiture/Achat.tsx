// ListPage.tsx
import React from 'react';
import { IonPage, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonText, IonButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

const items = [
  {
    id: 1,
    image: 'https://example.com/image1.jpg',
    description: 'Description de l\'article 1',
    price: '$19.99',
    year: 2022,
    color: 'Rouge',
  },
  {
    id: 2,
    image: 'https://example.com/image2.jpg',
    description: 'Description de l\'article 2',
    price: '$29.99',
    year: 2023,
    color: 'Bleu',
  },
  // Ajoutez d'autres éléments de la liste selon vos besoins
];

const Insertion: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButton  href='page'>Retour</IonButton> */}
          
          <IonButtons>
              <IonMenuButton/>
              <IonTitle> Mes achats </IonTitle>
          </IonButtons>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {items.map((item) => (
            <IonItem key={item.id} lines="none">
              <IonThumbnail slot="start">
                <img src={item.image} alt={`Image de ${item.description}`} />
              </IonThumbnail>
              <IonLabel>
                <IonText>
                  <h2>{item.description}</h2>
                  <p>Prix: {item.price}</p>
                  <p>Année: {item.year}</p>
                  <p>Couleur: {item.color}</p>
                </IonText>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Insertion;
