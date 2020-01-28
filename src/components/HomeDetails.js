import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageMovie from './ImageMovie';

const HomeDetails = ({ movie }) => {
    return (
        <View style={styles.containerImage}>
            <ImageMovie movie={movie} />
        </View>
    );
};

const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginLeft: 10,
        marginBottom: 20,
    },
});
export default HomeDetails;
