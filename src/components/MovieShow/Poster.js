import React, { useRef } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native-gesture-handler';

import ReadMore from 'react-native-read-more-text';
import { getImage } from '../../services/api';
import { screen } from '../../utils/sizes';
import { fontSizeResponsive } from '../../utils/dimensions';

const renderReadMoreFooter = (text, handlePress) => (
    <TouchableOpacity onPress={handlePress}>
        <Text style={{ color: 'red' }}>{text}</Text>
    </TouchableOpacity>
);
const Poster = ({ movies, style }) => {
    //  const [posterImage, setPosterImage] = useState();
    const imageRef = useRef();
    const fadeIn = {
        from: {
            opacity: 0,
            scale: 0.5,
        },
        to: {
            opacity: 1,
            scale: 1,
        },
    };

    function handlePress() {
        if (this.ref && this.props.onPress) {
            props.onPress(this.ref, this.props.animationType);
        }
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={handlePress}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: screen.height / 3.5,
                        width: screen.width - 40 * 2,
                        backgroundColor: 'white',
                        padding: 10,

                        top: 10,
                        borderRadius: 10,
                    }}
                >
                    <Animatable.View animation={fadeIn} duration={4000}>
                        <View style={styles.ratingContainer} />
                        <Text
                            numberOfLines={2}
                            style={{
                                top: screen.height * 0,
                                fontSize: fontSizeResponsive(3, 1),
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                margin: 5,
                                justifyContent: 'center',
                            }}
                        >
                            {movies.title}
                        </Text>
                        <View style={styles.containerReadmore}>
                            <Text
                                style={{
                                    fontSize: fontSizeResponsive(2, 1),
                                    fontWeight: 'bold',
                                    marginBottom: 5,
                                }}
                            >
                                Synopsis
                            </Text>
                            <ScrollView>
                                <ReadMore
                                    numberOfLines={1}
                                    renderTruncatedFooter={handlePress =>
                                        renderReadMoreFooter(
                                            'Read more',
                                            handlePress
                                        )
                                    }
                                    renderRevealedFooter={handlePress =>
                                        renderReadMoreFooter(
                                            'Read less',
                                            handlePress
                                        )
                                    }
                                >
                                    <Text style={{ fontSize: 14 }}>
                                        {movies.overview}
                                    </Text>
                                </ReadMore>
                            </ScrollView>
                        </View>
                    </Animatable.View>
                </View>
                <Animatable.Image
                    ref={imageRef}
                    animation={fadeIn}
                    duration={4000}
                    source={{
                        uri: getImage(movies.poster_path, 342),
                    }}
                    style={{
                        top: 10,
                        flex: 1,
                        position: 'absolute',

                        height: (screen.width / 16) * 10,
                        width: (screen.height / 6.5) * 2,
                        borderRadius: 15,
                    }}
                ></Animatable.Image>
            </TouchableWithoutFeedback>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,

        elevation: 5,
        height: '100%',
        width: '100 %',
    },
    containerReadmore: {
        marginHorizontal: 5,
        flex: 1,
    },
    ratingContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Poster;
