import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useMovies from '../hooks/useMovies';
import MoviesList from '../components/MoviesList';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
    titleStyle: {
        marginLeft: 10,
        marginBottom: 5,
    },
});

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [searchApi, movies, errorMessage] = useMovies();
    return (
        <View style={styles.container}>
            <SearchBar
                term={query}
                onTermChange={setQuery}
                onTermSubmit={() => searchApi(query)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text style={styles.titleStyle}>Films founds: {movies.length}</Text>
            <MoviesList movies={movies} />
            <ScrollView />
        </View>
    );
};

export default SearchScreen;
