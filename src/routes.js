import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import SearchScreen from './screens/SearchScreen';
import MovieShowScreen from './screens/MovieShowScreen';
import HomeScreen from './screens/HomeScreen';
import COLORS from './constants/colors';

const defaultStackNavOptions = {
    headerTintColor: '#fff',
    headerBackTitleVisible: false,

    headerStyle: {
        backgroundColor: '#000',
    },
};

const Routes = createStackNavigator(
    {
        Movies: {
            screen: SearchScreen,

            navigationOptions: {
                title: 'Movies',
            },
        },
        MovieShow: {
            screen: MovieShowScreen,
            navigationOptions: {
                title: 'Movie Details',
            },
        },
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        MovieShow: {
            screen: MovieShowScreen,
            navigationOptions: {
                title: 'Movie Details',
            },
        },
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);
const MainNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return (
                        <MaterialIcons
                            name="home"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                },
            },
        },
        Search: {
            screen: Routes,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return (
                        <MaterialIcons
                            name="search"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                },
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: COLORS.textColor,
            style: {
                backgroundColor: '#000',
            },
        },
    }
);
export default createAppContainer(MainNavigator);
