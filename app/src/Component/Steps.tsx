"use client"

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'


const STEPS = [
    {
        name:"Step 1 : Add image",
        description:"Choose an image for your case",
        url:"/upload"
    },
    {
        name:"Step 1 : Customize design",
        description:"Make the case yours",
        url:"/design"
    },
    {
        name:"Step 1 : Summary",
        description:"Review the final design",
        url:"/preview"
    },
]
const Steps = () => {
    const pathname = usePathname()
  return (
    <ol className='rounded-md bg-white lg:flex lg:rounded-none lg:border-1 lg:border-r lg:border-gray-200'>
        {STEPS.map((steps,i)=>{
            const isCurrent = pathname.endsWith(steps.url)
            const isCompleted= STEPS.slice(i+1).some((steps)=>
            pathname.endsWith(steps.url))
            const imgPath = `/snake-${i+1}.png`
            return <li key={steps.name} className='relative overflow-hidden lg:flex-1'>
                <div>
                    <span className={cn('absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full',{
                        "bg-zinc-700":isCurrent,
                        "bg-primary":isCompleted,
                    })} aria-hidden='true'/>

                    <span className={cn(i!==0 ? "lg:pl-9":"",'flex items-center px-6 py-4 text-sm font-medium')}>
                        <span className='flex shrink-0'>
                            <Image src={imgPath} alt='img' className={cn('flex h-20 w-20 object-contain items-center justify-center',{
                                'border-none':isCompleted,
                                'border-zinc-700':isCurrent,
                            })}/>                        
                            </span>

                    </span>
                </div>
            </li>


        })}

    </ol>
  )
}

export default Steps