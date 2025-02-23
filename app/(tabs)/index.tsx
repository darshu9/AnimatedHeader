import { StyleSheet, View } from "react-native"
import { useState } from "react"
import { View1 } from "../components/View1"
import { View2 } from "../components/View2"

export default function HomeScreen() {
  const [drawerState, setDrawerState] = useState(false)

  const toggleDrawer = () => {
    setDrawerState((drawerState) => !drawerState)
  }

  return (
    <View style={styles.container}>
      <View1 drawerState={drawerState} onClick={toggleDrawer} />
      <View2 drawerState={drawerState} onClick={toggleDrawer} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
})
