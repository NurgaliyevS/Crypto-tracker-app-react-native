import { View, StyleSheet, Image } from "react-native";

import styled from "styled-components/native";

const TextDefault = styled.Text`
  color: white;
`;

const TextPrice = styled.Text`
  color: white;
  text-align: right;
`;

export function Asset({ source, title, price, percentage, isPositive }) {
  return (
    <View style={asset.container}>
      <View style={crypto.container}>
        <Image source={source} style={crypto.image} />
      </View>
      <TextDefault style={[crypto.text, crypto.title]}>{title}</TextDefault>

      <View style={asset.price}>
        <TextPrice>{price}</TextPrice>
        <TextPrice
          style={[
            asset.percentageText,
            isPositive === true ? asset.percentageUp : asset.percentageDown,
          ]}
        >
          {percentage}
        </TextPrice>
      </View>
    </View>
  );
}

const asset = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  percentageDown: {
    color: "red",
  },
  percentageUp: {
    color: "green",
  },
  percentageText: {
    fontSize: 13,
  },
  price: {
    marginTop: 15,
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
    flexWrap: "wrap",
  },
  title: {
    paddingLeft: 15,
    textAlign: "left",
  },
  price: {
    textAlign: "right",
  },
});
