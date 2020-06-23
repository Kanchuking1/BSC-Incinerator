import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MachineListItem from '../components/MachineListItem'

export default function ConnectScreen() {
  
    return (
        <React.Fragment>
            <MachineListItem title='Ground Floor Washroom' />
            <MachineListItem title='First Floor Washroom' alert={true} />
        </React.Fragment>
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
    }
})
