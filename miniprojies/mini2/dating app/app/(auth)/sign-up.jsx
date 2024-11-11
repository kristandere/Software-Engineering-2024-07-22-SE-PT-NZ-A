import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React,{ useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';

import {images} from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const[form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLoggedIn(true);

      //set it to global state...

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    }finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[110vh] px-4 my-6">
          <Image
           source={images.logo}
           resizeMode='contain'
           className="w-[115px] h-[35px]"
           />

           <Text className="text-2xl text-semibold mt-10 font-psemibold">Create an account</Text>

           <FormField 
            title="Name"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form,
              username: e })}
            otherStyles="mt-10"
          />

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
          <Text className="text-lg text-100 font-pregular">By clicking continue, you agree to the{' '}</Text>
          <Link href="/sign-in" className="text-lg font-psemibond text-secondary">Terms and Conditions</Link>

          <CustomButton 
          title="continue :B"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-100 font-pregular"> Have an Account?</Text>
            <Link href="/sign-in" className="text-lg font-psemibond text-secondary">Sign in</Link>
          
          </View >
        </View>

      </ScrollView>
      
    </SafeAreaView>
  )
}

export default SignUp