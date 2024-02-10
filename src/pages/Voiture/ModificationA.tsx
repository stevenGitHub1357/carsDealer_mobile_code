// ModifiactionA.tsx
import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonLabel, IonSelect, IonSelectOption, IonButton, IonItem, IonDatetime, IonTextarea, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

const ModifiactionA: React.FC = () => {
  const [marque, setMarque] = useState<string>('');
  const [modele, setModele] = useState<string>('');
  const [couleur, setCouleur] = useState<string>('');
  const [kilometrage, setKilometrage] = useState<number | undefined>(undefined);
  const [annee, setAnnee] = useState<number | undefined>(undefined);
  const [transmission, setTransmission] = useState<string>('');
  const [carburant, setCarburant] = useState<string>('');
  const [prix, setPrix] = useState<number | undefined>(undefined);
  const [description, setDescription] = useState<string>('');

  const handleSubmit = () => {
    // Ajoutez ici la logique pour envoyer les données à votre backend ou effectuer d'autres opérations nécessaires
    console.log({
      marque,
      modele,
      couleur,
      kilometrage,
      annee,
      transmission,
      carburant,
      prix,
      description,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButton  href='page'>Retour</IonButton> */}
          
          <IonButtons>
              <IonMenuButton/>
              <IonTitle> Modification de l'annonce</IonTitle>
          </IonButtons>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
      
        <IonItem>
          <IonLabel>Marque</IonLabel>
          <IonSelect value={marque} placeholder="Sélectionner" onIonChange={(e) => setMarque(e.detail.value!)}>
            <IonSelectOption value="Automatique">Automatique</IonSelectOption>
            <IonSelectOption value="Manuelle">Manuelle</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Modèle</IonLabel>
          <IonSelect value={modele} placeholder="Sélectionner" onIonChange={(e) => setModele(e.detail.value!)}>
            <IonSelectOption value="Automatique">Automatique</IonSelectOption>
            <IonSelectOption value="Manuelle">Manuelle</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Couleur</IonLabel>
          <IonSelect value={couleur} placeholder="Sélectionner" onIonChange={(e) => setCouleur(e.detail.value!)}>
            <IonSelectOption value="Automatique">Automatique</IonSelectOption>
            <IonSelectOption value="Manuelle">Manuelle</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Transmission</IonLabel>
          <IonSelect value={transmission} placeholder="Sélectionner" onIonChange={(e) => setTransmission(e.detail.value!)}>
            <IonSelectOption value="Automatique">Automatique</IonSelectOption>
            <IonSelectOption value="Manuelle">Manuelle</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Type de carburant</IonLabel>
          <IonSelect value={carburant} placeholder="Sélectionner" onIonChange={(e) => setCarburant(e.detail.value!)}>
            <IonSelectOption value="Essence">Essence</IonSelectOption>
            <IonSelectOption value="Diesel">Diesel</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Kilométrage</IonLabel>
          <IonInput type="number" value={kilometrage} onIonChange={(e) => setKilometrage(parseFloat(e.detail.value!))} />
        </IonItem>

        <IonItem>
          <IonLabel>Année</IonLabel>
          <IonInput type="number" value={annee} onIonChange={(e) => setAnnee(parseFloat(e.detail.value!))} />
        </IonItem>

        

        <IonItem>
          <IonLabel>Prix</IonLabel>
          <IonInput type="number" value={prix} onIonChange={(e) => setPrix(parseFloat(e.detail.value!))} />
        </IonItem>

        <IonItem>
          <IonLabel>Description</IonLabel>
          <IonTextarea value={description} onIonChange={(e) => setDescription(e.detail.value!)} />
        </IonItem>

        <IonButton expand="full" onClick={handleSubmit}>Enregistrer</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ModifiactionA;
