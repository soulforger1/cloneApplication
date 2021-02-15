import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {DownArrowLogo, FigmaLogo, SearchLogo} from '../assets/';
const {width} = Dimensions.get('window');

export const CustomStatusBar = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FigmaLogo height={60} width={60} />
        <View style={styles.line}></View>
        <Text style={styles.title}>Files</Text>
        <View style={{marginLeft: 2, marginTop: 7}}>
          <DownArrowLogo color="white" width={24} height={24} />
        </View>
      </View>
      <View style={styles.circle}>
        <SearchLogo width={20} height={20} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 120,
    backgroundColor: '#262626',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
  },
  line: {
    height: 15,
    width: 1,
    backgroundColor: '#A9A9A9',
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 16,
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: '#404040',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
});
