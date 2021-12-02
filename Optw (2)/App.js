import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Login from "./src/screens/Login";
import Searchduo from "./src/screens/Searchduo";
import Configdeidioma from "./src/screens/Configdeidioma";
import Chatduo from "./src/screens/Chatduo";
import Sincronizacao from "./src/screens/Sincronizacao";
import Perfil from "./src/screens/Perfil";
import Hyperlink from "./src/screens/Hyperlink";
import Paginadeapostas from "./src/screens/Paginadeapostas";
import Suporte from "./src/screens/Suporte";
import Cadastro from "./src/screens/Cadastro";

const DrawerNavigation = createDrawerNavigator({
  Login: Login,
  Searchduo: Searchduo,
  Configdeidioma: Configdeidioma,
  Chatduo: Chatduo,
  Sincronizacao: Sincronizacao,
  Perfil: Perfil,
  Hyperlink: Hyperlink,
  Paginadeapostas: Paginadeapostas,
  Suporte: Suporte,
  Cadastro: Cadastro
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Login: Login,
    Searchduo: Searchduo,
    Configdeidioma: Configdeidioma,
    Chatduo: Chatduo,
    Sincronizacao: Sincronizacao,
    Perfil: Perfil,
    Hyperlink: Hyperlink,
    Paginadeapostas: Paginadeapostas,
    Suporte: Suporte,
    Cadastro: Cadastro
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
      "roboto-italic": require("./src/assets/fonts/roboto-italic.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "comic-sans-ms-regular": require("./src/assets/fonts/comic-sans-ms-regular.ttf")
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
