import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Home() {
  return (
    <View style={style.container}>
      <View style={[title.titleContainer, title.titlePosition]}>
        <Text style={[style.textCommon, title.titleText]}>Your watchlist</Text>
        <Text style={[style.textCommon, title.titleText]}>60, 502, 95 USD</Text>
      </View>

      <View style={records.container}>
        <View style={records.green}>
          <Text style={{ color: 'white' }}>Your records</Text>
        </View>

        <View style={records.white}>
          <Text style={{ color: 'white' }}>Desired / </Text>
        </View>

        <View style={records.yellow}>
          <Text style={{ color: 'white' }}>Current price</Text>
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
  textCommon: {
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
  titleText: {
    fontSize: 20,
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
    flex: 2,
    // backgroundColor: 'green',
  },
  white: {
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor: 'white',
  },
  yellow: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
});
