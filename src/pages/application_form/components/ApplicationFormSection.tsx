"use client";

import { Pencil, Plus } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ApplicationFormSection() {
  const [experiences, setExperiences] = useState<number[]>([1])
  const [education, setEducation] = useState<number[]>([1])

  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold text-[#FF3B00]">My Applicant Account</h2>
      <form className="space-y-6 px-10 py-10 shadow shadow-black/40">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name *</Label>
            <Input id="firstName" placeholder="Enter first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name *</Label>
            <Input id="lastName" placeholder="Enter last name" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Select country *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Select city *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="ld">London</SelectItem>
                <SelectItem value="tk">Tokyo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="street">Street</Label>
          <Input id="street" placeholder="Enter street" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="telephone">Telephone *</Label>
            <Input id="telephone" placeholder="Enter telephone" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age *</Label>
            <Input id="age" placeholder="Enter age" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="Enter email" />
          </div>
          <div className="space-y-2">
            <Label>Select gender *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Add picture</Label>
          <Input type="file" accept="image/*" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Label>Special candidate (able to work but with a disabled status)? *</Label>
            <Button variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <RadioGroup defaultValue="no" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Position *</Label>
            <Input placeholder="Enter position" />
          </div>
          <div className="space-y-2">
            <Label>Profile Type *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full Time</SelectItem>
                <SelectItem value="part-time">Part Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Contract Type *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="permanent">Permanent</SelectItem>
                <SelectItem value="temporary">Temporary</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Salary expectation/month *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30-50k">$30,000 - $50,000</SelectItem>
                <SelectItem value="50-80k">$50,000 - $80,000</SelectItem>
                <SelectItem value="80k+">$80,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Hard skills *</Label>
            <Textarea placeholder="Write description" className="min-h-[100px]" />
          </div>
          <div className="space-y-2">
            <Label>Soft skills *</Label>
            <Textarea placeholder="Write description" className="min-h-[100px]" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Presentation *</Label>
          <Textarea placeholder="Write description" className="min-h-[100px]" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Professional Experience</h3>
            <Button variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          {experiences.map((exp) => (
            <div key={exp} className="space-y-4">
              <h4 className="font-medium">Experience {exp}</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Position Name</Label>
                  <Input placeholder="Enter position name" />
                </div>
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input placeholder="Enter company name" />
                </div>
              </div>
              <div className="space-y-2 w-[50%]">
                <Label>Select period</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea placeholder="Write description" />
              </div>
            </div>
          ))}
          <div className="flex flex-row-reverse">
          <Button
            type="button"

            className="w-40"
            onClick={() => setExperiences([...experiences, experiences.length + 1])}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add
          </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Academic Background</h3>
            <Button variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Higher Education</h4>
            {education.map((edu) => (
              <div key={edu} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Higher Institution Name</Label>
                    <Input placeholder="Enter higher institution name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Specialty</Label>
                    <Input placeholder="Enter specialty" />
                  </div>
                </div>
                <div className="space-y-2 w-[50%]">
                  <Label>Select period</Label>
                  <Input type="date" />
                </div>
              </div>
            ))}
            <div className="flex flex-row-reverse">
            <Button
              type="button"

              className="w-40"
              onClick={() => setEducation([...education, education.length + 1])}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label>Hobbies</Label>
            <Button variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <Textarea placeholder="Write hobbies" className="min-h-[100px] w-[50%]" />
        </div>

        <div className="flex flex-row-reverse">
        <Button type="submit" className="w-40 bg-[#FF3B00] hover:bg-[#FF3B00]/90">
          Submit
        </Button>
        </div>
      </form>
    </div>
  )
}


