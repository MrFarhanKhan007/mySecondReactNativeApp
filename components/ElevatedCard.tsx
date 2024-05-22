import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCard</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>😁😁😁😁</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        headingText: {
            fontSize: 24,
            fontWeight: "bold",
            paddingHorizontal: 8
        },
        container: {
            padding: 8,
        },
        card: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: 4,
            margin:8,
        },

        cardElevated: {
            backgroundColor: "#CAD5E2",
            elevation:5,
            // shadowColor:"#E5F354",
            // shadowOffset: {
            //   width:5,
            //   height:5  
            // },
            shadowOpacity:0.4,
            shadowRadius:2
        }
    }
)