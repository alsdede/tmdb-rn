import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const MovieShowScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MOVIE SHOW SCREEN</Text>
        </View>
    );
};

export default MovieShowScreen;
