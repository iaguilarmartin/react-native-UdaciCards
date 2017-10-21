import React, {Component} from 'react';
import { TextInput, Text, TouchableOpacity, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation'
import defaultStyles from '../utils/styles';
import { saveDeckTitle } from '../utils/api';

class NewDeck extends Component {
    state = {
        title: ''
    };

    createDeck = () => {
        saveDeckTitle(this.state.title)
            .then(deck => {
                //DeviceEventEmitter.emit('onDataChangedEvent',  {});
                //this.props.navigation.dispatch(NavigationActions.back());

                const resetAction = NavigationActions.reset({
                    index: 1,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' }),
                        NavigationActions.navigate({ routeName: 'DeckDetail', params: {deckId: deck.key, title: deck.title}})
                    ]
                });

                this.props.navigation.dispatch(resetAction);
            });
    };

    render() {
        const { title } = this.state;

        return (
            <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={[styles.title, {marginBottom: 30}]}>What is the title of your new deck?</Text>
                    <TextInput value={title} onChangeText={text => this.setState({title: text})} autoFocus={true} style={[defaultStyles.inputText, {alignSelf: 'stretch', marginBottom: 30}]} />
                    <TouchableOpacity onPress={this.createDeck} disabled={title.length <= 0} style={[defaultStyles.button, (title.length <= 0 && defaultStyles.disabledButton)]}>
                        <Text style={defaultStyles.buttonText}>Create deck</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       padding: 30,
       alignItems: 'center',
       justifyContent: 'center'
   },
    title: {
        fontSize: 35,
        textAlign: 'center'
    }
});

export default NewDeck;