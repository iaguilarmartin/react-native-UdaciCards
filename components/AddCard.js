import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, DeviceEventEmitter } from 'react-native';
import { NavigationActions } from 'react-navigation';
import defaultStyles from '../utils/styles';
import { addCardToDeck } from '../utils/api';
import Button from './Button';

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    };

    createCard = () => {
        const { question, answer } = this.state;
        const { navigation } = this.props;
        const { deckId } = navigation.state.params;

        addCardToDeck(deckId, {question, answer})
            .then(() => {
                DeviceEventEmitter.emit('onDataChangedEvent',  {});
                navigation.dispatch(NavigationActions.back());
            });
    };

    render() {
        const { question, answer } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Enter the information required for the new card</Text>
                <Text style={styles.label}>Question</Text>
                <TextInput value={question} onChangeText={text => this.setState({question: text})} autoFocus={true} style={[defaultStyles.inputText, styles.stretched]} />
                <Text style={styles.label}>Answer</Text>
                <TextInput value={answer} onChangeText={text => this.setState({answer: text})} style={[defaultStyles.inputText, styles.stretched]} />
                <Button text="Create card" disabled={question.length === 0 || answer.length === 0} onPress={this.createCard}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center'
    },
    title: {
        marginBottom: 40,
        fontSize: 25,
        textAlign: 'center'
    },
    label: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        fontSize: 16,
        paddingLeft: 5
    },
    stretched: {
        alignSelf: 'stretch',
        marginBottom: 30
    }
});

export default AddCard;