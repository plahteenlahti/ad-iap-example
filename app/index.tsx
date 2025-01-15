import { useIsAdFree } from "@/hooks/useIsAdFree";
import { usePurchaseSubscription } from "@/hooks/usePurchaseSubscription";
import { ScrollView, Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  const { adFree, loading: adFreeLoading } = useIsAdFree();
  const {
    purchaseSubscription,
    loading: purchaseLoading,
    error,
  } = usePurchaseSubscription();

  if (adFreeLoading || purchaseLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Understanding React Native Development</Text>

      {!adFree && (
        <Pressable
          style={styles.subscribeButton}
          onPress={purchaseSubscription}
        >
          <Text style={styles.subscribeButtonText}>
            Remove Ads - Subscribe Now
          </Text>
        </Pressable>
      )}

      {error && (
        <Text style={styles.errorText}>
          Error processing subscription: {error}
        </Text>
      )}

      <Text style={styles.paragraph}>
        React Native is a popular framework for building mobile applications. It
        allows developers to use React along with native platform capabilities
        to create apps for iOS and Android.
      </Text>

      {!adFree && (
        <View style={styles.adBlock}>
          <Text style={styles.adText}>Advertisement</Text>
        </View>
      )}

      <Text style={styles.paragraph}>
        One of the main benefits of React Native is the ability to share code
        between platforms. This means you can maintain a single codebase for
        both iOS and Android applications, significantly reducing development
        time and effort.
      </Text>

      {!adFree && (
        <View style={styles.adBlock}>
          <Text style={styles.adText}>Advertisement</Text>
        </View>
      )}

      <Text style={styles.paragraph}>
        React Native also provides excellent performance because it renders
        using native components. This gives your apps a truly native feel while
        still allowing for rapid development using JavaScript or TypeScript.
      </Text>

      {!adFree && (
        <View style={styles.adBlock}>
          <Text style={styles.adText}>Advertisement</Text>
        </View>
      )}

      <Text style={styles.paragraph}>
        One of the main benefits of React Native is the ability to share code
        between platforms. This means you can maintain a single codebase for
        both iOS and Android applications, significantly reducing development
        time and effort.
      </Text>

      {!adFree && (
        <View style={styles.adBlock}>
          <Text style={styles.adText}>Advertisement</Text>
        </View>
      )}

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

      {!adFree && (
        <View style={styles.adBlock}>
          <Text style={styles.adText}>Advertisement</Text>
        </View>
      )}

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
    marginVertical: 8,
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
  subscribeButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  subscribeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "#f44336",
    marginBottom: 16,
  },
});
