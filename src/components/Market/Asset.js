import { View, StyleSheet, Image } from "react-native";

import styled from "styled-components/native";

export function Asset({ source, title, price, percentage, isPositive }) {
  return (
    <View style={asset.container}>
      <View style={asset.first}>
        <View style={crypto.container}>
          <Image source={source} style={crypto.icon} />
          <TextDefault style={crypto.title}>{title}</TextDefault>
        </View>
      </View>
      <View style={asset.second}>
        <TextPrice style={[asset.title, crypto.title]}>{price}</TextPrice>
        <TextPrice style={[asset.percentageText, isPositive === true ? asset.percentageUp : asset.percentageDown]}>{percentage}</TextPrice>
      </View>
    </View>
  );
}

const asset = StyleSheet.create({
  title: {
    fontSize: 15,
  },
  first: {
    flex: 1,
  },
  second: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  percentageDown: {
    color: 'red'
  },
  percentageUp: {
    color: 'green'
  },
  percentageText: {
    fontSize: 13
  }
});

const crypto = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 35,
    marginTop: 20,
    width: '22%',
    backgroundColor: 'black',
  },
  title: {
    paddingLeft: 10,
    paddingTop: 30,
    fontSize: 14,
  },
});

const TextPrice = styled.Text`
  color: white;
  text-align: right;
`;

const TextDefault = styled.Text`
  color: white;
`;