import React from "react";

import {
  Modal,
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { setIsOpenModal } from "../Slices/homeSlice";

export function HomeModal() {
  const { isOpenModal } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  return (
    <Modal
      visible={isOpenModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        dispatch(setIsOpenModal(!isOpenModal));
      }}
    >
      <View style={[style.container, style.view, style.content, style.size]}>
        <Text>hello</Text>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#514B4B",
  },
  size: {
    marginLeft: 30,
    marginRight: 20
  },
  view: {
    marginTop: 22,
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    borderRadius: 20,
    padding: 35,
  }
});
