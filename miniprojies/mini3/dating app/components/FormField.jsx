import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

import { icons } from '../constants';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* Title text: make it bolder and black */}
      <Text className="text-base font-bold">{title}</Text>

      <View className="border-2 border-gray-300 w-full h-16 px-4 bg-white rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 font-bold text-base" // Text bolder and black
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#0C0C0C"}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyehide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
