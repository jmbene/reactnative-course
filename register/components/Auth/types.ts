import { KeyboardTypeOptions } from "react-native"

export type AuthProps = {
    setAppTitle: React.Dispatch<React.SetStateAction<string>>
}

export type InputForm = {
    placeHolder: string,
    secureTextEntry: boolean,
    type: 'name' | 'email' | 'password',
    keyboardType?: KeyboardTypeOptions
}