# Sobre o aplicativo
 Este aplicativo foi criado totalmente em Javascript através do **Node.js**, **React.js** e **React Native**.  Seu próprosito é **cadastrar** e **conectar** ONG's à Pessoas que possam ajudar em diversos propósitos e casos que envolvam doações

 * **Back-End - Node.js e Jest.js**
     O Node foi utilizado para a criação de API's REST que farão o cadastro de ONG's, Pessoas e Casos, tendo
     comunicação com o Front-End e Back-End através do Axios. Também há o teste de algumas rotas feitas no back-end 
     utilizando o Jest.js.

 * **Front-End - React.js:**
     O React foi utilizado para a criação de componentes reutilizáveis para a web, seu papel e renderizar todo o
     layout idealizado com base no próposito do aplicativo e fazer comunicação entre o cliente e o servidor, a fim
     de gerar os registros no banco de dados relacional SQLite.

 * **Mobile - React Native:**
     O React Native foi utilizado para a criação dos componentes reutilizáveis em dispositivos móveis, para isso foi
     utilizado o Expo para a utilização do simulador do Android Studio, tendo como propósito fazer comunicação também
     com o SQLite tendo paginação dos casos através de scroll infinito.

## Como executá-lo
 ###### No browser
  Faça o **clone** deste repositório remoto em **sua máquina** e **instale** todas as **depêndencias**
  atravésdo **NPM ou YARN**, para **executar o Node e React** use o comando **npm start** isso fará com
  que a aplicação sejá aberta no seu localhost.

 ###### No celular 
  Faça o **clone** deste repositório remoto em **sua máquina** e **instale** todas as **depêndencias** 
  através do **NPM ou YARN**, para executar o **Node e React Native** use o comando **npm start** isso fará
  com que ambos sejam executados, o Node executará na porta 3333 e o React Native na porta 19002 através 
  do expo. O **expo** disponibilizado duas maneiras de visualizar a aplicação, a primeira é através do app
  chamado [Expo] (https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR), onde ele 
  gera um QR Code e simula a aplicação com Live Reloading e a segunda forma é configurando o emulador
  do **Android Studio**.
  
  
# About the app
This application was created entirely in Javascript through **Node.js **, **React.js** and **React Native**. Its own purpose is   **register** and **connect** ONG's to People who can help in various purposes and cases involving donations

* **Back-End - Node.js and Jest.js:**
   The Node was used to create REST APIs that will register NGOs, People and Cases, having communication with Front-End and 
   Back-End through Axios. There is also the testing of some routes taken on the backend
   using Jest.js.

* **Front-End - React.js:**
   React was used to create reusable components for the web, its role and to render all the idealized layout based on
   the purpose of the application and make communication between the client and the server, in order to generate the 
   records in the SQLite relational database.

* **Mobile - React Native:**
   React Native was used to create reusable components on mobile devices.
   Expo was used to use the Android Studio simulator, with the purpose of also communicating
   with SQLite having pagination of cases through infinite scroll.

## How to run it
 ###### In the browser
   **Clone**  this remote repository on **your machine** and **install**  all  **dependencies** 
  through  **NPM or YARN** to **execute Node and React** use the command **npm start** this will make
  that the application is already open on your localhost.

 ###### On the smartphone
  **Clone** this remote repository on **your machine** and **install** all **dependencies**
  using **NPM or YARN**, to run **Node and React Native** use the **npm start** command this will do
  with both running, Node will run on port 3333 and React Native on port 19002 through
  of the expo. **expo** provided two ways to view the application, the first is through the app
  called [Expo] (https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR), where it
  generates a QR Code and simulates the application with Live Reloading and the second way is to configure the emulator
  **Android Studio**.
