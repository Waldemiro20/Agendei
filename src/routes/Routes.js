import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { ClinicSearchFocusProvider } from "../context/ClinicSearchFocusContext";
import Loading from "../views/Loading";
import Login from "../views/Login";
import Home from "../views/Home";
import DadosServicos from "../views/DadosServicos";
import Estabelecimento from "../views/Estabelecimento";
import Agendamentos from "../views/Agendamentos";
import Calendar from "../views/Calendar"
import DadosUser from "../views/DadosUser";

const Stack = createNativeStackNavigator();

// Mantém o conteúdo fora do notch / Dynamic Island e da barra inferior do iPhone
function ScreenLayout({ route, children }) {
  const backgroundColor = route.name === "Loading" ? "#5CC6BA" : "#fff";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }} edges={["top", "bottom"]}>
      {children}
    </SafeAreaView>
  );
}

export default function Routes() {
  return (
    <ClinicSearchFocusProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loading"
          screenOptions={{ headerShown: false }}
          screenLayout={ScreenLayout}
        >
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DadosServicos" component={DadosServicos} />
          <Stack.Screen name="Estabelecimento" component={Estabelecimento} />
          <Stack.Screen name="Agendamentos" component={Agendamentos} />
          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen name="DadosUser" component={DadosUser} />


        </Stack.Navigator>
      </NavigationContainer>
    </ClinicSearchFocusProvider>
  );
}
