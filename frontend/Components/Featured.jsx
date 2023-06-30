import { View, Text } from 'react-native'
import React from 'react'
import FeaturedCard from './FeaturedCard'

export default function Featured({}) {
  return (
    <View className = 'px-4 my-4'>
      <FeaturedCard title={'Top Searches'} id={1234} description={'Top searches around you'}   />
      <FeaturedCard title={'top Restaurants'} id={123456} description={'Top Restaurants around you'}  />
      <FeaturedCard title={'Top Offers'} id={54321} description={"Top Offers for you"}  />
      <FeaturedCard title={'Top Dishes'} id={23567} description={"Top Dishes around you"}  />
    </View>
  )
}