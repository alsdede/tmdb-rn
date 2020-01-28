import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import api, { getImage } from '../services/api';
import { API_KEY, GENRES } from '../constants';
import { screen } from '../utils/sizes';
import COLORS from '../constants/colors';
import { convertTime } from '../utils/time';
import { convertDate } from '../utils/date';

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
    console.log(details);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerImage}>
                    <Image
                        blurRadius={4}
                        resizeMode="cover"
                        style={{
                            height: '100%',
                            width: '100%',
                            opacity: 0.8,
                        }}
                        source={{ uri: getImage(details.poster_path, 342) }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,

                        zIndex: 2,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <View style={styles.containerInfo}>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={styles.titleDetail} numberOfLines={2}>
                                {details.title}
                            </Text>
                        </View>
                        <View style={styles.containerPreviewDetail}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <MaterialIcons
                                    name="star"
                                    size={50}
                                    color="gold"
                                />
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontSize: 35,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {details.vote_average}
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text
                                    style={{
                                        color: COLORS.textColor,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Release Date
                                </Text>
                                <Text
                                    style={{
                                        color: '#f0f0f0',
                                    }}
                                >
                                    {convertDate(details.release_date)}
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text
                                    style={{
                                        color: COLORS.textColor,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Runtime
                                </Text>
                                <Text
                                    style={{
                                        color: '#f0f0f0',
                                    }}
                                >
                                    {convertTime(details.runtime)}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.overview}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#fff',
                                marginBottom: 10,
                                textShadowColor: 'rgba(255, 255,255, 0.5)',
                                textShadowOffset: { width: -0.5, height: 0.5 },
                                textShadowRadius: 5,
                            }}
                        >
                            Synopse
                        </Text>
                        <Text style={{ color: '#EEE9E9' }}>
                            {details.overview}
                        </Text>
                    </View>
                </View>
                <View />
                <View
                    style={{
                        height: 250,
                        width: 180,
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',

                        top: 30,
                        right: 30,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 1,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 2,
                    }}
                >
                    <Image
                        resizeMode="cover"
                        style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: 10,
                        }}
                        source={{ uri: getImage(details.poster_path, 342) }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191919',
    },
    containerImage: {
        height: 350,
        width: screen.width,
    },
    containerInfo: { flex: 1, justifyContent: 'center' },
    titleDetail: {
        marginLeft: 10,
        top: -25,
        flex: 1,

        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },
    average: {
        zIndex: 1,
        flexDirection: 'row',
    },
    overview: {
        padding: 10,
        flex: 1,
        backgroundColor: 'rgba(70,130,180,0.03)',
    },
    posterText: {
        backgroundColor: '#141B31',
        color: '#FFF',
        paddingHorizontal: 5,
        marginBottom: 3,
        opacity: 0.9,
    },
    containerPreviewDetail: {
        top: -5,

        backgroundColor: 'rgba(70,130,180,0.03)',
        shadowColor: '#a0a0a0',
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
});
export default MovieShowScreen;
