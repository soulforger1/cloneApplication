import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {DownArrowLogo} from '../assets';
import {
  Card,
  CustomStatusBar,
  CustomSwitch,
  CustomSwitchSmall,
  LineCard,
} from '../components';
const {width, height} = Dimensions.get('window');

const data1: any = [
  {
    background:
      'https://miro.medium.com/max/5236/1*jNGdZPcjAINHhBERw_gwPA.jpeg',
    name: 'Figma - App Concept',
    device: 'Optimized for iPhone 11 Pro',
  },
  {
    background:
      'https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk',
    name: 'Twitter - App Concept',
    device: 'Optimized for iPhone 11 Pro',
  },
  {
    background:
      'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_unfurl-1.png',
    name: 'Slack - App Concept',
    device: 'Optimized for iPhone 11 Pro',
  },
  {
    background:
      'https://miro.medium.com/max/5236/1*jNGdZPcjAINHhBERw_gwPA.jpeg',
    name: 'Figma - App Concept',
    device: 'Optimized for iPhone 11 Pro',
  },
  {
    background:
      'https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk',
    name: 'Twitter - App Concept',
    device: 'Optimized for iPhone 11 Pro',
  },
  {
    background:
      'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_unfurl-1.png',
    name: 'Slack - App Concept',
    device: 'Optimized for iPhone 11 Pro',
  },
  {
    background:
      'https://miro.medium.com/max/5236/1*jNGdZPcjAINHhBERw_gwPA.jpeg',
    name: 'Figma - App Concept',
    device: 'Optimized for iPhone 11 Pro',
  },
  {
    background:
      'https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk',
    name: 'Twitter - App Concept',
    device: 'Optimized for iPhone 11 Pro',
  },
  {
    background:
      'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_unfurl-1.png',
    name: 'Slack - App Concept',
    device: 'Optimized for iPhone 11 Pro',
  },
];

export const Home1 = () => {
  const [isLeft, setIsLeft] = useState(true);
  const [isLined, setIsLined] = useState(true);

  return (
    <View style={styles.main}>
      <CustomStatusBar />
      <View style={styles.prototypeContainer}>
        <CustomSwitch isLeft={isLeft} setIsLeft={setIsLeft} />
        <View style={styles.textContainer}>
          <Text style={styles.proto}>Prototypes</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data1}
          renderItem={({item, index}) => (
            <Card
              background={item.background}
              name={item.name}
              device={item.device}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.itemSeparator}></View>
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
        />
      </View>
      <View style={styles.historyContainer}>
        <View style={styles.historyControl}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
              }}>
              Last Viewed
            </Text>
            <DownArrowLogo />
          </View>
          <CustomSwitchSmall isLined={isLined} setIsLined={setIsLined} />
        </View>
        <FlatList
          data={data1}
          renderItem={({item, index}) => (
            <LineCard
              background={item.background}
              name={item.name}
              device={item.device}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.lineItemSeparator}></View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  prototypeContainer: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 20,
  },
  textContainer: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 15,
  },
  seeAll: {
    fontSize: 18,
    fontWeight: '500',
  },
  proto: {
    fontSize: 24,
    fontWeight: '300',
  },
  itemSeparator: {
    width: 20,
  },
  lineItemSeparator: {
    height: 1,
    width: 270,
    backgroundColor: '#A9A9A9',
    opacity: 0.2,
    marginLeft: 70,
    marginVertical: 5,
  },
  historyContainer: {
    marginTop: 20,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  historyControl: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
});
