import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Understanding React Native Development</Text>
      <Text style={styles.paragraph}>
        React Native is a popular framework for building mobile applications. It
        allows developers to use React along with native platform capabilities
        to create apps for iOS and Android.
      </Text>

      <View style={styles.adBlock}>
        <Text style={styles.adText}>Advertisement</Text>
      </View>

      <Text style={styles.paragraph}>
        One of the main benefits of React Native is the ability to share code
        between platforms. This means you can maintain a single codebase for
        both iOS and Android applications, significantly reducing development
        time and effort.
      </Text>

      <View style={styles.adBlock}>
        <Text style={styles.adText}>Advertisement</Text>
      </View>

      <Text style={styles.paragraph}>
        React Native also provides excellent performance because it renders
        using native components. This gives your apps a truly native feel while
        still allowing for rapid development using JavaScript or TypeScript.
      </Text>

      <View style={styles.adBlock}>
        <Text style={styles.adText}>Advertisement</Text>
      </View>

      <Text style={styles.paragraph}>
        One of the main benefits of React Native is the ability to share code
        between platforms. This means you can maintain a single codebase for
        both iOS and Android applications, significantly reducing development
        time and effort.
      </Text>

      <View style={styles.adBlock}>
        <Text style={styles.adText}>Advertisement</Text>
      </View>

      <Text style={styles.paragraph}>
        React Native also provides excellent performance because it renders
        using native components. This gives your apps a truly native feel while
        still allowing for rapid development using JavaScript or TypeScript.
      </Text>
      <Text style={styles.paragraph}>
        One of the main benefits of React Native is the ability to share code
        between platforms. This means you can maintain a single codebase for
        both iOS and Android applications, significantly reducing development
        time and effort.
      </Text>

      <View style={styles.adBlock}>
        <Text style={styles.adText}>Advertisement</Text>
      </View>

      <Text style={styles.paragraph}>
        React Native also provides excellent performance because it renders
        using native components. This gives your apps a truly native feel while
        still allowing for rapid development using JavaScript or TypeScript.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  adBlock: {
    backgroundColor: "#f59494",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
    borderRadius: 8,
    minHeight: 250,
  },
  adText: {
    color: "#fff",
  },
});
