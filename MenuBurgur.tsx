import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Composant pour chaque écran (page)
const Screen1 = () => (
  <View style={styles.container}>
    <Text>Page 1</Text>
  </View>
);

const Screen2 = () => (
  <View style={styles.container}>
    <Text>Page 2</Text>
  </View>
);

const Screen3 = () => (
  <View style={styles.container}>
    <Text>Page 3</Text>
  </View>
);

// Menu burger (Drawer)
const Drawer = createDrawerNavigator();

const MenuBurger = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Page 1" component={Screen1} />
      <Drawer.Screen name="Page 2" component={Screen2} />
      <Drawer.Screen name="Page 3" component={Screen3} />
    </Drawer.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuBurger;
