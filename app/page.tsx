import About from '@/components/about'
import Hero from '@/components/Hero'
import Plans from '@/components/Plans'
import Services from '@/components/Services'
import Trainers from '@/components/Trainers'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div><Hero/> 
    <Services/>
    <Plans/>
    <Trainers/>
    <About/>
    </div>
  )
}


export default  Page