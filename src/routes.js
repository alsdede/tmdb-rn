import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './screens/SearchScreen';
import MovieShowScreen from './screens/MovieShowScreen';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Movies: {
                screen: SearchScreen,
                navigationOptions: {
                    title: 'Movies',
                },
            },
            MovieDetail: {
                screen: MovieShowScreen,
                navigationOptions: {
                    title: 'Movies',
                },
            },
        },
        {
            defaultNavigationOptions: {
                headerTintColor: '#FFF',
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: '#0a0a0a',
                },
            },
        }
    )
);

export default Routes;
