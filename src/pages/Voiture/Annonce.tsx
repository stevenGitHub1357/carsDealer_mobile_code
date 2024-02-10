// ListPage.tsx
import React from 'react';
import { IonPage, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonText, IonButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';

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
  }
  // Ajoutez d'autres éléments de la liste selon vos besoins
];



const Insertion: React.FC = () => {
  const history = useHistory();
  
  const handleUpdate = () => {
    history.push('/modifiAnnonce');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButton  href='page'>Retour</IonButton> */}
          
          <IonButtons>
              <IonMenuButton/>
              <IonTitle> Mes annonces </IonTitle>
          </IonButtons>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {items.map((item) => (
            <IonItem key={item.id} lines="none">
              <IonThumbnail slot="start">
                <img src="../../images/image.jpg" alt={`Image de ${item.description}`} />
              </IonThumbnail>
              <IonLabel>
                <IonText>
                  <p>Prix: {item.price}</p>
                  <p>Année: {item.year}</p>
                  <p>Couleur: {item.color}</p>
                  <h2>{item.description}</h2>
                </IonText>
              </IonLabel>
              <IonItem>
                {/* Bouton ajouté à la liste */}
                <IonButton expand="full" onClick={handleUpdate}>Modifier</IonButton>
              </IonItem>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Insertion;
