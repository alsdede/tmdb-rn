import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    inputText: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    iconBarCodeStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                placeholder="Search a movie..."
                style={styles.inputText}
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

export default SearchBar;