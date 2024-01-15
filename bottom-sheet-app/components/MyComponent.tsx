import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<BottomSheetComponentProps> = () => {
const [isVisible, setIsVisible] = useState(false);
const list = [
  { title: 'Premium App - $120' },
  { title: 'Extreme App - $250' },
  {
    title: 'Cancel',
    containerStyle: { backgroundColor: 'red' },
    titleStyle: { color: 'white' },
    onPress: () => setIsVisible(false),
  },
];

return (
  <SafeAreaProvider>
    <Button
      title="View Prices"
      onPress={() => setIsVisible(true)}
      buttonStyle={styles.button}
    />
    <Text style={styles.button}>Lukes App Store!</Text>
    <BottomSheet modalProps={{}} isVisible={isVisible}>
      {list.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={l.containerStyle}
          onPress={l.onPress}
        >
          <ListItem.Content>
            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  </SafeAreaProvider>
);
};

const styles = StyleSheet.create({
button: {
  margin: 50,
},
});

export default BottomSheetComponent;