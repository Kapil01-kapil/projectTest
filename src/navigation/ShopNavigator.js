import React from 'react';

import {Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserProductsScreen from '../screens/UserProductsScreen';
import EditProductScreen from '../screens/EditProductScreen';

const AdminStack = createStackNavigator();
function AdminNavigator() {
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen name="UserProducts" component={UserProductsScreen} />
      <AdminStack.Screen name="EditProduct" component={EditProductScreen} />
    </AdminStack.Navigator>
  );
}

const ShopNavigatorStark = createDrawerNavigator();
function ShopNavigator() {
  return (
    <NavigationContainer>
      <ShopNavigatorStark.Navigator>
        <ShopNavigatorStark.Screen name="Admin" component={AdminNavigator} />
      </ShopNavigatorStark.Navigator>
    </NavigationContainer>
  );
}
export default ShopNavigator;
