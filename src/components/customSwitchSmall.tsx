import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CategoryLogo, LinedCategoryLogo} from '../assets';
const {width} = Dimensions.get('window');

interface Props {
  isLined: boolean;
  setIsLined: any;
}

export const CustomSwitchSmall: React.FC<Props> = ({isLined, setIsLined}) => {
  const index = useRef(new Animated.Value(0)).current;
  const translateX = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width * 0.07],
  });

  useEffect(() => {
    if (isLined) {
      Animated.timing(index, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(index, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isLined]);

  return (
    <View style={styles.container}>
      <Pressable style={{zIndex: 2}} onPress={() => setIsLined(false)}>
        <View style={styles.subContainer}>
          <CategoryLogo
            height={17}
            width={17}
            color={isLined ? '#200E32' : '#1E90FF'}
          />
        </View>
      </Pressable>
      <Pressable style={{zIndex: 2}} onPress={() => setIsLined(true)}>
        <View style={styles.subContainer}>
          <LinedCategoryLogo
            height={17}
            width={17}
            color={isLined ? '#1E90FF' : '#200E32'}
          />
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
    height: 32,
    backgroundColor: '#DCDCDC',
    width: width * 0.14,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
  },
  subContainer: {
    width: width * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
  movingContainer: {
    width: width * 0.055,
    height: 24,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    zIndex: 1,
    left: 3.5,
  },
});
