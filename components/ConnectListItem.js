import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const MachineListItem = ({ title, onConnect }) => {
    return (
        <View style={styles.listItemView}>
            <Image style={styles.listItemImage} source={require('../assets/images/model-square-image.png')} />
            <View style={styles.listItemContent}>
                <Text style={styles.listItemTitle}>{title}</Text>
                <View style={styles.listItemButton}>
                    <View style={styles.listItemButtonContent}>
                        <Ionicons size={30} style={styles.listItemStartIcon} name='md-bluetooth' color={'#000'} onPress={() => onConnect()} />
                        <Text>Connect</Text>
                    </View>
                    <View style={styles.listItemButtonContent}>
                        <Ionicons size={30} style={styles.listItemInfoIcon} name='md-information-circle' color={'#111'} />
                        <Text> Info</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MachineListItem

const styles = StyleSheet.create({
    listItemView: {
        height: 96,
        backgroundColor: '#DDD9B2',
        color: 'black',
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listItemTitle: {
        fontSize: 13,
        position: 'relative',
        left: 50,
    },
    listItemImage: {
        resizeMode: 'stretch',
        height: 90,
        width: 90,
        borderRadius: 20,
    },
    listItemContent: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    listItemButton:{
        flexDirection: 'row',
        position: 'relative',
        left: 70
    },
    listItemButtonContent: {
        marginTop: 7,
        marginBottom: 1,
        marginRight: 10,
        marginLeft: 10,
    },
    listItemStartIcon: {
        position:'relative',
        left: 15,
        top: 3,
    },
    listItemInfoIcon: {
        position:'relative',
        left: 4,
        top: 3,
    },
    listItemDeleteIcon: {
        position:'relative',
        left: 11,
        top: 3,
    },
})
