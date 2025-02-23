import { useRef, useEffect } from "react"
import { Animated, Easing, Text, StyleSheet } from "react-native"
import { sch, scw } from "../Constant"
import Menu from "./Menu"

interface View2Props {
  onClick: () => void
  drawerState: boolean
}

export const View2: React.FC<View2Props> = (props) => {
  const animRef = useRef(new Animated.Value(0)).current
  const { onClick, drawerState } = props

  useEffect(() => {
    Animated.timing(animRef, {
      toValue: drawerState ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start()
  }, [drawerState])
  const newAnimValue2 = animRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 35],
  })
  return (
    <Animated.View
      style={{
        height: sch,
        width: scw,
        backgroundColor: "#260d57",
        borderRadius: 30,
        zIndex: 1,
        position: "absolute",
        transform: [{ translateY: newAnimValue2 }],
      }}
    >
      <Text style={styles.textStyle}>Beka</Text>
      <Menu onClick={onClick} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 40,
    marginLeft: 40,
  },
})
