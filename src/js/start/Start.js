import React from 'react'
import { TextInput, View, Text, ImageBackground } from 'react-native'
import imageUrl from '../../utils/image/imageUrl'

const Start = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={imageUrl.backgroundStart1} resizeMode="cover" style={{ width: '100%', height: '100%' }}>

            </ImageBackground>

        </View>
    )
}


export default Start
