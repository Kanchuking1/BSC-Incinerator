import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableHighlight, TextInput, Alert } from 'react-native'

import ConnectListItem from '../components/ConnectListItem'

export default function ConnectScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [unconnectedMachines, setUnconnectedMachines] = useState([
        {
            id: 3,
            title: 'DummyMachine',
            alert: false
        },
    ]);

    const toggleModal = id => {
        setModalVisible(!modalVisible);
        setUnconnectedMachines(prevState => {
            return prevState.filter(machine => machine.id !== id);
        })
    }

    return (
        <View>
            {unconnectedMachines.map(machine => <ConnectListItem title={machine.title} onConnect={() =>{setModalVisible(true)}} /> )}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Machine Config</Text>
                    <View style={styles.modalContent}>
                        <Text>Select Wifi: </Text><TextInput style={styles.modalInputWifi} />
                    </View>
                    <View style={styles.modalContent}>
                        <Text>Password: </Text><TextInput style={styles.modalInputPassword} keyboardType='visible-password' secureTextEntry={true} textContentType='password' />
                    </View>
                    <View style={styles.modalContent}>
                        <Text>Machine Name: </Text><TextInput style={styles.modalInputName} />
                    </View>
                    <View style={styles.modalContent}>
                        <Text>Location: </Text><TextInput style={styles.modalInputLocation} />
                    </View>
                    <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => toggleModal(3)}
                    >
                    <Text style={styles.textStyle}>Connect</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        width: 300,
        height:325,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
      },
      modalContent: {
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent: 'center',
          alignItems: 'center'
      },
      modalInput: {
          borderColor: '#000',
          borderWidth: 1,
          padding:5,
          width: 100,
          borderRadius: 10
      },
      modalInputWifi: {
        borderColor: '#000',
        borderWidth: 1,
        padding:5,
        width: 150,
        height:30,
        borderRadius: 10
    },
    modalInputPassword: {
        borderColor: '#000',
        borderWidth: 1,
        padding:5,
        width: 155,
        height:30,
        borderRadius: 10
    },
    modalInputName: {
        borderColor: '#000',
        borderWidth: 1,
        padding:5,
        width: 125,
        height:30,
        borderRadius: 10
    },
      modalInputLocation: {
        borderColor: '#000',
        borderWidth: 1,
        padding:5,
        width: 165,
        height:50,
        borderRadius: 10
    }
})
