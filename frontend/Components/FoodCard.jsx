import { View, Text , Image } from 'react-native'
import React from 'react'
import FoodPic from '../assets/Food-1.jpg'
import {Star} from '@nandorojo/heroicons/20/solid'

export default function FoodCard() {
  return (
    <View className='flex-row py-8 px-2 border-b-2 border-gray-300'>
      <View className='flex-1 shrink space-y-1'>
        <Text className='font-bold text-black text-xl'>Shahi Paneer</Text>
        <Text className='font-bold text-black text-base'>100rs</Text>
        <View className='flex-row space-x-2'>
          <View className='flex-row'>
          <Star color={'orange'} />
          <Star color={'orange'} />
          <Star color={'orange'} />
          <Star color={'orange'} />
          <Star color={'gray'} />
          </View>
          <View>
            <Text className='text-yellow-700 font-bold '>4.0</Text>
          </View>
          <View>
            <Text>(20)</Text>
          </View>
        </View>
      </View>
      <View className='relative'>
        <Image source={FoodPic} className='h-40 w-40 rounded-2xl' />
        <View className='absolute -bottom-4 left-6 bg-white px-10 rounded-lg py-1 shadow-md border-gray-200 '>
            <Text className='text-green-900 font-bold text-lg'>ADD</Text>
        </View>
      </View>
    </View>
  )
}