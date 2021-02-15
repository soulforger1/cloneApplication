import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const {width} = Dimensions.get('window');

interface Props {
  isLeft: boolean;
  setIsLeft: any;
}

export const CustomSwitch: React.FC<Props> = ({isLeft, setIsLeft}) => {
  const index = useRef(new Animated.Value(0)).current;
  const translateX = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width * 0.45],
  });

  useEffect(() => {
    if (isLeft) {
      Animated.timing(index, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(index, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isLeft]);

  return (
    <View style={styles.container}>
      <Pressable style={{zIndex: 2}} onPress={() => setIsLeft(true)}>
        <View style={styles.subContainer}>
          <Text style={[styles.text, {fontWeight: isLeft ? '600' : '500'}]}>
            Recent
          </Text>
        </View>
      </Pressable>
      <Pressable style={{zIndex: 2}} onPress={() => setIsLeft(false)}>
        <View style={styles.subContainer}>
          <Text style={[styles.text, {fontWeight: isLeft ? '500' : '600'}]}>
            Draft
          </Text>
        </View>
      </Pressable>
      <Animated.View
        style={[
          styles.movingContainer,
          {transform: [{translateX}]},
        ]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#DCDCDC',
    width: width * 0.9,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
  },
  subContainer: {
    width: width * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
  movingContainer: {
    width: width * 0.43,
    height: 32,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    zIndex: 1,
    left: 5,
  },
});
