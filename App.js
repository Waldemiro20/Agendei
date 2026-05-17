import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes/Routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}