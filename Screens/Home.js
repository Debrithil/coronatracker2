// all necessary components included
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { Header, Badge, Text } from "react-native-elements";

export default function Home() {
  // defines the variables
  const [newConfirmed, setNewConfirmed] = useState([]);
  const [totalConfirmed, setTotalConfirmed] = useState([]);
  const [newDeaths, setNewDeaths] = useState([]);
  const [totalDeaths, setTotalDeaths] = useState([]);
  const [newRecovered, setNewRecovered] = useState([]);
  const [totalRecovered, setTotalRecovered] = useState([]);

  // retrieving the wanted data from the API and placing them inside the fetch
  // toLocaleString() method is used to format the output data from a string into a number, eg (10000) => (10,000)
  const getResult = () => {
    const url = "https://api.covid19api.com/summary";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setNewConfirmed(responseJson.Global.NewConfirmed.toLocaleString());
        setTotalConfirmed(responseJson.Global.TotalConfirmed.toLocaleString());
        setNewDeaths(responseJson.Global.NewDeaths.toLocaleString());
        setTotalDeaths(responseJson.Global.TotalDeaths.toLocaleString());
        setNewRecovered(responseJson.Global.NewRecovered.toLocaleString());
        setTotalRecovered(responseJson.Global.TotalRecovered.toLocaleString());
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  };

  // updates list (API)
  useEffect(() => {
    getResult();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
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
      <View style={styles.container2}>
        <Image
          style={{ width: 400, height: 200 }}
          source={require("../assets/coronavirus2.jpg")}
        />
        <View style={styles.list}>
          <Text style={styles.globally}>Reported cases globally:</Text>
          <Text style={styles.confirmed}>
            {<Badge status="warning" />} New Confirmed: {newConfirmed}
          </Text>
          <Text style={styles.totalconfirmed}>
            {<Badge status="warning" />} Total Confirmed: {totalConfirmed}
          </Text>
          <Text style={styles.newdeaths}>
            {<Badge status="error" />} New Deaths: {newDeaths}
          </Text>
          <Text style={styles.totaldeaths}>
            {<Badge status="error" />} Total Deaths: {totalDeaths}
          </Text>
          <Text style={styles.newrecovered}>
            {<Badge status="success" />} New Recovered: {newRecovered}
          </Text>
          <Text style={styles.totalrecovered}>
            {<Badge status="success" />} Total Recovered: {totalRecovered}
          </Text>
          <Text>based on research by Johns Hopkins University</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
  },
  headercontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    alignItems: "center",
  },
  globally: {
    fontSize: 28,
    margin: 7,
  },
  confirmed: {
    fontSize: 19,
    margin: 4,
    padding: 7,
  },
  totalconfirmed: {
    fontSize: 19,
    margin: 4,
    padding: 7,
  },
  newdeaths: {
    fontSize: 19,
    margin: 4,
    padding: 7,
  },
  totaldeaths: {
    fontSize: 19,
    margin: 4,
    padding: 7,
  },
  newrecovered: {
    fontSize: 19,
    margin: 4,
    padding: 7,
  },
  totalrecovered: {
    fontSize: 19,
    margin: 4,
    padding: 7,
  },
});
