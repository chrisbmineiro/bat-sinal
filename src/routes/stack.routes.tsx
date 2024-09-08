import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Form from "../screens/Form";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
  return (
    <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{
            title: "Bat Sinal",
            headerTitleAlign: "center",
          }}
        />
        <Screen
          name="Form"
          component={Form}
          options={{
            title: "Bat Chamada",
            headerTitleAlign: "center",
          }}
        />
    </Navigator>
  );
};
