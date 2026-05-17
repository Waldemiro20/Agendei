import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

export default function Routes() {
  return (
    <ClinicSearchFocusProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loading"
          screenOptions={{ headerShown: false }}
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