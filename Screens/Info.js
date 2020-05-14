// all necessary components included
import React from "react";
import { StyleSheet, View, Text, ScrollView, Linking } from "react-native";
import { Header, Card, Button } from "react-native-elements";

export default function Info() {
  // creating cards components that display the text as cards
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
        <ScrollView style={styles.scrollview}>
          <Card
            title="GENERAL INFORMATION"
            image={require("../assets/information.png")}
          >
            <Text style={styles.cardtext}>
              Contracting coronavirus, symptoms, prevention and treatment.
            </Text>
            <Button
              title=" READ MORE"
              buttonStyle={styles.button}
              onPress={() =>
                Linking.openURL(
                  "https://thl.fi/en/web/infectious-diseases/what-s-new/coronavirus-covid-19-latest-updates/coronavirus-covid-19"
                )
              }
            />
          </Card>
          <Card
            title="UP-TO-DATE INFORMATION"
            image={require("../assets/situation.png")}
          >
            <Text style={styles.cardtext}>
              Up-to-date information about coronavirus in Finland and around the
              world.
            </Text>
            <Button
              title=" READ MORE"
              buttonStyle={styles.button}
              onPress={() =>
                Linking.openURL(
                  "https://thl.fi/en/web/infectious-diseases/what-s-new/coronavirus-covid-19-latest-updates/situation-update-on-coronavirus"
                )
              }
            />
          </Card>
          <Card
            title="INSTRUCTIONS"
            image={require("../assets/instructions.png")}
          >
            <Text style={styles.cardtext}>
              How can I prevent infections? What should I do if I suspect an
              infection, if I get sick or if my family member gets sick?
            </Text>
            <Button
              title=" READ MORE"
              buttonStyle={styles.button}
              onPress={() =>
                Linking.openURL(
                  "https://thl.fi/en/web/infectious-diseases/what-s-new/coronavirus-covid-19-latest-updates/instructions-for-citizens-on-coronavirus"
                )
              }
            />
          </Card>
          <Card title="FAQ" image={require("../assets/faq.png")}>
            <Text style={styles.cardtext}>
              Questions and answers about the novel coronavirus.
            </Text>
            <Button
              title=" READ MORE"
              buttonStyle={styles.button}
              onPress={() =>
                Linking.openURL(
                  "https://thl.fi/en/web/infectious-diseases/what-s-new/coronavirus-covid-19-latest-updates/frequently-asked-questions-about-coronavirus-covid-19-"
                )
              }
            />
          </Card>
          <Card
            title="TELEPHONE COUNSELLING"
            image={require("../assets/telephone.png")}
          >
            <Text style={styles.cardtext}>
              The Government's joint telephone helpline is open on weekdays at
              8–21 and on Saturdays at 9–15. Calls to the helpline are subject
              to a regular local network or mobile phone charge.
            </Text>
            <Button
              title=" READ MORE"
              buttonStyle={styles.button}
              onPress={() =>
                Linking.openURL(
                  "https://valtioneuvosto.fi/en/information-on-coronavirus/telephone-and-chat"
                )
              }
            />
          </Card>
          <Text style={styles.bottomtext}>
            © THL 2020 — FINNISH INSTITUTE FOR HEALTH AND WELFARE, PO BOX 30,
            FI-00271 HELSINKI
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    fontSize: 34,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  headercontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#498A97",
    borderRadius: 23,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  cardtext: {
    marginBottom: 10,
  },
  bottomtext: {
    margin: 20,
  },
});
