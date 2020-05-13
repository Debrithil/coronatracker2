// all necessary components included
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Input, ListItem, Button, Header } from "react-native-elements";
import * as SQLite from "expo-sqlite";

// creating an SQLite database
const db = SQLite.openDatabase("symptomlist.db");

export default function Symptoms() {
  // defines the variables
  const [symptom, setSymptom] = useState("");
  const [details, setDetails] = useState("");
  const [symptomList, setSymptomList] = useState([]);

  // clears the text input
  const clearText = () => {
    setSymptom("");
    setDetails("");
  };

  // sends an alert message on the symptom page
  const sendItem = () => {
    Alert.alert(
      "The data has been successfully submitted to the THL health register!"
    );
  };

  // create table
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists symptomlist (id integer primary key not null, symptom text, details text);"
      );
    });
    updateList();
  }, []);

  // save the symptoms to a list
  const saveItem = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into symptomlist (symptom, details) values (?, ?);",
          [symptom, details]
        );
      },
      null,
      updateList
    );
  };

  // update list
  const updateList = () => {
    db.transaction((tx) => {
      tx.executeSql("select * from symptomlist;", [], (_, { rows }) =>
        setSymptomList(rows._array)
      );
    });
  };

  // delete the symptom from the list
  const deleteItem = (id) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`delete from symptomlist where id = ?;`, [id]);
      },
      null,
      updateList
    );
  };

  keyExtractor = (item, index) => index.toString();

  // renders the symptoms and removes a specific symptom from the list (based on the id)
  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      title={item.symptom}
      subtitle={item.details}
      chevron
      rightIcon={
        <MaterialCommunityIcons
          name="delete-sweep-outline"
          size={30}
          color="#498A97"
        />
      }
      onPress={() => deleteItem(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content"
          backgroundColor="#498A97"
          leftComponent={{ color: "#fff" }}
          centerComponent={{
            text: "C O V I D - 1 9  T R A C K E R",
            style: { color: "#fff" },
          }}
        />
      </View>
      <View style={{ margin: 10, padding: 7 }}>
        <Input
          placeholder="type the symptom here.."
          label="SYMPTOM"
          onChangeText={(symptom) => setSymptom(symptom)}
          value={symptom}
        />
        <Input
          placeholder="type the details here.."
          label="DETAILS"
          onChangeText={(details) => setDetails(details)}
          value={details}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          title="SAVE TO LIST"
          buttonStyle={{
            backgroundColor: "#498A97",
            borderRadius: 10,
            marginLeft: 5,
            marginRight: 3,
            marginTop: 10,
          }}
          onPress={saveItem}
        />
        <Button
          title="CLEAR"
          buttonStyle={{
            backgroundColor: "#498A97",
            borderRadius: 10,
            marginLeft: 5,
            marginRight: 3,
            marginTop: 10,
          }}
          onPress={clearText}
        />
        <Button
          title="SEND TO THL"
          buttonStyle={{
            backgroundColor: "#498A97",
            borderRadius: 10,
            marginLeft: 5,
            marginRight: 3,
            marginTop: 10,
          }}
          onPress={sendItem}
        />
      </View>
      <View style={styles.container2}></View>
      <View style={styles.list}>
        <FlatList
          keyExtractor={keyExtractor}
          data={symptomList}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  list: {
    flex: 10,
    backgroundColor: "#fff",
  },
});
