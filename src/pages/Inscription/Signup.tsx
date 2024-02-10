// src/pages/Signup.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonDatetime } from '@ionic/react';
import {useHistory } from 'react-router-dom';
const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const history = useHistory();


  const handleSignup = () => {
    // ...
  
    if (!email || !password) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
  
    console.log('Email:', email);
    console.log('Password:', password);

    history.push('/profile');
    
    
  };

  return (
    <IonPage>
      <IonContent>
        
        <div className="ion-padding">
        <div>
            

            <h1>
                <p>
                    Cree un profile
                </p>
            </h1>
        </div>
          <IonLabel>Email</IonLabel>
          <IonInput
            type="email"
            placeholder="exemple@gmail.com"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />

          <IonLabel>Mot de passe</IonLabel>
          <IonInput
            type="password"
            placeholder="mot de passe"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          />

          

          <IonButton expand="full" onClick={handleSignup}>
             Suivant
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
