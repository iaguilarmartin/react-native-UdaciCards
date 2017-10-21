import { AsyncStorage } from 'react-native';
import Uuid from 'uuid-lib';

import initialData from './initialData';

const DECKS_DATA_KEY = 'UdaciCards:decksData';

export function getDecks() {
    return AsyncStorage.getItem(DECKS_DATA_KEY).then(data => {
        if (!data) {
            AsyncStorage.setItem(DECKS_DATA_KEY, JSON.stringify(initialData));
            return initialData;
        } else {
            return JSON.parse(data);
        }
    }).catch(err => {
        console.error('Error getting decks from AsyncStorage', err);
        return null;
    });
}

export function getDeck(id) {
    return AsyncStorage.getItem(DECKS_DATA_KEY).then(data => {
        const decks = JSON.parse(data) || {};
        return decks[id];
    }).catch(err => {
        console.error(`Error getting deck "${id}" from AsyncStorage`, err);
        return null;
    });
}

export function saveDeckTitle(title) {
    return AsyncStorage.getItem(DECKS_DATA_KEY).then(data => {
        const storedData = JSON.parse(data);

        const deckId = Uuid.raw();
        storedData[deckId] = {
            title,
            questions: []
        };

        return AsyncStorage.setItem(DECKS_DATA_KEY, JSON.stringify(storedData))
            .then(() => {
                return { key: deckId, title };
            })
    }).catch(err => {
        console.error('Error saving new deck into AsyncStorage', err);
        return null;
    });
}

export function addCardToDeck(id, card) {
    return AsyncStorage.getItem(DECKS_DATA_KEY).then(data => {
        const storedData = JSON.parse(data);

        storedData[id].questions.push(card);

        return AsyncStorage.setItem(DECKS_DATA_KEY, JSON.stringify(storedData));
    }).catch(err => {
        console.error('Error adding card into AsyncStorage', err);
        return null;
    });
}

