import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

  function openWebsite(
    websiteLink: string
  ) {
    Linking.openURL(websiteLink)
  }
  return (
    <View style={styles.main}>
      <View style={styles.blogContainer}>
        <Text style={styles.headingText}>Blog Card</Text>
      </View>

      <View style={[styles.card, styles.elevatedCard]}>

        <View style={styles.headingContainer}>

          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          source={
            {
              uri: "https://miro.medium.com/v2/resize:fit:1024/1*xDi2csEAWxu95IEkaNdFUQ.png"
            }
          }
        />
        <View style={styles.cardContainer}>
          <Text numberOfLines={3} style={styles.cardText}>
            Today we're releasing React Native 0.74! This release adds Yoga 3.0, Bridgeless by default under the New Architecture, batched onLayout updates (New Architecture), and Yarn 3 as the default package manager for new projects.
            We are also removing deprecated APIs, with the removal of PropTypes and breaking changes to PushNotificationIOS. On Android, SDK 23 (Android 6.0) is now the minimum supported version.
          </Text>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => openWebsite("https://reactnative.dev/blog")}>
              <Text style={styles.footerText}>
                Read More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
  {

    main: {
      padding: 8,
    },
    blogContainer: {
      marginBottom: 6
    },
    headingText: {
      fontSize: 24,
      fontWeight: "bold",
    },
    card: {
      borderRadius: 15,
    },
    elevatedCard: {
      backgroundColor: "#E07C24",
      elevation: 8
    },
    headingContainer: {
      marginHorizontal: 15,
      marginTop: 12,
      marginBottom: 2,
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
    },
    headerText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000000",

    }
    ,
    cardImage: {
      height: 230,
      marginTop: 6,
      marginBottom: 6,
    },
    cardContainer: {
      marginHorizontal: 15,
    },
    cardText: {
      fontSize: 18,
    },

    footerContainer: {
      marginBottom: 6
    },
    footerText: {
      fontSize: 18,
      fontWeight: "bold"
    },
  },
)