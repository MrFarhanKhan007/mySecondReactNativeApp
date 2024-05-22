import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Chess Greatest of All Time</Text>
            <View style={[styles.card, styles.elevated]}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: 'https://i.pinimg.com/1200x/94/a1/0a/94a10a36d393a4fd72472113ecd17fe2.jpg',
                        height: 300
                    }}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Magnus Carlsen</Text>
                    <Text style={styles.cardLabel}>2830 FIDE</Text>
                    <Text style={styles.cardDescription}>Magnus Carlsen is a former 5 time World Chess Champion and 17 Time World Champion. He has a massive rating
                        of 2830 FIDE classical and 2890 FIDE Blitz. He is considered noe of the best of all time. He became a Grandmaster at the age of 13 and then proceeded to become
                        World Champion in 2013 when he defeated Vishy Anand from India. He held the title for 10 long years before relinquishing it in 2023 which led to
                        Ding Liren being the new World Chess Champion in 2023 WCC after defeating Ian Nepomiachtichi in a back and forth battle
                        which finally concluded in the Rapid tiebreaks where Ding played Rg6 to defeat Nepo.</Text>
                    <Text style={styles.cardFooter}>Courtesy: Chess24</Text>

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
        card: {
            width: 400,
            height: 600,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 50,
            marginHorizontal: 7,
            padding: 12,
            marginBottom:12
        },
        elevated: {
            backgroundColor: "#F98973",
            elevation: 3,
            shadowOffset: {
                width: 1,
                height: 1
            }
        },
        cardImage: {
            height: 300,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 50,
            marginBottom:4
        },
        cardBody: {
            flex: 1,
            flexGrow: 1,
            paddingHorizontal: 4
        },
        cardTitle: {
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 6,
            color: "#000000"
        },
        cardLabel: {
            fontSize: 16,
            color: "#000000",
            marginBottom: 4
        },
        cardDescription: {
            fontSize: 14,
            color: "#242B2E",
            textAlign: "justify",
            marginBottom: 1,
            flexShrink:1,
            marginTop:6
        },
        cardFooter: {
            fontSize: 12,
            color: "#000000"
        }
    }
)