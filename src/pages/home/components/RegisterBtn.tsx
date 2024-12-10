import { Button } from '@/components/ui/button';
import React from 'react'

type Props = {}

const RegisterBtn = (props: Props) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:gap-[4rem] gap-2 py-16">
      <Button className='bg-main w-[90%] hover:bg-main/90'>Start Hiring Now</Button>
      <Button className='w-[90%]'>Find Your Job Oportunities</Button>
    </div>
  )
}
export default RegisterBtn;