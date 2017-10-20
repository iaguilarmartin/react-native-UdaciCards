import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Icon from './components/Icon';

import colors from './utils/colors';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import DeckDetail from './components/DeckDetail';
import AddCard from './components/AddCard';

function AppStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const headerStyleNavigationOptions = {
    headerTintColor: colors.light,
    headerStyle: {
        backgroundColor: colors.accent,
    }
};

const MainNavigator = StackNavigator({
    Home: {
        screen: DeckList,
        navigationOptions: ({navigation}) => ({
            title: 'UdaciCards',
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('NewDeck')} style={{marginRight: 15}}>
                    <Icon name="add" color={colors.light} />
                </TouchableOpacity>
            ),
            ...headerStyleNavigationOptions
        })
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            title: 'New deck',
            ...headerStyleNavigationOptions
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: 'Add Card',
            ...headerStyleNavigationOptions
        }
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            ...headerStyleNavigationOptions
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AppStatusBar barStyle="light-content" backgroundColor={colors.accent} />
                <MainNavigator/>
            </View>
        );
    }
}
