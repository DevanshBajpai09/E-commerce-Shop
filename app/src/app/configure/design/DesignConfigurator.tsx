"use client"
import React, { useState } from 'react'
import NextImage from 'next/image'
import {Rnd} from 'react-rnd'

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from '@/lib/utils'
import HandleComponent from '@/Component/HandleComponent'
import { ScrollArea } from '@/components/ui/scroll-area'
import {RadioGroup} from '@headlessui/react'
interface DesignConfiguratorProps{
    configId : string
    imageUrl :string
    imageDimensions : {width:number ; height : number}
}
const DesignConfigurator = ({configId , imageUrl , imageDimensions}:DesignConfiguratorProps) => {

  const [options, setOptions] = useState({
    color:"black",
  })
  return (
    <div className='relative mt-20 grid grid-cols-3 mb-20 pb-20'>
        <div className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus-ring-2 focus-ring-primary focus-ring-offset-2'>
            <div className='relative  w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]'>
            <AspectRatio ratio={896/1831} className='pointer-events-none relative z-50 aspect-[896/1831] w-full'>
            <NextImage fill src='/phone-template.png' className='pointer-events-none z-50 select-none' alt='phone iamge'/>

            </AspectRatio>
            <div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]'/>
            <div className={cn('absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]',`bg-blue-950`)}/> 

            </div>
            <Rnd className='absolute z-20 border-[3px] border-primary' default={{x:150,y:205,width:imageDimensions.width/4,height:imageDimensions.height/4}} lockAspectRatio resizeHandleComponent={{bottomRight:<HandleComponent/>,bottomLeft:<HandleComponent/>,topRight:<HandleComponent/>,topLeft:<HandleComponent/>}}>

            <div className='relative w-full h-full'>
              <NextImage src={imageUrl} fill alt='your image' className='pointer-events-none'/>

            </div>
            </Rnd>
        </div>
        <div className='h-[37.5rem] flex flex-col bg-white'>
        <ScrollArea className='realtive flex-1 overflow-auto'>
          <div aria-hidden='true' className='absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none'/>
          <div className='px-8 pb-12 pt-8'>
            <h2 className='tracking-tight font-bold text-3xl'>Customize your case</h2>
            <div className='w-full h-px bg-zinc-800 my-6'/>
            <div className='relative mt-4 h-full flex flex-col justify-between'>
              <RadioGroup className={} value=''>

              </RadioGroup>

            </div>
          </div>

        </ScrollArea>

        </div>
    </div>
  )
}

export default DesignConfigurator