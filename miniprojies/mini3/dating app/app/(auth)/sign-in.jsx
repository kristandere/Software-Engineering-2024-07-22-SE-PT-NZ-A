import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React,{ useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';

import {images, icons} from '../../constants'; 
import FormField from '../../components/FormField'; 
import CustomButton from '../../components/CustomButton'
import { getCurrentUser, signIn } from '../../lib/appwrite';
import { TouchableOpacity } from 'react-native';
import { useGlobalContext } from '../../context/GlobalProvider'

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const[form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(form.email === "" || form.password === "") {
      Alert.alert('Error', 'Please fill in all the fields')
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);

        router.replace('/home');

      Alert.alert("Success", "User signed in succesfully");
    } catch (error) {
      Alert.alert('Error', error.message)
    }finally {
      setIsSubmitting(false)
    }
  }


  return (
    <SafeAreaView className="bg-primary h-full">

      <ScrollView>
        <View className="w-full justify-center min-h-[100vh] px-4 my-6">
          <Image
           source={images.transparent}
           resizeMode='contain'
           className="w-[215px] h-[135px]"
           />

           <Text className="text-2xl text-semibold mt-10 font-psemibold">Login
             to :Blin</Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,
              email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
              password: e })}
            otherStyles="mt-7"
          />

          <CustomButton 
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
          <Link href="/sign-up" className="text-lg font-psemibond text-secondary">Register</Link>
            <Text className="text-lg text-100 font-pregular"> for Free</Text>
          
          </View >
          <View  className="justify-center pt-5 flex-row gap-2">
          <Link href="/forgotpassword" className="text-lg font-psemibond text-secondary">Forgot Password?</Link>
          </View>

        </View>

      </ScrollView>
      
    </SafeAreaView>
  )
}

export default SignIn