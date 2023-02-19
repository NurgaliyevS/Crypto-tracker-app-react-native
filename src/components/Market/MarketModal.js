import React, { useEffect, useState } from "react";

import {
  Modal,
  Text,
  StyleSheet,
  View,
  Pressable,
  Alert,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { setIsMarketOpenModal } from "../Slices/homeSlice";

import { AntDesign } from "@expo/vector-icons";

export function MarketModal() {
  const { isMarketOpenModal, newRecord } = useSelector((state) => state.home);

  const [createRecord, setCreateRecord] = useState({
    price: '',
    id: 0
  });

  const dispatch = useDispatch();

  const { price, source, title, id } = newRecord;

  useEffect(() => {
    if (newRecord !== "") {
      console.log(newRecord, "new record");
    }
  }, [newRecord]);

  return (
    <Modal
      visible={isMarketOpenModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        dispatch(setIsMarketOpenModal(!isMarketOpenModal));
      }}
      onTouchCancel={() => {
        dispatch(setIsMarketOpenModal(!isMarketOpenModal));
      }}
    >
      <View style={[style.view, style.content, style.size]}>
        <Pressable
          onPress={() => {
            dispatch(setIsMarketOpenModal(!isMarketOpenModal));
          }}
        >
          <AntDesign name="close" size={20} style={icon.container} />
        </Pressable>

        <View style={[crypto.container, crypto.position]}>
          <Image source={source} style={crypto.image} />
        </View>

        <View style={crypto.position}>
          <Text style={priceStyle.position}> 
            {`Current price: ${price}`}
          </Text>
        </View>

        <View style={crypto.position}>
          <SafeAreaView>
            <TextInput
              value={createRecord.price}
              style={input.container}
              onChangeText={(text) => {
                setCreateRecord((prevState) => ({
                  ...prevState,
                  id: id,
                  price: text,
                }));
              }}
              keyboardType="numeric"
              placeholder="desired price"
            />
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  size: {
    marginLeft: 30,
    marginRight: 25,
  },
  view: {
    marginTop: 22,
    flex: 0.2,
    backgroundColor: "white",
    borderWidth: 2,
  },
  content: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 120,
  },
});

const icon = StyleSheet.create({
  container: {
    textAlign: "right",
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
  price: {
    textAlign: "right",
  },
  position: {
    alignSelf: "center",
  },
});

const input = StyleSheet.create({
  container: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#514B4B",
    padding: 10,
  },
});

const priceStyle = StyleSheet.create({
  position: {
    paddingTop: 10
  }
})