import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center min-h-[83vh] px-4 my-6">
      <CustomButton 
            title="Product Posting : Coming Soon"
            containerStyles="w-full mt-7"
                    />
      </View>

    </SafeAreaView>
  )
}

export default Bookmark