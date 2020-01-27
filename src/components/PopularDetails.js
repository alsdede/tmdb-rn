import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ImageMovie from './ImageMovie';

const PopularDetails = ({ movie }) => {
    return (
        <View>
            <ImageMovie movie={movie} />
        </View>
    );
};

const styles = StyleSheet.create({});
export default PopularDetails;
