import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setIsCryptoAsset } from "../Slices/homeSlice";

import { Asset } from "./Asset";

import { fakeData } from "./fakeData";
import { fakeDataExchange } from "./fakeDataExchange";
import { MarketModal } from "./MarketModal";

const marketType = {
  cryptoAsset: 0,
  exchangeAsset: 1,
};

function Market() {
  const dispatch = useDispatch();
  const { isCryptoAsset } = useSelector((state) => state.home);

  const changeMarketType = (id) => {
    if (id === marketType.cryptoAsset) {
      dispatch(setIsCryptoAsset(true));
    } else if (id === marketType.exchangeAsset) {
      dispatch(setIsCryptoAsset(false));
    }
  };

  return (
    <View style={container.view}>
      <Text style={[container.text, title.text, title.header]}>Market</Text>

      <View style={[section.container, row.container]}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "#514B4B",
            },
            row.name,
          ]}
          onPress={() => {
            changeMarketType(0)
          }}
        >
          <Text style={[container.text, section.title]}>Cryptoassets</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "#514B4B",
            },
            row.price,
          ]}
          onPress={() => {
            changeMarketType(1)
          }}
        >
          <Text style={[container.text, section.title]}>Exchanges</Text>
        </Pressable>
      </View>

      <View style={[row.container]}>
        <View style={[row.name, row.nameContainer]}>
          <AntDesign name="filter" size={26} style={[icon.container]} />
        </View>

        <View style={[row.price, row.priceContainer]}>
          <Entypo name="select-arrows" size={26} style={[icon.container]} />
        </View>
      </View>

      {isCryptoAsset === true ? (
        <View style={asset.container}>
          {Object.values(fakeData).map((element) => (
            <Asset {...element} key={element.price} />
          ))}
        </View>
      ) : null}

      {isCryptoAsset === false ? (
        <View style={asset.container}>
          {Object.values(fakeDataExchange).map((element) => (
            <Asset {...element} key={element.price} />
          ))}
        </View>
      ) : null}

      <MarketModal />
    </View>
  );
}

export default Market;

const container = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#000000",
  },
  text: {
    color: "#FFFFFF",
  },
});

const title = StyleSheet.create({
  text: {
    fontSize: 28,
  },
  header: {
    paddingTop: 25,
    paddingLeft: 30,
    paddingBottom: 20,
  },
});

const section = StyleSheet.create({
  container: {
    flex: 0.12,
    backgroundColor: "#514B4B",
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 18,
  },
});

const row = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  name: {
    flex: 1,
    // backgroundColor: 'green',
  },
  price: {
    flex: 1,
    // backgroundColor: 'white',
  },

  nameContainer: {
    marginLeft: 30,
    marginTop: 15,
  },

  priceContainer: {
    marginRight: 30,
    marginTop: 15,
    alignItems: "flex-end",
  },
});

const icon = StyleSheet.create({
  container: {
    color: "#FFFFFF",
    marginTop: 10,
    marginLeft: 10
  },
});

const asset = StyleSheet.create({
  container: {
    flex: 0.5,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
  },
});
