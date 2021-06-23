import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Cadastro from "./src/screens/Cadastro";
import Chat from "./src/screens/Chat";
import Configuracoesdoidioma from "./src/screens/Configuracoesdoidioma";
import Faq from "./src/screens/Faq";
import Fotos from "./src/screens/Fotos";
import Login from "./src/screens/Login";
import Match from "./src/screens/Match";
import Paresencontrados from "./src/screens/Paresencontrados";
import Perfil from "./src/screens/Perfil";
import Untitled1 from "./src/screens/Untitled1";

const DrawerNavigation = createDrawerNavigator({
  Cadastro: Cadastro,
  Chat: Chat,
  Configuracoesdoidioma: Configuracoesdoidioma,
  Faq: Faq,
  Fotos: Fotos,
  Login: Login,
  Match: Match,
  Paresencontrados: Paresencontrados,
  Perfil: Perfil,
  Untitled1: Untitled1
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Cadastro: Cadastro,
    Chat: Chat,
    Configuracoesdoidioma: Configuracoesdoidioma,
    Faq: Faq,
    Fotos: Fotos,
    Login: Login,
    Match: Match,
    Paresencontrados: Paresencontrados,
    Perfil: Perfil,
    Untitled1: Untitled1
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "charmonman-regular": require("./src/assets/fonts/charmonman-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "clicker-script-regular": require("./src/assets/fonts/clicker-script-regular.ttf"),
      "georgia-regular": require("./src/assets/fonts/georgia-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
