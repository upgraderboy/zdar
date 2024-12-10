import { ApplicationFormSection } from "./components/ApplicationFormSection"
import { PreviewSection } from "./components/Preview"

export default function ApplicationForm() {
  return (
    <div className="min-h-screen my-10">
      <div className="grid md:grid-cols-2">
        <ApplicationFormSection />
        <PreviewSection />
      </div>
    </div>
  )
}
