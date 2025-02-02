"use client"
import { Progress } from '@/components/ui/progress'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'

import { Loader2, MousePointerSquareDashedIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useTransition } from 'react'
import Dropzone  from 'react-dropzone'

const page = () => {

    const [dragover, setDragover] = useState(false)
    const [uploadprogress, setuploadprogress] = useState(0)
    const router = useRouter()

    const {  } = useUploadThing('imageUploader',{
      onClientUploadComplete : ([data])=>{
        const configId = data.serverData.configId
        startTransition(()=>{
          router.push(`/configure/design?id=${configId}`)

        })


      }
    })

    const onDropRejected = ()=> {}
    const onDropAccepted = ()=> {}

    const isUploading = false
    const [isPending,startTransition] = useTransition()
  return (
    <div className={cn('relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center',{'ring-blue-900/25 bg-blue-900/10': dragover})}>
        <div className='relative flex flex-1 flex-col items-center justify-center w-full'><Dropzone onDropRejected={onDropRejected} onDropAccepted={onDropAccepted} accept={{'image/png':['.png'],"image/jpeg":['.jpeg'],'image/jpg':['jpg']}} onDragEnter={()=>setDragover(true)} onDragOver={()=>setDragover(false)}>
        {({getRootProps , getInputProps})=>(
            <div className='h-full w-full flex-1 flex flex-col items-center justify-center'{...getRootProps()}>
                <input {...getInputProps()} />
                {dragover ? (<MousePointerSquareDashedIcon className='h-6 w-6 text-zinc-500 mb-2'/>) : isUploading || isPending ? (<Loader2 className='animate-spin h-6 w-6 text-zinc-500 mb-2'/>) : (<Image width={20} height={20} className=' text-zinc-600 mb-2' alt='img' src={''}/>) }
                <div className='flex flex-col  justify-center mb-2 text-sm text-zinc-700'>
                  {isUploading ? (<div><p>Uploading</p> <Progress value={uploadprogress} className='mt-2 w-14 h-2 bg-gray-200'/></div>) : isPending ? (<div className='flex flex-col items-center'><p>Redirecting , please wait ......</p></div>) : dragover ? (<p><span className='font-semibold'>Drop File</span>{' '}Upload</p>) : (<p><span className='font-semibold'>Click to upload</span>{''}or drag and drop</p>)}
                </div>
                {isPending ? null : (<p className='text-xs text-zinc-500'>PNG , JPEG , JPG</p>)}

            </div>
        )}
        </Dropzone></div>
    </div>
  )
}

export default page