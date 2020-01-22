import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useMovies from '../hooks/useMovies';
// import MoviesList from '../components/MoviesList';

const styles = StyleSheet.create({
    titleStyle: {
        marginLeft: 10,
        marginBottom: 5,
    },
});

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [searchApi, movies, errorMessage] = useMovies();
    return (
        <>
            <SearchBar
                term={query}
                onTermChange={setQuery}
                onTermSubmit={() => searchApi(query)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text style={styles.titleStyle}>Films founds: {movies.length}</Text>
            {/* <MoviesList movies={movies} title="Filmes" /> */}
            <ScrollView />
        </>
    );
};

export default SearchScreen;
