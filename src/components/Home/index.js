import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Home() {
  return (
    <View style={style.container}>
      <View style={[title.titleContainer, title.titlePosition]}>
        <Text style={[style.textCommon, title.titleText]}>Your watchlist</Text>
        <Text style={[style.textCommon, title.titleText]}>60, 502, 95 USD</Text>
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
  table: {
    flex: 1,
    flexDirection: 'row',
  },
});
