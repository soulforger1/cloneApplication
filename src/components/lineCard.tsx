import React from 'react';
import {Dimensions, StyleSheet, View, Image, Text} from 'react-native';
const {width} = Dimensions.get('window');

interface Props {
  background: string;
  name: string;
  device: string;
}

export const LineCard: React.FC<Props> = ({background, name, device}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: background}} style={styles.image} />
      <View style={{marginLeft: 20}}>
        <Text style={{fontSize: 17, fontWeight: '600', marginBottom: 5}}>
          {name}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#A9A9A9'}}>
          {device}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
