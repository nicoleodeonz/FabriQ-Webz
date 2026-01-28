import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage'
import AddPage from './components/AddPage';
import CheckPage from './components/CheckPage';
import PayPage from './components/PayPage';
import PlaceOrder from './components/PlaceOrder';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="ProdDetails">
                <Stack.Screen  name="ProdDetails" component={ProductDetails}/>
                <Stack.Screen name="CartPage" component={CartPage}/>
                <Stack.Screen name="AddPage" component={AddPage}/>
                <Stack.Screen name="CheckPage" component={CheckPage}/>
                <Stack.Screen name="PayPage" component={PayPage}/>
                <Stack.Screen name="PlaceOrder" component={PlaceOrder}/>
        </Stack.Navigator>
        </NavigationContainer>
      );
     }