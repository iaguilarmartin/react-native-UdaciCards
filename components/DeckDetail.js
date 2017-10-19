import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDeck } from '../utils/api';
import defaultStyles from '../utils/styles';

class DeckDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title
        };
    };

    state = {
        deck: null
    };

    componentWillMount() {
        const { deckId } = this.props.navigation.state.params;

        getDeck(deckId).then(deck => this.setState({deck}));
    }



    render() {
        const { deck } = this.state;

        if (!deck) {
            return (<Text>Deck not found</Text>);
        }

        return (
            <View style={styles.container}>
                <View style={styles.textsContainer}>
                    <Text style={styles.title}>{this.state.deck.title}</Text>
                    <Text style={styles.subtitle}>{this.state.deck.questions.length} cards</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[defaultStyles.button, defaultStyles.invertedButton, {marginBottom: 15}]}>
                        <View style={styles.buttonView}>
                            <Text style={[defaultStyles.buttonText, defaultStyles.invertedButtonText]}>Add Card</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={defaultStyles.button}>
                        <View style={styles.buttonView}>
                            <Text style={defaultStyles.buttonText}>Start Quiz</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        marginBottom: 25
    },
    buttonView: {
        width: 150,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    subtitle: {
        color: 'grey',
        fontSize: 20
    }
});

export default DeckDetail;