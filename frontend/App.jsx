import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import RestaurantScreen from "./Screens/RestaurantScreen";
import AccountScreen from "./Screens/AccountScreen";
import CheckOutScreen from "./Screens/CheckOutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="CheckOut" component={CheckOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
