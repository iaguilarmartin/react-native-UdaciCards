import React, {Component} from 'react';
import { TextInput, Text, TouchableOpacity, StyleSheet, View, DeviceEventEmitter } from 'react-native';
import { NavigationActions } from 'react-navigation'
import defaultStyles from '../utils/styles';
import { saveDeckTitle } from '../utils/api';

class NewDeck extends Component {
    state = {
        title: ''
    };

    createDeck = () => {
        saveDeckTitle(this.state.title)
            .then(() => {
                DeviceEventEmitter.emit('refreshDeckList',  {});
                this.props.navigation.dispatch(NavigationActions.back())
            });
    };

    render() {
        const { title } = this.state;

        return (
            <View style={styles.container}>
                <Text style={[styles.title, {marginBottom: 30}]}>What is the title of your new deck?</Text>
                <TextInput value={title} onChangeText={text => this.setState({title: text})} autoFocus={true} style={[defaultStyles.inputText, {alignSelf: 'stretch', marginBottom: 30}]} />
                <TouchableOpacity onPress={this.createDeck} disabled={title.length <= 0} style={[defaultStyles.button, (title.length <= 0 && defaultStyles.disabledButton)]}>
                    <Text style={defaultStyles.buttonText}>Create deck</Text>
                </TouchableOpacity>
            </View>
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