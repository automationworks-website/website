import { Mail, Phone } from 'lucide-react'

export default function ContactTrainingFacility() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20"> {/* Adjusted padding */}
      {/* Responsive heading */}
      <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-center mb-12 md:mb-16"> {/* Responsive text size and margin */}
        Contact the Training Facility
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"> {/* Increased max-width and gap */}
        {/* Email */}
        <div className="flex flex-col items-center text-center"> {/* Added text-center */}
          <Mail className="h-8 w-8 mb-3 text-[#232A58]" /> {/* Increased icon size, added color */}
          {/* Responsive text size */}
          <span className="text-xl md:text-2xl lg:text-[32px] font-bold text-muted-foreground mb-2">Email</span>
          <a 
            href="mailto:training@winternetwork.co.za" 
            className="text-base text-primary underline underline-offset-4 hover:text-primary/80 break-all" // Increased text size, added break-all
          >
            training@winternetwork.co.za
          </a>
        </div>

        {/* Phone 1 */}
        <div className="flex flex-col items-center text-center"> {/* Added text-center */}
          <Phone className="h-8 w-8 mb-3 text-[#232A58]" /> {/* Increased icon size, added color */}
           {/* Responsive text size */}
          <span className="text-xl md:text-2xl lg:text-[32px] font-bold text-muted-foreground mb-2">Phone</span>
          <a 
            href="tel:+27222891981" 
            className="text-base hover:text-primary/80 underline underline-offset-4" // Increased text size, fixed underline-offset
          >
            +27 22 289 1981
          </a>
        </div>

        {/* Phone 2 */}
        <div className="flex flex-col items-center text-center"> {/* Added text-center */}
          <Phone className="h-8 w-8 mb-3 text-[#232A58]" /> {/* Increased icon size, added color */}
           {/* Responsive text size */}
          <span className="text-xl md:text-2xl lg:text-[32px] font-bold text-muted-foreground mb-2">Phone</span>
          <a 
            href="tel:+27283142030" 
            className="text-base hover:text-primary/80 underline underline-offset-4" // Increased text size, fixed underline-offset
          >
            +27 28 314 2030
          </a>
        </div>
      </div>
    </section>
  )
}
