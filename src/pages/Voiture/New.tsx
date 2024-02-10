// New.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonInput, IonLabel, IonSelect, IonSelectOption, IonButton, IonItem, IonDatetime, IonTextarea, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import api from '../../api';

const New: React.FC = () => {
  const [marque, setMarque] = useState<string>('');
  const [modele, setModele] = useState<string>('');
  const [couleur, setCouleur] = useState<string>('');
  const [kilometrage, setKilometrage] = useState<number | undefined>(undefined);
  const [annee, setAnnee] = useState<number | undefined>(undefined);
  const [transmission, setTransmission] = useState<string>('');
  const [carburant, setCarburant] = useState<string>('');
  const [prix, setPrix] = useState<number | undefined>(undefined);
  const [description, setDescription] = useState<string>('');

  const [marqueListe, setMarqueListe] = useState<any[]>([]);
  const [modeleListe, setmodeleListe] = useState<any[]>([]);
  const [transListe, settransListe] = useState<any[]>([]);
  const [carbListe, setcarbListe] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const marqueListe = await api.get('/listMarque');
        setMarqueListe(marqueListe.data);
        const modeleListe = await api.get('/listModele');
        setmodeleListe(modeleListe.data);
        const transListe = await api.get('/listTransmission');
        settransListe(transListe.data);
        const carbListe = await api.get('/listCarburant');
        setcarbListe(carbListe.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    getData();
  }, []);

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
              <IonTitle> Ajouter une annonce</IonTitle>
          </IonButtons>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
      
        <IonItem>
          <IonLabel>Marque</IonLabel>
          <IonSelect value={marque} placeholder="Sélectionner" onIonChange={(e) => setMarque(e.detail.value!)}>
          {marqueListe.map(item => (
            <IonSelectOption key={item.id} value={item.id}>
              {item.nom}
            </IonSelectOption>
          ))}
          </IonSelect>
        </IonItem>

        <IonItem>
        <IonLabel>Modele</IonLabel>
          <IonSelect value={modele} placeholder="Sélectionner" onIonChange={(e) => setModele(e.detail.value!)}>
          {modeleListe.map(item => (
            <IonSelectOption key={item.id} value={item.id}>
              {item.nom}
            </IonSelectOption>
          ))}
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
          {transListe.map(item => (
            <IonSelectOption key={item.id} value={item.id}>
              {item.nom}
            </IonSelectOption>
          ))}
          </IonSelect>
        </IonItem>

        <IonItem>
        <IonLabel>Carburant</IonLabel>
          <IonSelect value={carburant} placeholder="Sélectionner" onIonChange={(e) => setCarburant(e.detail.value!)}>
          {carbListe.map(item => (
            <IonSelectOption key={item.id} value={item.id}>
              {item.nom}
            </IonSelectOption>
          ))}
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

export default New;
