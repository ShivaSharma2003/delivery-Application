import { View, Text , ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

export default function Categories() {
  return (
    <ScrollView horizontal scrollIndicatorInsets={true} className='my-2 px-4'>
        <CategoriesCard title="Offers" id="1234" description="Top Searches" url=""  />
        <CategoriesCard title="chinese" id="12" description="" url=""  />
        <CategoriesCard title="Italian" id="23" description="" url=""  />
        <CategoriesCard title="Indian" id="43" description="" url=""  />
        <CategoriesCard title="South Indian" id="644" description="" url=""  />
        <CategoriesCard title="Top" id="345" description="" url=""  />
    </ScrollView>
  )
}