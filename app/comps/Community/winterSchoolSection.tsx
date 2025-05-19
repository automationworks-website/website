import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'

export default function WinterSchoolSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20"> {/* Adjusted padding */}
      {/* Header Section - Responsive Flex Direction */}
      <div className="mb-10 flex flex-col md:flex-row justify-between md:items-center gap-6 md:gap-10 border-b border-b-[#232A58] pb-6"> {/* Added pb-6 */}
        <div className="md:w-1/2"> {/* Limit width on larger screens */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Technology Winter School</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6"> {/* Adjusted text size and margin */}
          Guiding Young Minds in Engineering and Technology
          </p>
        </div>

        <p className="text-gray-600 md:w-1/2 text-sm md:text-base"> {/* Limit width and adjust text size */}
          The Technology Winter School is an engineering program committed to empowering young minds in making informed career choices in the field of engineering and technology.
        </p>
      </div>

      {/* Cards Grid - Adjusted gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8"> {/* Use md:gap-8 */}
        <Card>
          <CardHeader>
            <CardTitle>Hands-on Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Hands-on exposure to foundation & technology and equipment through practical work stations.
            </p>
          </CardContent>
        </Card>        
        <Card>
          <CardHeader>
            <CardTitle>Career Path Exploration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
            First-class exposure to higher education career paths via partnerships with top universities and colleges, including US & UCT, Northlink & New Cloud Academy (NCA)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comprehensive Skills Training</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Skills training techniques, including basic workshop skills, welding, PLC panel building, and more.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Job Readiness and Placement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Opportunity to become 'job ready' and assistance with job placement through 'job shadowing' at local factories in Switzerland-Vocational.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons - Responsive layout */}
      <div className="flex flex-col sm:flex-row gap-4"> {/* Stack buttons on small screens */}
        <Button variant="default" className="bg-[#232A58] hover:bg-opacity-90 transition-colors">Contact Us</Button> {/* Added hover effect */}
        <Button variant="outline" className="group hover:bg-gray-100 transition-colors"> {/* Added hover effect */}
          Our History
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
