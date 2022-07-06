<h1> Chat App Project: </h1>

<p>This project was made to build a chat app for mobile devices using React Native. This app will provide users with a chat interface and options to share images and their location. </p>

<h2> Description: </h2>

<p> This project includes the use of React Native, Expo, and a Google Firestore Database. A user will be able to enter their name and choose a background color before enterting the chat. The user will also be able to send message, photos, and share geolocation once inside the chat application.  
  
<h2> Installs & Libraries: </h2>

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

<p> After initial setup, go to "Storage" under Project overview. Then go to "Rules." Under Rules click on "Edit Rules" and change the rules to...
  service firebase.storage {
  match /b/{bucket}/o {
  match /{allPaths=**} {
  allow read, write;
  }
  }
  }
  
<h2> Sample Video: </h2>

![Recording 2022-05-03 at 12 06 56](https://user-images.githubusercontent.com/89669426/174530419-eb5939af-0232-4ab7-8217-9536ed107249.gif)
