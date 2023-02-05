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

import { setIsOpenModal, updatePriceRecord } from "../Slices/homeSlice";

import { AntDesign } from "@expo/vector-icons";

export function HomeModal() {
  const { isOpenModal, record, records } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const { source, title, desiredPrice, id } = record;

  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    changeText(newPrice);
  }, [newPrice]);

  useEffect(() => {
    if (record.id) {
      setNewPrice(desiredPrice);
    }
    return () => {
      setNewPrice("");
    };
  }, [record.id]);

  const changeText = (text) => {
    dispatch(updatePriceRecord({ id, text }));
  };

  return (
    <Modal
      visible={isOpenModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        dispatch(setIsOpenModal(!isOpenModal));
      }}
      onTouchCancel={() => {
        dispatch(setIsOpenModal(!isOpenModal));
      }}
    >
      <View style={[style.view, style.content, style.size]}>
        <Pressable
          onPress={() => {
            dispatch(setIsOpenModal(!isOpenModal));
          }}
        >
          <AntDesign name="close" size={20} style={icon.container} />
        </Pressable>

        <View style={[crypto.container, crypto.position]}>
          <Image source={source} style={crypto.image} />
        </View>

        <View style={crypto.position}>
          <SafeAreaView>
            <TextInput
              value={newPrice}
              style={input.container}
              onChangeText={setNewPrice}
              keyboardType="numeric"
              placeholder="change price"
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
    paddingBottom: 60,
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
