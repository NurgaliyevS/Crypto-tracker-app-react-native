import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { Asset } from "./Asset";

import { fakeData } from "./fakeData";

function Market() {
  return (
    <View style={container.view}>
      <Text style={[container.text, title.text, title.header]}>Market</Text>

      <View style={[section.container, row.container]}>
        <View style={[row.name]}>
          <Text style={[container.text, section.title]}>Cryptoassets</Text>
        </View>

        <View style={[row.price]}>
          <Text style={[container.text, section.title]}>Exchanges</Text>
        </View>
      </View>

      <View style={[row.container]}>
        <View style={[row.name, row.nameContainer]}>
          <AntDesign name="filter" size={24} style={[icon.container]} />
        </View>

        <View style={[row.price, row.priceContainer]}>
          <Entypo name="select-arrows" size={24} style={[icon.container]} />
        </View>
      </View>

      <View style={asset.container}>
        {Object.values(fakeData).map((element) => (
          <Asset {...element} key={element.price} />
        ))}
      </View>
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
    paddingTop: 30,
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
  },
});

const asset = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
})