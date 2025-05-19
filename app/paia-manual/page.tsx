import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PAIAManual() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">PAIA Manual</CardTitle>
          <p className="text-center text-muted-foreground">Effective date: September 2024</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p>Automotive Works is committed to transparency and accountability. This PAIA Manual outlines how to access information held by us.</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Contact Details</h2>
            <ul className="list-none space-y-2">
              <li><strong>Name:</strong> Automotive Works</li>
              <li><strong>Address:</strong> 9 Wonderboom Street, Glen Marais, Kempton Park, South Africa</li>
              <li><strong>Address:</strong> Oaktree Business Park, Buffeljagsrivier 6742, Western Cape, South Africa</li>
              <li><strong>Phone:</strong> +27 11 972 1316 (JHB)</li>
              <li><strong>Phone:</strong> +27 28 514 2558 / 2587 (SWD)</li>
              <li><strong>Email:</strong> info@automotiveworks.co.za</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Information Available</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Company information (e.g., registration documents, organizational structure)</li>
              <li>Operational information</li>
              <li>Financial information (e.g., annual reports, financial statements)</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Requesting Access to Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Submit a written request to the above contact details</li>
              <li>Complete the prescribed form</li>
              <li>Pay the prescribed fee (if applicable)</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Fees</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>A fee may be charged for searching, preparing and copying information</li>
              <li>Fees are prescribed by the South African Government Gazette</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Exemptions</h2>
            <p className="mb-2">We may refuse access to information if:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Disclosure would compromise confidentiality or privacy</li>
              <li>Information is commercially sensitive</li>
              <li>Request is frivolous or vexatious</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Decision and Appeal</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We will respond to requests within 30 days</li>
              <li>If denied you may appeal to the Information Regulator</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Information Regulator</h2>
            <ul className="list-none space-y-2">
              <li><strong>Name:</strong> South African Information Regulator</li>
              <li><strong>Contact Details:</strong> enquiries@inforegulator.org.za</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>If you have questions or concerns, please contact us. Review our contact page for relevant contact details.</p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

