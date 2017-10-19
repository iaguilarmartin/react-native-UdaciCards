import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';

const Deck = function ({item, onPressItem}) {
    const deckPressed = () => {
        onPressItem && onPressItem(item);
    };

    return (
        <TouchableHighlight style={styles.deck} onPress={deckPressed} underlayColor="#aaa">
            <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.questions.length} cards</Text>
            </View>
        </TouchableHighlight>
    )
};


const styles = StyleSheet.create({
    deck: {
        alignItems: 'center',
        padding: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        backgroundColor: 'white'
    },
    container: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    subtitle: {
        color: 'grey',
        fontSize: 16
    }
});

Deck.propTypes = {
    item: PropTypes.object.isRequired,
    onPressItem: PropTypes.func
};

export default Deck;

