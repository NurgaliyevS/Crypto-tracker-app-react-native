import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import styled from 'styled-components/native';

const bitcoinImage = require('../../../assets/bitcoin.jpg');
const ethereumImage = require('../../../assets/ethereum.jpg');
const polygonImage = require('../../../assets/polygon.jpg');
const tetherImage = require('../../../assets/tether.jpg');

const TextDefault = styled.Text`
  color: white;
`;

const TextPrice = styled.Text`
  color:white;
  text-align: right
`;

function Home() {
  return (
    <View style={style.container}>
      <View style={[title.titleContainer, title.titlePosition]}>
        <TextDefault style={[style.TextDefaultCommon, title.titleTextDefault]}>
          Your watchlist
        </TextDefault>
        <TextDefault
          style={[
            style.TextDefaultCommon,
            title.titleTextDefault,
            title.titleMoneyTextDefault,
          ]}
        >
          60, 502, 95 USD
        </TextDefault>
      </View>

      <View style={records.container}>
        <View style={records.green}>
          <TextDefault style={{ fontSize: 15 }}>Your records</TextDefault>

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={bitcoinImage}
              style={{
                width: 40,
                height: 40,
                marginTop: 20,
                backgroundColor: 'black',
              }}
            />
            <TextDefault
              style={{
                paddingLeft: 10,
                paddingTop: 30,
                fontSize: 14,
              }}
            >
              Bitcoin
            </TextDefault>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={ethereumImage}
              style={{
                width: 40,
                height: 70,
                marginTop: 20,
                backgroundColor: 'black',
              }}
            />
            <TextDefault
              style={{
                paddingLeft: 10,
                paddingTop: 50,
                fontSize: 14,
              }}
            >
              Ethereum
            </TextDefault>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={polygonImage}
              style={{
                width: 40,
                height: 40,
                marginTop: 20,
                backgroundColor: 'black',
              }}
            />
            <TextDefault
              style={{
                paddingLeft: 10,
                paddingTop: 30,
                fontSize: 14,
              }}
            >
              Polygon
            </TextDefault>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={tetherImage}
              style={{
                width: 40,
                height: 40,
                marginTop: 20,
                backgroundColor: 'black',
              }}
            />
            <TextDefault
              style={{
                paddingLeft: 10,
                paddingTop: 30,
                fontSize: 14,
              }}
            >
              Tether
            </TextDefault>
          </View>
        </View>

        <View style={records.white}>
          <TextPrice style={{ fontSize: 15 }}>Desired </TextPrice>
          <TextPrice style={{ paddingTop: 30 }}>550020 $</TextPrice>
          <TextPrice style={{ paddingTop: 65 }}>550020 $</TextPrice>
          <TextPrice style={{ paddingTop: 55 }}>2 $</TextPrice>
          <TextPrice style={{ paddingTop: 40 }}>0.95 $</TextPrice>
        </View>

        <View style={records.yellow}>
          <TextPrice style={{ fontSize: 15 }}>Current price</TextPrice>
          <TextPrice style={{ paddingTop: 30 }}>39,432 $</TextPrice>
          <TextPrice style={{ paddingTop: 65 }}>2,852.93 $</TextPrice>
          <TextPrice style={{ paddingTop: 55 }}>0.9 $</TextPrice>
          <TextPrice style={{ paddingTop: 40 }}>1 $</TextPrice>
        </View>
      </View>
    </View>
  );
}

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  TextDefaultCommon: {
    color: '#FFFFFF',
  },
});

const title = StyleSheet.create({
  titleContainer: {
    flex: 0.12,
    backgroundColor: '#514B4B',
  },
  titlePosition: {
    paddingTop: 25,
    paddingLeft: 30,
  },
  titleTextDefault: {
    fontSize: 15,
  },
  titleMoneyTextDefault: {
    paddingTop: 10,
  },
});

const records = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  green: {
    flex: 1.5,
    // backgroundColor: 'green',
  },
  white: {
    flex: 1,
    // alignItems: 'flex-end',
    // backgroundColor: 'white'
  },
  yellow: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
});
