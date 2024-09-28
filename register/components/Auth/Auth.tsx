import { useEffect, useState } from "react";
import { 
    Pressable, 
    StyleSheet, 
    Text, 
    TextInput, 
    View
} from "react-native";
import { User, users } from "../../store/users";
import { AuthProps, InputForm } from "./types";

export default function Auth({ setAppTitle }: AuthProps) {
    const [formData, setFormData] = useState<User>(
        {
            name: "",
            email: "",
            password: ""
        }
    );

    const [isRegister, setIsRegister] = useState<boolean>(true);

    const formDefinition: Array<InputForm> = [
        {
            type: "name",
            placeHolder: "Mombre",
            secureTextEntry: false,
        },
        {
            type: "email",
            placeHolder: "Email",
            secureTextEntry: false,
            keyboardType: "email-address"
        },
        {
            type: "password",
            placeHolder: "Mombre",
            secureTextEntry: true,
        },
    ]

    const handlePress = () => {
        users.push(formData)
        console.log(users)
        setFormData({
            name: "",
            email: "",
            password: ""
        })
        setIsRegister(false)
    }

    const login = () => {
        const foundUser = users.find(({ email, password}) => {
            return email === formData.email && password === formData.password
        })
        if (foundUser) console.log("Usuario loggeado")
        else console.log('Login incorrecto')
        setIsRegister(false)
    }

    useEffect(() => {
        setAppTitle(isRegister ? 'Register' : 'Login')
    })

    const handleTextInput = (text: string, textType: string) => {
        setFormData({
            ...formData,
            [textType]: text
        })
    }

    return(
        <View>
            {
                formDefinition.map((formElement, index) => {
                    if(!isRegister && formElement.type === 'name') return null


                    return (
                        <TextInput 
                            key={index}
                            style = {styles.input}
                            onChangeText={(text) => handleTextInput(text, formElement.type)}
                            placeholderTextColor={'white'}
                            value={formData[formElement.type]}
                            placeholder={formElement.placeHolder}
                            keyboardType={formElement.keyboardType}
                            secureTextEntry={formElement.secureTextEntry}
                        />
                    )
                })
            }
            {/* {isRegister && (
                <TextInput 
                    style = {styles.input}
                    onChangeText={(text) => handleTextInput(text, "name")}
                    placeholderTextColor={'white'}
                    value={formData.name}
                    placeholder="Nombre"
                />
            )}
            <TextInput 
                style = {styles.input}
                onChangeText={(text) => handleTextInput(text, "email")}
                placeholderTextColor={'white'}
                value={formData.email}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput 
                style = {styles.input}
                onChangeText={(text) => handleTextInput(text, "password")}
                placeholderTextColor={'white'}
                value={formData.password}
                placeholder="Password"
                secureTextEntry
            /> */}
            <Pressable
                onPress={handlePress} 
                style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>
            <Pressable
                onPress={login} 
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        marginTop: 15,
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: "#03fc98",
    },
    input: {
        paddingLeft: 8,
        height: 40,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        marginTop: 15
    }
})