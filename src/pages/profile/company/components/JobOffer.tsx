import { Button } from '@/components/ui/button';
import React from 'react'

interface JobOfferProps{
offerLetter: number[];
setOfferLetter: (arg: any)=>any;
}

const JobOffer = ({offerLetter, setOfferLetter}: JobOfferProps) => {
  return (
    <div className="flex justify-end">
            <Button className="bg-[#ff5722] hover:bg-[#f4511e]" onClick={() => {
              setOfferLetter([...offerLetter, offerLetter.length + 1])
              console.log(offerLetter);
              }}>
              + Add A Job Offer
            </Button>
          </div>
  )
}
export default JobOffer;