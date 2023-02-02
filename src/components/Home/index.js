import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components/native";

import {
  bitcoinImage,
  ethereumImage,
  tetherImage,
  polygonImage,
} from "../Constants/index";
import { HomeModal } from "./HomeModal";

const TextDefault = styled.Text`
  color: white;
`;

const TextPrice = styled.Text`
  color: white;
  text-align: right;
`;

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.home);

  return (
    <>
      <View style={style.container}>
        <View style={[title.titleContainer, title.titlePosition]}>
          <TextDefault
            style={[style.TextDefaultCommon, title.titleTextDefault]}
          >
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

        {/* TODO ПЕРЕДЕЛАТЬ КАК ОТДЕЛЬНЫЙ КОМПОНЕНТ
      1. КОТОРЫЙ ПРИНИМАЕТ ИКОНКУ
      2. НАЗВАНИЕ ИКОНКИ
      3. DESIRED PRICE
      4. CURRENT PRICE
      */}
        <View style={records.container}>
          <View style={records.first}>
            <TextDefault style={records.title}>Your records</TextDefault>

            <View style={crypto.container}>
              <Image source={bitcoinImage} style={crypto.icon} />
              <TextDefault style={crypto.title}>Bitcoin</TextDefault>
            </View>

            <View style={crypto.container}>
              <Image source={ethereumImage} style={crypto.icon} />
              <TextDefault style={crypto.title}>Ethereum</TextDefault>
            </View>

            <View style={crypto.container}>
              <Image source={polygonImage} style={crypto.icon} />
              <TextDefault style={crypto.title}>Polygon</TextDefault>
            </View>

            <View style={crypto.container}>
              <Image source={tetherImage} style={crypto.icon} />
              <TextDefault style={crypto.title}>Tether</TextDefault>
            </View>
          </View>

          <View style={records.second}>
            <TextPrice style={records.title}>Desired </TextPrice>
            <TextPrice style={crypto.price}>550020 $</TextPrice>
            <TextPrice style={crypto.price}>550020 $</TextPrice>
            <TextPrice style={crypto.price}>2 $</TextPrice>
            <TextPrice style={crypto.price}>0.95 $</TextPrice>
          </View>

          <View style={records.third}>
            <TextPrice style={records.title}>Current price</TextPrice>
            <TextPrice style={crypto.price}>39,432 $</TextPrice>
            <TextPrice style={crypto.price}>2,852.93 $</TextPrice>
            <TextPrice style={crypto.price}>0.9 $</TextPrice>
            <TextPrice style={crypto.price}>1 $</TextPrice>
          </View>
        </View>
      </View>
      <HomeModal />
    </>
  );
}

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  TextDefaultCommon: {
    color: "#FFFFFF",
  },
});

const title = StyleSheet.create({
  titleContainer: {
    flex: 0.18,
    backgroundColor: "#514B4B",
  },
  titlePosition: {
    paddingTop: 25,
    paddingLeft: 30,
  },
  titleTextDefault: {
    fontSize: 28,
  },
  titleMoneyTextDefault: {
    paddingTop: 10,
  },
});

const records = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontSize: 15,
  },
  first: {
    flex: 1.5,
    // backgroundColor: 'first',
  },
  second: {
    flex: 1,
    // backgroundColor: 'white'
  },
  third: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
});

const crypto = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
    width: "22%",
    backgroundColor: "black",
  },
  title: {
    paddingLeft: 10,
    paddingTop: 30,
    fontSize: 14,
  },
  price: {
    marginTop: 34,
  },
});
