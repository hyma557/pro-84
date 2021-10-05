import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from './TabNavigator';
import Profiles from '../screens/Profiles'

const Drawer = createDrawerNavigator()

const DrawerNavigator =()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen
             name='Home' component={TabNavigator}
            />
             <Drawer.Screen
             name='Profile' component={ Profiles }
            />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;