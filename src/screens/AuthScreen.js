import { StyleSheet, Text, View, KeyboardAvoidingView,TextInput, Button, Alert } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import {COLORS} from '../constants/colors'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/actions/auth.action'
import Input from '../components/Input'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE){
        const updatedValues = {
            ...state.inputValues,
            [action.input] : action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input] : action.isValid
        }
        let updateFormIsValid = true
        for(const key in updatedValidities) {
            updateFormIsValid = updateFormIsValid && updatedValidities[key]
        }
        return {
            formIsValid: updateFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        }
    }
    return state
}

const AuthScreen = () => {

    const dispatch = useDispatch()
    const [error, setError] = useState(null)
    const [isSingUp, setIsSingUp] = useState(true)


    /*useEffect(() => {
        if(error){
            Alert.alert('A ocurrido un error', error, [{text: 'OK'}])
        }
    }, [error])*/

    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    })

    const handleSignUp = () => {
        //dispatch(signUp(email, password))
        if(formState.formIsValid){
            dispatch(signUp(formState.inputValues.email, formState.inputValues.password))
        }else{
            Alert.alert('A ocurrido un error', error, [{text: 'OK'}])
        }
    }

    const onInputChangeHandler = useCallback(
      (inputIdentifier, inputValue, inputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
      },
      [formDispatch],
    )
    

  return (
    <KeyboardAvoidingView style={styles.screen} behavior='padding' keyboardVerticalOffset={50}>
        <View style={styles.container}>
            <Text style={styles.title}>Crea una cuenta:</Text>
            <View>
                <Input 
                    id='email'
                    label='Email'
                    keyboardType='email-address'
                    placeholder='email'
                    required
                    email
                    errorText= 'Correo electiónico o contraseña incorrectos'
                    autoCapitalize='none'
                    onInputChange={onInputChangeHandler}
                    initialValue=''
                />

                <TextInput 
                    style={styles.input}
                    id='password'
                    label='Contraseña'
                    placeholder='password'
                    keyboardType='default'
                    secureTextEntry
                    required
                    minlenght={6}
                    autoCapitalize='none'
                    errorText= 'Correo electiónico o contraseña incorrectos'
                    //onChangeText={setPassword}
                    initialValue=''
                />
            </View>
            <View  style={styles.footer}>
            <View style={styles.button}>
                <Button 
                title={isSingUp ? 'REGISTRARME' : 'LOGIN'} 
                color={COLORS.primary} 
                onPress={handleSignUp}
                />

            </View>
            <View >
                <Button
                    title={`Cambiar a ${!isSingUp ? 'Registrarme' : 'Login'}`}
                    color='#A4AC86' 
                    onPress={() => setIsSingUp((prevState) => !prevState) }
                />
            </View>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        backgroundColor: '#fff',
        height: '50%',
        padding: 12,
        borderRadius: 4
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        color: COLORS.primary
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    button: {
        marginBottom: 8,
    },
    footer: {
        marginTop: 42,
    }
})