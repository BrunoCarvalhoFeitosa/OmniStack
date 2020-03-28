# Sobre o aplivativo
 Este aplicativo foi criado totalmente em Javascript através do **Node.js**, **React.js** e **React Native**.  Seu próprosito é **cadastrar** e **conectar** ONG's à Pessoas que possam ajudar em diversos propósitos e casos que envolvam doações

 * Back-End: Node.js
     O Node foi utilizado para a criação de API's REST que farão o cadastro de ONG's, Pessoas e Casos, tendo
     comunicação com o Front-End e Back-End através do Axios.

 * Front-End: React.js
     O React foi utilizado para a criação de componentes reutilizáveis para a web, seu papel e renderizar todo o
     layout idealizado com base no próposito do aplicativo e fazer comunicação entre o cliente e o servidor, a fim
     de gerar os registros no banco de dados relacional SQLite.

 * Mobile: React Native
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
