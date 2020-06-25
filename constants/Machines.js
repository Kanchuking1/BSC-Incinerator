import React, { useState } from 'react'

function Machines() {
    const [machines,setMachines] = useState([
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
    ])
}

export default Machines
