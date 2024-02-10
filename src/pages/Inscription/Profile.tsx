// src/pages/Profile.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonDatetime, IonSelect, IonSelectOption } from '@ionic/react';
import { useHistory } from 'react-router';

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [genre, setGenre] = useState('');
  const [birthdate, setBirthdate] = useState<string | string[]>([]);

  const history = useHistory();

  const handleSaveProfile = () => {
    try {
      let formattedBirthdate: string;
    
      if (Array.isArray(birthdate)) {
        // Utilisez la première valeur du tableau (ou une logique appropriée)
        formattedBirthdate = new Date(birthdate[0]).toISOString();
      } else {
        formattedBirthdate = new Date(birthdate).toISOString();
      }

      if (!firstName || !lastName || !birthdate) {
        alert('Veuillez remplir tous les champs.');
        return;
      }
      
      // Ajoutez ici la logique de sauvegarde du profil
      console.log('Prénom:', firstName);
      console.log('Nom:', lastName);
      console.log('Birthdate:', formattedBirthdate);

      history.push('/login');
    } catch (error) {
        alert('Verifier votre date de naissance.');
    }
  };

  return (
    <IonPage>
      
      <IonContent>
      <div>
            <h1>
                <p>
                    Cree un profile
                </p>
            </h1>
        </div>
        <div className="ion-padding">
          <IonLabel>Votre nom</IonLabel>
          <IonInput
            placeholder="nom"
            value={firstName}
            onIonChange={(e) => setFirstName(e.detail.value!)}
          />

          <IonLabel>votre prenom</IonLabel>
          <IonInput
            placeholder="prenom"
            value={lastName}
            onIonChange={(e) => setLastName(e.detail.value!)}
          />
          <IonLabel>Sélectionnez votre genre :</IonLabel>
          <IonSelect
            value={genre}
            placeholder="Choisissez votre genre"
            onIonChange={(e) => setGenre(e.detail.value)}
          >
            {/* Options de la liste déroulante */}
            <IonSelectOption value="1">Homme</IonSelectOption>
            <IonSelectOption value="2">Femme</IonSelectOption>
            <IonSelectOption value="3">Indefini</IonSelectOption>
          </IonSelect>
          <IonLabel>Date de naissance</IonLabel>
          <IonDatetime
            value={birthdate as string}
            onIonChange={(e) => setBirthdate(e.detail.value!)}
          />

          <IonButton expand="full" onClick={handleSaveProfile}>
                Enregistrer le profil
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
