import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import api, { getImage } from '../services/api';
import { API_KEY } from '../constants';
import { screen } from '../utils/sizes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    infoDetails: {
        justifyContent: 'center',
    },
});

const MovieShowScreen = ({ navigation }) => {
    const movieId = navigation.getParam('id');

    // console.log(movieId);
    const [details, setDetails] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const [poster, setPoster] = useState(['']);

    const loadDetails = async (lang = 'en-US') => {
        try {
            const response = await api.get(
                `/movie/${movieId}?api_key=${API_KEY}&language=${lang}`
            );
            setDetails(response.data);
        } catch (err) {
            setErrorMessage('Something Wrongs');
        }
    };
    useEffect(() => {
        loadDetails(movieId);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    resizeMode="cover"
                    style={{
                        height: screen.height * 0.3,
                        width: screen.width,
                    }}
                    source={{ uri: getImage(details.poster_path, 342) }}
                />
                <Text styles={{ fontSize: screen.height * 0.5 }}>
                    {details.title}
                </Text>
            </View>
            <View style={styles.infoDetails} />
            <Text styles={{ fontSize: 30, color: 'red' }}>teste</Text>
            <Text>teste</Text>
            <Text>teste</Text>
            <Text>teste</Text>
            <Text>teste</Text>
        </View>
    );
};

export default MovieShowScreen;
