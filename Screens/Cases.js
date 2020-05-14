// all necessary components included
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import { Header, SearchBar, Text, Badge } from "react-native-elements";

export default function Cases() {
  // defines the variables
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // search text input handler
  const handleChange = (text) => {
    setSearchTerm(text);
  };

  // search function submit handler
  const handleSubmit = (event) => {
    handleChange(event.nativeEvent.text);
  };

  // retrieving the wanted data from the API (also sets the state to filter countries)
  const getResult = () => {
    const url = "https://api.covid19api.com/summary";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setCountries(responseJson.Countries);
        setFilteredCountries(responseJson.Countries);
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  };

  // updates the list (API)
  useEffect(() => {
    getResult();
  }, []);

  // filters the countries in the search function so that letters can be entered into
  //the input and it searches the list for the countries associated with it)
  useEffect(() => {
    const results = countries.filter((country) =>
      country.Country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // sets the countries (filtering state)
    setFilteredCountries(results);
  }, [searchTerm]);

  // list separator
  const listSeparator = () => {
    return <View style={styles.listseparator} />;
  };

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
      <SearchBar
        lightTheme
        round
        placeholder="Search by Countries..."
        cancelButtonTitle="Cancel"
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        platform="ios"
        showCancel={true}
        cancelButtonTitle="Cancel"
        value={searchTerm}
        inputContainerStyle={{ backgroundColor: "#E3E3E3" }}
        returnKeyType="search"
      />
      <FlatList
        keyExtractor={(item, index) => `${index}`}
        data={filteredCountries}
        renderItem={({ item }) => (
          <View style={styles.flatlist}>
            <Text style={styles.country}> {item.Country}</Text>
            <Text style={styles.newconfirmed}>
              {<Badge status="warning" />} New Confirmed: {item.NewConfirmed}
            </Text>
            <Text style={styles.totalconfirmed}>
              {<Badge status="warning" />} Total Confirmed:{" "}
              {item.TotalConfirmed}
            </Text>
            <Text style={styles.newdeaths}>
              {<Badge status="error" />} New Deaths: {item.NewDeaths}
            </Text>
            <Text style={styles.totaldeaths}>
              {<Badge status="error" />} Total Deaths: {item.TotalDeaths}
            </Text>
            <Text style={styles.newrecovered}>
              {<Badge status="success" />} New Recovered: {item.NewRecovered}
            </Text>
            <Text style={styles.totalrecovered}>
              {<Badge status="success" />} Total Recovered:{" "}
              {item.TotalRecovered}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={listSeparator}
        data={filteredCountries}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatlist: {
    flex: 1,
    marginBottom: 3,
    marginTop: 3,
    padding: 10,
  },
  listseparator: {
    height: 1,
    width: "80%",
    backgroundColor: "#CED0CE",
    marginLeft: "10%",
  },
  headercontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  country: {
    fontSize: 22,
    padding: 7,
  },
  newconfirmed: {
    fontSize: 15,
    padding: 7,
  },
  totalconfirmed: {
    fontSize: 15,
    padding: 7,
  },
  newdeaths: {
    fontSize: 15,
    padding: 7,
  },
  totaldeaths: {
    fontSize: 15,
    padding: 7,
  },
  newrecovered: {
    fontSize: 15,
    padding: 7,
  },
  totalrecovered: {
    fontSize: 15,
    padding: 7,
  },
});
