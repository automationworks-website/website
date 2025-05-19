import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PopiaComplianceNotice() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">POPIA Compliance Notice</CardTitle>
          <p className="text-center text-muted-foreground">Effective date: September 2024</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p>Automotive Works is committed to protecting your personal information. This notice explains how we collect, use and safeguard your data in compliance with POPIA.</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Responsible Party</h2>
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
            <h2 className="text-2xl font-semibold mb-2">Information Collected</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personal details (name, email, phone number)</li>
              <li>Program enrollment information</li>
              <li>Payment information (for program fees)</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Purpose of Collection</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide our programs and services</li>
              <li>To communicate with you about our programs and services</li>
              <li>To process payments and manage accounts</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Processing Conditions</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We only process personal information with your consent or as required by law</li>
              <li>We take reasonable measures to ensure accuracy and completeness</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Security Measures</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We implement reasonable security measures to protect your data</li>
              <li>Access is limited to authorized personnel only</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">Data Subject Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal information</li>
              <li>Request correction of your personal information</li>
              <li>Object to processing</li>
              <li>Request a copy of your personal information</li>
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

