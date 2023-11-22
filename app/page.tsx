import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div><Hero/> 
    <Services/>
    </div>
  )
}


export default  Page