import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}>
                {
                    contacts.map(
                        ({ uid, status, name, imageUrl }) => (
                            <View key={uid} style={styles.userCard}>
                                <Image
                                    style={styles.userImage}
                                    source={
                                        {
                                            uri: imageUrl
                                        }
                                    }
                                />
                                <View style={styles.contactInfo}>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>

                                </View>

                            </View>
                        )
                    )
                }
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
            paddingHorizontal:16,
            marginBottom:4
        },
        userCard: {
            flex:1,
            flexDirection:"row",
            alignItems:"center",
            marginBottom:3,
            backgroundColor:"#8D3DAF",
            padding:4,
            borderRadius:14        },
        userImage: {
            width:60,
            height:60,
            borderRadius:30,
            marginRight:14
        },
        contactInfo:{
            flex:1,
            flexDirection:"column"
        },
        userName: {
            fontSize:16,
            fontWeight:"600",
            color:"#FFF",  
        },

        userStatus: {
            fontSize:12,
            color:"#F1E1F0"
        }

    }
)