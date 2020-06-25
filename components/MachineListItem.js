import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const MachineListItem = ({ id ,title, alert, onInfo, onDelete }) => {

    return (
        <View style={styles.listItemView}>
            <Image style={styles.listItemImage} source={require('../assets/images/model-square-image.png')} />
            <View style={styles.listItemContent}>
                <Text style={styles.listItemTitle}>{title}</Text>
                <View style={styles.listItemButton}>
                    <View style={styles.listItemButtonContent}>
                        <Ionicons size={30} style={styles.listItemStartIcon} name='ios-flame' color={'#f37f14'} />
                        <Text>Start</Text>
                    </View>
                    <View style={styles.listItemButtonContent}>
                        <Ionicons size={30} style={styles.listItemInfoIcon} name='md-information-circle' color={'#111'} onPress={() => onInfo()} />
                        <Text> Info</Text>
                    </View>
                    <View style={styles.listItemButtonContent}>
                        <Ionicons size={30} style={styles.listItemDeleteIcon} name='md-trash' color={'#111'} onPress={() => onDelete(id)} />
                        <Text>Delete</Text>
                    </View>
                    <View style={styles.listItemButtonContent}>
                        <Ionicons size={40} style={styles.listItemAlertIcon} name='md-warning' color={alert?'#ff0000':'#DDD9B2'} visi />
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
        left: 50
    },
    listItemButtonContent: {
        margin: 7,
    },
    listItemStartIcon: {
        position:'relative',
        left: 7,
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
    listItemAlertIcon: {
        position:'relative',
        left: 11,
        top: 3,
    },
})
