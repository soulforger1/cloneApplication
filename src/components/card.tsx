import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

interface Props {
  background: string;
  name: string;
  device: string;
}

export const Card: React.FC<Props> = ({background, name, device}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: background,
        }}
        style={styles.background}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label1}>{name}</Text>
        <Text style={styles.label2}>{device}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 210,
    borderRadius: 20,
  },
  background: {
    width: 260,
    height: 145,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  labelContainer: {
    width: 260,
    height: 65,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  label1: {
    fontSize: 17,
    fontWeight: '600',
  },
  label2: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '400',
    color: '#A9A9A9',
  },
});
