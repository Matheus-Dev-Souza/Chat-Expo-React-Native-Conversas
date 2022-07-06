<h1> Chat App Project: </h1>

<p>Este projeto foi feito para construir um aplicativo de bate-papo para dispositivos móveis usando React Native. Este aplicativo fornecerá aos usuários uma interface de bate-papo e opções para compartilhar imagens e sua localização. </p>

<h2> Descrição: </h2>

<p> Este projeto inclui o uso de React Native, Expo e um banco de dados do Google Firestore. Um usuário poderá inserir seu nome e escolher uma cor de fundo antes de entrar no bate-papo. O usuário também poderá enviar mensagens, fotos e compartilhar geolocalização uma vez dentro do aplicativo de bate-papo.  
  
<h2> Instalações e bibliotecas: </h2>

<p> npm install --save react-navigation, npm install @react-navigation/native @react-navigation/stack, expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view <p>
  <p> npm install react-native-svg <p>
  <p> npm install react-native-gifted-chat --save <p>
  <p> expo install @react-native-async-storage/async-storage <p>
  <p> npm install --save @react-native-community/netinfo <p>
  <p> expo install expo-image-picker <p>
  <p> expo install expo-location expo install react-native-maps <p>
  <p> npm install --save prop-types  <p>
    
<h2> Expo: </h2>
  
  <p> 1) npm install expo-cli --global <br>
      2) expo init 'INSERT_NAME_HERE' <p>
  
<h2> Firebase: </h2>

<p> npm install --save firebase <p>

<p> Após a configuração inicial, vá para "Armazenamento" em Visão geral do projeto. Em seguida, vá para "Regras". Em Regras, clique em "Editar regras" e altere as regras para...
  service firebase.storage {
  match /b/{bucket}/o {
  match /{allPaths=**} {
  allow read, write;
  }
  }
  }
  
<h2> Feito Por: Matheus Gonçalves </h2>

