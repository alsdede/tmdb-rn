import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import useShow from '../hooks/useShow';
import PopularList from '../components/PopularList';
import TopRatedList from '../components/TopRatedList';
import UpcomingList from '../components/UpcomingList';

const HomeScreen = props => {
    const [movies, setMovies] = useState([]);
    const [loading, results, errorMessage, loadShowList] = useShow();
    useEffect(() => {
        loadShowList('popular');
        setMovies(results);
    }, []);

    return (
        <ScrollView style={styles.container2}>
            <View style={styles.container}>
                <UpcomingList title="Upcoming" navigation={props.navigation} />
                <PopularList title="Popular" navigation={props.navigation} />
                <TopRatedList title="Top Rated" navigation={props.navigation} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: '#000',
        color: '#fff',
    },
    container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 10,
        color: '#fff',
    },
});
export default HomeScreen;
