import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { useDispatch, useSelector } from "react-redux";
import { setRecords } from "../Slices/homeSlice";

import { HomeModal } from "./HomeModal";
import { Record } from "./Record";
import { fakeData } from "./fakeData";

const TextDefault = styled.Text`
  color: white;
`;

function Home() {
  const dispatch = useDispatch();
  const { records } = useSelector((state) => state.home);

  (function setRecordsMethod(){
    if (Object.values(fakeData).length) {
      dispatch(setRecords(fakeData));
    }
  })(fakeData);

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

        <View style={row.container}>
          <TextDefault style={[row.title, row.record]}>
            Your records
          </TextDefault>
          <View style={[row.priceContainer]}>
            <TextDefault style={[row.title, row.price]}>
              Desired / Current price
            </TextDefault>
          </View>
        </View>

        {Object.values(fakeData).map((element) => (
          <Record {...element} key={element.id} />
        ))}
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
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
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

const row = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  },
  title: {
    fontSize: 15,
  },
  record: {
    paddingLeft: 5,
  },
  price: {
    textAlign: "right",
  },
  priceContainer: {
    flex: 1,
  },
});
