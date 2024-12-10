import { Maximize2, Pencil, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PreviewSection() {
  return (
    <div className="relative space-y-6 p-6">
        <h2 className="text-2xl font-bold text-[#FF3B00]">Preview</h2>

      <div className="w-full px-10 py-6 shadow shadow-black/40">
      <div className="flex justify-between">
        <div className=""></div>
        <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>
        </div>
      </div>
      </div>
      <div className="relative rounded-lg bg-slate-200 p-6 border border-orange-400">
        <div className="absolute right-4 top-4">
          <Badge className="bg-[#2B4356]">Physician Assistant</Badge>
        </div>
        <div className="mb-6 flex items-center gap-4">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold">Victoria Wotton</h3>
            <p className="text-gray-600">Physician Assistant</p>
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h4 className="mb-2 font-semibold">Profile</h4>
            <p className="text-sm text-gray-600">
              Certified medical professional with 8+ years of experience providing exceptional
              clinical support in various healthcare environments, seeking to provide expert-level care and assistance
              to help and contribute to ABC Hospital's goals of attending to the patients with the utmost care.
            </p>
          </section>

          <section>
            <h4 className="mb-2 font-semibold">Education</h4>
            <div className="space-y-2">
              <div>
                <p className="text-sm font-medium">University School of Medicine</p>
                <p className="text-xs text-gray-600">2014 - 2018</p>
              </div>
              <div>
                <p className="text-sm font-medium">University of Medical A</p>
                <p className="text-xs text-gray-600">2010 - 2014</p>
              </div>
            </div>
          </section>

          <section>
            <h4 className="mb-2 font-semibold">Skills</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>• Problem Solving</li>
              <li>• Patient Care</li>
              <li>• Collaboration</li>
              <li>• Management</li>
              <li>• Critical</li>
              <li>• Design Thinking</li>
            </ul>
          </section>

          <section>
            <h4 className="mb-2 font-semibold">Contact</h4>
            <div className="space-y-1 text-sm">
              <p>+00 123 456/789</p>
              <p>example@example.com</p>
              <p>123 Street Name,</p>
              <p>City Name, State Name</p>
            </div>
          </section>

          <section>
            <h4 className="mb-2 font-semibold">Reference</h4>
            <div className="text-sm">
              <p className="font-medium">John Smith</p>
              <p className="text-gray-600">example@example.com</p>
            </div>
          </section>
        </div>

      </div>
      </div>
        <div className="mt-6 flex gap-4">
          <Button className="flex-1">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button className="flex-1">
            Print
          </Button>
          <Button className="flex-1">
            Export
          </Button>
        </div>
    </div>
  )
}

