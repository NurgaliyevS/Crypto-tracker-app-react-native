import React from "react";

import { View, StyleSheet, Image } from "react-native";

import styled from "styled-components/native";

const TextDefault = styled.Text`
  color: white;
`;

export function Record({ source, title, desiredPrice, currentPrice }) {
  return (
    <View style={[style.container]}>
      <View style={crypto.container}>
        <Image source={source} style={crypto.image} />
      </View>
      <TextDefault style={[crypto.text, crypto.title]}>{title}</TextDefault>
      <TextDefault style={[crypto.text, crypto.price]}>{desiredPrice}</TextDefault>
      <TextDefault style={[crypto.text, crypto.price]}>{currentPrice}</TextDefault>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "#000000",
    marginLeft: 30,
    marginRight: 30,
  },
});

const crypto = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  container: {
    width: 50,
    height: 70,
    aspectRatio: 1 * 1.4,
  },
  text: {
    paddingTop: 15,
    flex: 1,
    flexWrap: 'wrap'
  },
  title: {
    paddingLeft: 15,
    textAlign: 'left'
  },   
  price: {
    textAlign: 'right',
  }
});
