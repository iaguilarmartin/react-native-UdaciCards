import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Icon from './components/Icon';

import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';

function AppStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const MainNavigator = StackNavigator({
    Home: {
        screen: DeckList,
        navigationOptions: ({navigation}) => ({
            title: 'UdaciCards',
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('NewDeck')} style={{marginRight: 15}}>
                    <Icon name="add" />
                </TouchableOpacity>
            )
        })
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            title: 'New deck'
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AppStatusBar barStyle="dark-content" />
                <MainNavigator/>
            </View>
        );
    }
}
