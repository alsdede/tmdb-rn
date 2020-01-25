import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

const PresetMovie = ({ isVisible, onClose }) => {
    const [visible, setVisible] = useState(false);
    return (
        <Modal
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
            isVisible={isVisible}
            onClose={onClose}
        >
            <View>
                <Text>Teste Modal</Text>
                <Button title="Reade more" />
                <Button title="Close" onPress={onClose} />
            </View>
        </Modal>
    );
};

export default PresetMovie;
