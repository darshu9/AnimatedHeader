import { useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"
import Header from "./Header"
import { sch, scw } from "../Constant"

interface View1Props {
  onClick: () => void
  drawerState: boolean
}
export const View1: React.FC<View1Props> = (props) => {
  const { onClick, drawerState } = props
  const animRef = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animRef, {
      toValue: drawerState ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease),
    }).start()
  }, [drawerState])

  const newAnimValue = animRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  })

  const newAnimValue2 = animRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  })

  const newAnimValue3 = animRef.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-10deg"],
  })

  const newAnimValue4 = animRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  })

  return (
    <Animated.View
      style={{
        height: sch,
        width: scw,
        backgroundColor: "white",
        borderRadius: newAnimValue4,
        zIndex: 2,
        position: "absolute",
        transform: [
          {
            translateX: newAnimValue,
          },
          { translateY: newAnimValue2 },
          {
            rotate: newAnimValue3,
          },
        ],
      }}
    >
      <Header onPressHeader={onClick} />
    </Animated.View>
  )
}
