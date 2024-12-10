import { Button } from '@/components/ui/button';
import React from 'react'

type Props = {}

const SignupCandidatePage = (props: Props) => {
  return (
    <main className="flex min-h-[calc(100vh-64px-64px)] flex-col items-center justify-center px-4 py-16">
      <div className="mb-8">
        <img src="/orange_logo.png" alt="" />
      </div>
      <h1 className="mb-8 text-center text-4xl font-bold text-[#FF3B00]">Sign-Up As A Candidate</h1>
      <p className="mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-700">
        Each profile has a requirement to answer an initial survey of around 20 questions according to its initial search. It
        is strongly recommended to fill out the account profile as accurately as possible to benefit the best experience
        from the platform and be able to match the best results through our AI and query engines.
      </p>
      <Button variant="destructive" size="lg" className="bg-[#FF3B00] px-12 hover:bg-[#FF3B00]/90">
        Start
      </Button>
    </main>
  )
}
export default SignupCandidatePage;