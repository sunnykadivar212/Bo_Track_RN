import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuditReport from '../screens/AuditReport/AuditReport';
import OpenAudits from '../screens/OpenAudits/OpenAudits';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Custom Header */}
      <View style={styles.profileSection}>
        <View style={styles.CircleShapeView}>
          <Text style={{color: '#fff', fontSize: 25}}>{'S'}</Text>
        </View>
        <View style={styles.profileText}>
          <Text style={styles.nameText}>{'Sunny'}</Text>
          <Text style={styles.companyText}>{'Tntra- TESTING'}</Text>
        </View>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="OpenAudits" component={OpenAudits} />
      <Drawer.Screen name="AuditReport" component={AuditReport} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
  },
  CircleShapeView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3d5afe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 18,
    color: 'black',
    lineHeight: 20,
  },
  companyText: {
    fontSize: 16,
    color: '#b2b8b7',
    lineHeight: 20,
  },
});

export default DrawerNavigation;
