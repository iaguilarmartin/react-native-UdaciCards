import React, { Component } from 'react';
import { FlatList, Text, DeviceEventEmitter } from 'react-native';

import { getDecks } from '../utils/api';
import Deck from './Deck';

class DeckList extends Component {
    state = {
        decks: null
    };

    componentWillMount() {
        DeviceEventEmitter.addListener('refreshDeckList', this.loadDecks);
    }

    componentDidMount() {
        this.loadDecks();
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeListener('refreshDeckList');
    }

    loadDecks = () => getDecks().then(data => this.setState({decks: data}));

    render() {
        const { decks } = this.state;

        if (!decks) {
            return (<Text>There is no deck</Text>);
        }

        const data = Object.keys(decks).map(keyId => {
            return {
                ...decks[keyId],
                key: keyId
            }
        });

        return (
            <FlatList style={{flex: 1}}
                      data={data}
                      renderItem={({item}) => (<Deck onPressItem={pi => console.log(pi)} item={item}/>)}
            />
        )
    }
}

export default DeckList;