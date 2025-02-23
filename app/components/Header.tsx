import React from "react"
import { View, Text, StyleSheet, Pressable, Animated } from "react-native"
import Feather from "@expo/vector-icons/Feather"

interface HeaderProps {
  onPressHeader: () => void
}
const Header: React.FC<HeaderProps> = ({ onPressHeader }) => {
  return (
    <Animated.View style={styles.container}>
      <Pressable onPress={onPressHeader}>
        <Feather name="menu" size={24} color="grey" style={{ opacity: 0.5 }} />
      </Pressable>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.title}>START</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    color: "grey",
  },
})

export default Header
