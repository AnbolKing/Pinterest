import React from 'react'
import { PixelRatio, Dimensions } from 'react-native';
//import Dimensions from 'Dimensions'

const Util = {
    radio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(),
    size: {
        width : Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    clg() {
        console.log(Dimensions.get('window').width, Dimensions.get('window').height)
    }
}

export default Util