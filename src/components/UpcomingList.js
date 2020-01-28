import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import HomeDetails from './HomeDetails';
import useShow from '../hooks/useShow';

const UpcomingList = props => {
    const [movies, setMovies] = useState([]);
    const [loading, results, errorMessage, loadShowList] = useShow();
    useEffect(() => {
        loadShowList('upcoming');
        setMovies(results);
    }, []);

    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={movie => movie.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                props.navigation.navigate('MovieShow', {
                                    id: item.id,
                                })
                            }
                        >
                            <HomeDetails movie={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default UpcomingList;
