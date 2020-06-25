import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableHighlight, FlatList } from 'react-native'

import MachineListItem from '../components/MachineListItem'

import Machines from '../constants/Machines'

// export var machines = [
//     {
//         id: 1,
//         title: 'Ground Floor Washroom',
//         alert: false
//     },
//     {
//         id: 2,
//         title: 'First Floor Washroom',
//         alert: true
//     },
// ]

export default function HomeScreen() {
    const [machines, setMachines] = useState([
        {
            id: 1,
            title: 'Ground Floor Washroom', 
            alert: false
        },
        {
            id: 2,
            title: 'First Floor Washroom',
            alert: true
        },
        {
            id: 3,
            title: 'New Machine',
            alert: true
        }
    ]);
    const [modalVisible, setModalVisible] = useState(false);

    const delMachine = (id) => {
        setMachines(prevState => {
            return prevState.filter(machine => machine.id !== id);
        })
    }
  
    return (
        <View>
            {/* <MachineListItem title='Ground Floor Washroom' onConnect={() =>{setModalVisible(true)}} />
            <MachineListItem title='First Floor Washroom' alert={true} onConnect={() =>{setModalVisible(true)}} /> */}

            {/* <FlatList data={machines} renderItem={({machine}) => {
                <Text>{machine.title}</Text>
            }} 
                keyExtractor={machine => machine.id}
            /> */}

            {machines.map(machine => <MachineListItem id={machine.id} title={machine.title} alert={machine.alert} onInfo={() =>{setModalVisible(true)}} onDelete={delMachine} /> )}

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
                    <Text style={styles.modalText}>Machine Details</Text>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Location:</Text><Text style={styles.modalTextValue}> Front Desk, beside the office door</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Status:</Text><Text style={styles.modalTextValue}> Currently Inactive</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Max Capacity:</Text><Text style={styles.modalTextValue}>  20 Masks</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Last Active:</Text><Text style={styles.modalTextValue}>  3rd June 2020 10:00am</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Incinerations till now:</Text><Text style={styles.modalTextValue}>  40</Text>
                    </View>
                    <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                    >
                    <Text style={styles.textStyle}>OK</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
    },
    text: {
        alignContent: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundColor: '#000000',
        borderRadius: 2
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        width: 320,
        height:350,
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
        width: 50,
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
      modalTextValue: {
        marginBottom: 15,
        textAlign: "center",
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
