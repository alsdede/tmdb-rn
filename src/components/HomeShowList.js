import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeShowList = ({ title }) => {
    //  const { results: data } = results || {};

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
export default HomeShowList;
