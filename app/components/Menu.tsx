import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { MenuOptions } from "../Constant"

interface MenuProps {
  onClick: () => void
}
interface MenuItemProps {
  item: string
  index: number
}

const Menu: React.FC<MenuProps> = ({ onClick }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const onPressMenuItem = (index: number) => {
    if (index === 0) {
      onClick()
    }
    setSelectedIndex(index)
  }

  const menuItem = ({ item, index }: MenuItemProps) => {
    return (
      <Pressable
        key={index + "view"}
        style={[
          styles.textView,
          {
            backgroundColor:
              selectedIndex === index ? "#ed7e7e" : "transparent",
            opacity: selectedIndex === index ? 0.5 : 1,
          },
        ]}
        onPress={onPressMenuItem.bind(this, index)}
      >
        <Text
          key={index}
          style={[
            styles.text,
            { color: selectedIndex === index ? "#ff032d" : "white" },
          ]}
        >
          {item}
        </Text>
      </Pressable>
    )
  }
  return (
    <View style={styles.container}>
      {MenuOptions.map((item, index) => menuItem({ item, index }))}
      <View style={styles.horizontalSeperator} />
      <View style={styles.lastOption}>
        {menuItem({ item: "Sign Out", index: 5 })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    marginTop: 40,
  },
  textView: {
    padding: 10,
    margin: 4,
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
  },
  horizontalSeperator: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    margin: 10,
    marginTop: 40,
  },
  lastOption: {
    marginTop: 20,
  },
})

export default Menu
