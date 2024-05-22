import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>

            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>

                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>

                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>

                <View style={[styles.card, styles.cardFour]}>
                    <Text>Yellow</Text>
                </View>

            </View>
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
            flex: 1,
            flexDirection: "row",
            padding: 8
        },
        card: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 100,
            borderRadius: 4,
            margin: 6,
        },
        cardOne: {
            backgroundColor: "#EF5354"
        },
        cardTwo: {
            backgroundColor: "#0362fc"
        },
        cardThree: {
            backgroundColor: "#03fc6b"
        },
        cardFour: {
            backgroundColor: "#fcdb03"
        },
        cardFive: {
            backgroundColor: "#EF5354"
        }
    }
)