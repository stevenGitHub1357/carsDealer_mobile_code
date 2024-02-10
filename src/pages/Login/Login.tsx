import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonRouterLink, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  
  const handleLogin = () => {
    // Ajoutez ici la logique de connexion


    if (email == null || password == null) {
        
        alert('Veuillez remplir tous les champs.');
        return;
    }

    console.log('email:', email);
    console.log('Password:', password);

    history.push('/page', { email });
  };

  return (
    <IonPage>
      <IonContent>
        <div className="ion-padding">
        <div>
            <h1>
                <p>
                    Bienvenue dans Cars Dealer
                </p>
            </h1>
        </div>
        <IonLabel>Votre email</IonLabel>
          <IonInput
            placeholder="Email"
            value={email}
            onIonChange={(e) => setemail(e.detail.value!)}
          />
        <IonLabel>Votre mot de passe</IonLabel>
          <IonInput
            type="password"
            placeholder="Mot de passe"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          />
          <IonButton expand="full" onClick={handleLogin}>
            Connexion
          </IonButton>
            <div className="ion-padding">
            {/* Autres éléments de la page de connexion */}
            Pas encore de compte .
            <IonRouterLink routerLink="/signup">
                S'inscrir
            </IonRouterLink>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
