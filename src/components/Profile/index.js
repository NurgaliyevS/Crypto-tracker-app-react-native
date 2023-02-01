import React from "react";
import { View, StyleSheet } from "react-native";

import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

function Profile() {
  return (
    <View style={style.container}>
      <TextDefault style={[title.titlePosition, title.titleTextDefault]}>
        Profile
      </TextDefault>
      <View style={screen.container}>
        <View style={firstHalf.container}>
          <TextDefault>s.nurgaliyev@aues.kz</TextDefault>
          <CustomText style={[idText.position, idText.size]}>
            ID: 1488228
          </CustomText>

          <CustomText
            style={[customTextPosition.position, sectionTitle.position]}
          >
            PREFERENCES
          </CustomText>

          <TextDefault>Currency</TextDefault>

          <CustomText
            style={[customTextPosition.position, sectionTitle.position]}
          >
            SECURITY
          </CustomText>

          <TextDefault>Change Password</TextDefault>

          <CustomText
            style={[customTextPosition.position, sectionTitle.position]}
          >
            SEO
          </CustomText>

          <TextDefault>Contact</TextDefault>
        </View>

        <View style={[secondHalf.container, secondHalf.position]}>
          <View style={isVerified.container}>
            <MaterialIcons
              style={isVerified.icon}
              name="done"
              size={16}
              color="green"
            />
            <TextDefault style={isVerified.green}>Verified</TextDefault>
          </View>

          <View style={[isVerified.container, currency.position]}>
            <CustomText>USD</CustomText>
            <MaterialIcons
              name="arrow-forward-ios"
              size={12}
              color="white"
              style={currency.arrow}
            />
          </View>

          <MaterialIcons
            name="arrow-forward-ios"
            size={12}
            color="white"
            style={[currency.arrow, password.position]}
          />

          <MaterialIcons
            name="arrow-forward-ios"
            size={12}
            color="white"
            style={[currency.arrow, seo.position]}
          />
        </View>
      </View>
    </View>
  );
}

export default Profile;

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
  titlePosition: {
    paddingTop: 25,
    paddingLeft: 30,
    paddingBottom: 30,
  },
  titleTextDefault: {
    fontSize: 28,
  },
});

const TextDefault = styled.Text`
  color: white;
`;

const CustomText = styled.Text`
  color: #514b4b;
`;

const screen = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    flex: 1,
    flexDirection: "row",
  },
});

const firstHalf = StyleSheet.create({
  container: {
    flex: 1.5,
    // backgroundColor: 'green'
  },
});

const secondHalf = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  position: {
    alignItems: "flex-end",
  },
});

const isVerified = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
});

const idText = StyleSheet.create({
  position: {
    paddingTop: 10,
  },
  size: {
    fontSize: 13,
  },
});

const customTextPosition = StyleSheet.create({
  position: {
    paddingTop: 30,
  },
});

const sectionTitle = StyleSheet.create({
  position: {
    paddingBottom: 20,
  },
});

const currency = StyleSheet.create({
  position: {
    paddingTop: 90,
  },
  arrow: {
    paddingLeft: 5,
  },
});

const password = StyleSheet.create({
  position: { paddingTop: 68 },
});

const seo = StyleSheet.create({
  position: {
    paddingTop: 65
  }
})