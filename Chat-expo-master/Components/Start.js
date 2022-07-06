import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
  Pressable,
  Touchable,
  TouchableOpacity,
} from "react-native";

const Image = require("../assets/Background.png");

export default class Start extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      bgColor: null,
    };
  }

  changeBgColor = (newColor) => {
    this.setState({ bgColor: newColor });
  };

  colors = {
    black: "#090C08",
    charcoal: "#474056",
    grey: "#8A95A5",
    green: "#B9C6AE",
    gold: "#FFCF40",
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={Image}
          resizeMode="cover"
          style={styles.headerImage}
        >
          <Text style={styles.appTitle}>Chatter Box</Text>
          <View style={styles.box1}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.yourName}
                onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}
                placeholder="Your Name Here..."
              />
            </View>
          </View>
          {console.log(this.state.bgColor)}

          {/* Allows users to choose a background color/theme   */}
          <Text style={styles.backgroundColorChoose}>
            Choose Background Color:
          </Text>

          {/* Color Hex option codes go here! */}

          <View style={styles.colorArray}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="black"
              accessibilityHint="Allows you to add a black background to the chat"
              accessibilityRole="button"
              style={styles.color1}
              onPress={() => this.changeBgColor(this.colors.black)}
            ></TouchableOpacity>

            <TouchableOpacity
              accessible={true}
              accessibilityLabel="charcoal"
              accessibilityHint="Allows you to add a charcoal background to the chat"
              accessibilityRole="button"
              style={styles.color2}
              onPress={() => this.changeBgColor(this.colors.charcoal)}
            ></TouchableOpacity>

            <TouchableOpacity
              accessible={true}
              accessibilityLabel="grey"
              accessibilityHint="Allows you to add a grey background to the chat"
              accessibilityRole="button"
              style={styles.color3}
              onPress={() => this.changeBgColor(this.colors.grey)}
            ></TouchableOpacity>

            <TouchableOpacity
              accessible={true}
              accessibilityLabel="green"
              accessibilityHint="Allows you to add a green background to the chat"
              accessibilityRole="button"
              style={styles.color4}
              onPress={() => this.changeBgColor(this.colors.green)}
            ></TouchableOpacity>

            <TouchableOpacity
              accessible={true}
              accessibilityLabel="gold"
              accessibilityHint="Allows you to add a gold background to the chat"
              accessibilityRole="button"
              style={styles.color5}
              onPress={() => this.changeBgColor(this.colors.gold)}
            ></TouchableOpacity>
          </View>
          <Pressable
            style={styles.startChatButton}
            onPress={() =>
              this.props.navigation.navigate("Chat", {
                name: this.state.name,
                bgColor: this.state.bgColor,
              })
            }
          >
            <Text styles={styles.startChatButtonText}>Start Chatting</Text>
          </Pressable>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    color: "white",
    fontSize: 45,
    fontWeight: "600",
  },
  container: {
    flex: 1,
  },

  colorArray: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
  },

  yourName: {
    color: "#757083",
    fontSize: 16,
    fontWeight: "300",
    opacity: 50,
    width: "100%",
  },

  inputBox: {
    borderWidth: 2,
    borderRadius: 1,
    borderColor: "grey",
    width: "88%",
    height: 60,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  color1: {
    backgroundColor: "#090C08",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  color2: {
    backgroundColor: "#474056",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color3: {
    backgroundColor: "#8A95A5",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color4: {
    backgroundColor: "#B9C6AE",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  color5: {
    backgroundColor: "#FFCF40",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  backgroundColorChoose: {
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    opacity: 100,
  },

  startChatButton: {
    width: "88%",
    height: 70,
    borderRadius: 8,
    backgroundColor: "#757083",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
  },

  startChatButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  box1: {
    backgroundColor: "white",
    height: "30%",
    width: "88%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  headerImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
