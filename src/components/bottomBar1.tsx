import React from 'react';
import {Dimensions, Pressable, StyleSheet, View, Animated} from 'react-native';
import {CommunityLogo, HomeLogo, MirrorLogo} from '../assets';
const {width} = Dimensions.get('window');

interface Props {
  state?: any;
  descriptors?: any;
  navigation?: any;
}

const IconSelecter: any = {
  home: HomeLogo,
  community: CommunityLogo,
  mirror: MirrorLogo,
};

export const BottomTabBar1: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const Icon = IconSelecter[route.name];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable style={styles.button} key={route.name} onPress={onPress}>
            <Animated.View style={[styles.littleCircle]}>
              <Icon
                width={24}
                height={24}
                color={isFocused ? '#200E32' : '#A9A9A9'}
              />
            </Animated.View>
            <Animated.Text
              style={[
                styles.text,
                isFocused ? {color: '#200E32'} : {color: '#A9A9A9'},
              ]}>
              {route.name}
            </Animated.Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: width * 0.86,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: width * 0.07,
    marginRight: width * 0.07,
  },
  button: {
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  littleCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});
