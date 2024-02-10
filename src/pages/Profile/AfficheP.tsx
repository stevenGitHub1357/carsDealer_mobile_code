// ListPage.tsx
import React from 'react';
import { IonPage, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonText, IonButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';

const items = [
  {
    id: 1,
    nom: 'https://example.com/nom1.jpg',
    prenom: 'prenom de l\'article 1',
    naissance: '$19.99',
    email: 2022
  },
  // Ajoutez d'autres éléments de la liste selon vos besoins
];



const AfficheP: React.FC = () => {
  const history = useHistory();
  
  const handleUpdate = () => {
    history.push('/modifiProfile');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButton  href='page'>Retour</IonButton> */}
          
          <IonButtons>
              <IonMenuButton/>
              <IonTitle> Mon profile </IonTitle>
          </IonButtons>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {items.map((item) => (
            <IonItem key={item.id} lines="none">
              <IonLabel>
                <IonText>
                  <p>Nom: {item.nom}</p>
                  <p>Prenom: {item.prenom}</p>
                  <p>Email: {item.email}</p>
                  <p>Date de naissance: {item.naissance}</p>

                </IonText>
              </IonLabel>
              <IonItem>
                {/* Bouton ajouté à la liste */}
                <IonButton expand="full" onClick={handleUpdate}>
                    Modifier
                </IonButton>
              </IonItem>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AfficheP;
