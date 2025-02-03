import MaxWidthWrapper from '@/Component/MaxWidthWrapper'
import Steps from '@/Component/Steps'
import React from 'react'

const layout = ({children}:{children : ReactNode}) => {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col '>
      <Steps/>
      {children}

    </MaxWidthWrapper>
  )
}

export default layout