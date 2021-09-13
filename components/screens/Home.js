import React from 'react'

import {
    SafeAreaView,
    Text
} from 'react-native'

import {
    Button
} from 'react-native-elements'

import MapView from 'react-native-maps';

import { clear } from '../../DB';

const Home = () => {

    const {usuario, email} = props.routes.params

    const sair = () => {
        props.navigation.reset({
            index : 0,
            routes : [{
                name : 'Login'
            }]
        })
    }

    return(
      <SafeAreaView>

          <Text>Olá, { usuario }, ({ email })! </Text>
            
            {usuario === 'fiap' && (
                <Button
                title='Limpar Banco de Dados'
                />
            )}

            <Button
            title='LogOut'
            onPress={ () => sair() } />

      </SafeAreaView>
    )
}  

export default Home