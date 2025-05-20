"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

interface NavDropdownContentProps {
  sectionName: string
  sectionUrl: string
}

interface NavContentProps {
  name: string
  url: string
  DropDown: boolean
  DropdownContent: null | NavDropdownContentProps[]
}

// Define props type for MenuPopUp
interface MenuPopUpProps {
  menuToggle: () => void;
  navContent: NavContentProps[];
}

const MenuPopUp = ({ menuToggle, navContent }: MenuPopUpProps) => { // Apply props type
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const toggleDropdown = (event: React.MouseEvent, name: string) => {
    event.stopPropagation() // Keep this to prevent immediate re-closing if clicking the toggle area
    setActiveDropdown((prevState) => (prevState === name ? null : name))
  }
  return (
    <div className="bg-black text-white fixed left-0 top-0 w-full h-full z-50"> {/* Added z-50 */}
      <div className="w-full flex flex-row justify-end p-5">
        <button onClick={() => menuToggle()}>
          <X className="text-white"/> {/* Ensure X is white */}
        </button>
      </div>
      {/* Removed justify-center, items-center, h-full. Added pt-10 */}
      <div className="flex flex-col gap-0 text-lg pt-10">
        {
          navContent.map((content: NavContentProps) => { // Add type to content
            return (
              // Added w-full, px-5, py-4, border-b, border-gray-700. Removed items-center
              <div key={content.name} className="flex flex-col w-full px-5 py-4 border-b border-gray-700">
                {content.DropDown ? (
                  <>
                    {/* Added flex, justify-between, items-center, w-full. Removed gap-2 */}
                    {/* NOTE: onClick for dropdown toggle remains on the outer div */}
                    <div className="flex justify-between items-center w-full cursor-pointer" onClick={(e) => toggleDropdown(e, content.name)}>
                      {/* Add menuToggle to the Link, keep stopPropagation */}
                      <Link href={content.url} onClick={(e) => { e.stopPropagation(); menuToggle(); }}>
                        {content.name}
                      </Link>
                      {/* Chevron logic remains */}
                      {activeDropdown === content.name ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {/* Dropdown content logic remains */}
                    {activeDropdown === content.name && content.DropdownContent && (
                      // Added w-full, items-start. Changed pl-4 to pl-8, mt-2 to pt-2. Removed gap-2
                      <div className="flex flex-col items-start w-full pt-2 pl-8">
                        {content.DropdownContent.map((item: NavDropdownContentProps) => ( // Add type to item
                          // Add menuToggle onClick to sub-links
                          <Link key={item.sectionName} href={item.sectionUrl} className="text-gray-400 hover:text-white py-2" onClick={menuToggle}>
                            {item.sectionName}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Added flex, justify-between, items-center, w-full for consistency
                  <div className="flex justify-between items-center w-full">
                    {/* Add menuToggle onClick to direct links */}
                    <Link href={content.url} onClick={menuToggle}>
                      {content.name}
                    </Link>
                    {/* Optional: Add a spacer or empty fragment if needed for alignment */}
                  </div>
                )}
              </div>
            )
          })
        }
        {/* Add Automate Now button consistent with header mobile menu */}
        <div className="px-5 py-4 mt-4">
           <button className="w-full bg-[#232A58] px-5 py-2 rounded-xl text-white" onClick={menuToggle}>Automate Now</button>
        </div>
      </div>
    </div>
  )
}

const FooterComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Add state for desktop dropdowns
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);


  const navContent: NavContentProps[] = [
    { name: "Home", url: "/", DropDown: false, DropdownContent: null },
    {
      name: "About",
      url: "/about",
      DropDown: true,
      DropdownContent: [
        { sectionName: "Our History", sectionUrl: "/about#our-history" },
        { sectionName: "Our Mission", sectionUrl: "/about#our-mission" },
        { sectionName: "Our Vision", sectionUrl: "/about#our-vision" },
        { sectionName: "Our Team", sectionUrl: "/about#our-team" },
        { sectionName: "Our Partners", sectionUrl: "/about#our-partners" },
        { sectionName: "Awards & Certificates", sectionUrl: "/about#awards-and-certificates" },
      ],
    },
    {
      name: "Services",
      url: "/services",
      DropDown: true,
      DropdownContent: [
        { sectionName: "Automation Services", sectionUrl: "/services#automation-services" },
        { sectionName: "Consultations", sectionUrl: "/services#consultations" },
        { sectionName: "Engineering Services", sectionUrl: "/services#engineering-services" },
        { sectionName: "Support Services", sectionUrl: "/services#support-services" },
      ],
    },
    { name: "Portfolio", url: "/portfolio", DropDown: false, DropdownContent: null },
    {
      name: "Community",
      url: "/community",
      DropDown: true,
      // Updated DropdownContent for Community based on component structure
      DropdownContent: [
        { sectionName: "Winter School", sectionUrl: "/community#winter-school" },
        // Grouping WinterSchool related components under one link
        { sectionName: "Skills Training", sectionUrl: "/community#skills-training" },
        { sectionName: "Training Facility", sectionUrl: "/community#training-facility" },
        // LessonLearned could also be a section if desired:
        // { sectionName: "Lessons Learned", sectionUrl: "/community#lessons-learned" },
      ],
    },
    {
      name: "Contact",
      url: "/contact",
      DropDown: false,
      DropdownContent: null,
    },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Add toggle function for desktop dropdowns
  const toggleDesktopDropdown = (event: React.MouseEvent, name: string) => {
    event.stopPropagation(); // Prevent event bubbling
    setActiveDesktopDropdown((prev) => (prev === name ? null : name));
  };


  return (
    <>
      <footer className="bg-white text-gray-600 w-full">
        {/* Mobile footer - Remains the same */}
        <div className="flex lg:hidden flex-row justify-between items-center px-5 py-4 border-b">
          <div>
            <Image src={"/Logo.png"} alt="Automation Work logo" width={193} height={70}  className="w-32 md:w-48 h-auto" />
           </div>
          <div>
            <button onClick={toggleMenu}>
              <Menu />
            </button>
          </div>
        </div>

        {/* Desktop Footer Layout */}
        <div className="hidden lg:flex lg:flex-col px-4 sm:px-6 lg:px-8 py-8 lg:w-full"> {/* Removed max-w-7xl and mx-auto */}
          {/* Top Section: Logo and Nav */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <Image
                 src={"/Logo.png"}
                 alt="Automation Work logo"
                 width={193} // Required prop for intrinsic size
                 height={70} // Required prop for intrinsic size
                 className="w-48 h-auto" // Use width and auto height to maintain aspect ratio
               />
             </div>
             {/* Desktop Navigation Links */}
             <nav className="flex space-x-6"> {/* Added nav container */}
               {navContent.map((content, index) => ( // Added index
                 <div key={content.name} className="relative"> {/* Added relative positioning for dropdown */}
                   <div className="flex items-center space-x-2"> {/* Container for link and chevron */}
                     <Link href={content.url} className="text-gray-700 hover:text-blue-600">
                       {content.name}
                     </Link>
                     {content.DropDown && (
                       <button
                         onClick={(e) => toggleDesktopDropdown(e, content.name)}
                         className="focus:outline-none"
                       >
                         {activeDesktopDropdown === content.name ? (
                           <ChevronUp size={16} />
                         ) : (
                           <ChevronDown size={16} />
                         )}
                       </button>
                     )}
                   </div>
                   {/* Dropdown Content */}
                   {content.DropDown && activeDesktopDropdown === content.name && content.DropdownContent && (
                     // Changed to open upwards (bottom-full mb-2) and conditionally align right for last item
                     <div className={`absolute bottom-full mb-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200 ${index === navContent.length - 1 ? 'right-0' : 'left-0'}`}>
                       {content.DropdownContent.map((item) => (
                         <a
                           key={item.sectionName}
                           href={item.sectionUrl}
                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                           onClick={() => setActiveDesktopDropdown(null)} // Close dropdown on link click
                         >
                           {item.sectionName}
                         </a>
                       ))}
                     </div>
                   )}
                 </div>
               ))}
             </nav>
          </div>

          {/* Separator Line */}
          <hr className="border-gray-300 my-6" />

          {/* Bottom Section: Copyright and Social Icons */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Automation Works. All rights reserved.</p>
            <div className="flex space-x-4">
               {/* Using placeholder icons based on image - update src if needed */}
              <Link href="https://www.facebook.com/AuWoS/" target="_blank" rel="noopener noreferrer">
                 {/* Assuming you have appropriate icons or use SVGs/icon library */}
                <Image src="/Facebook.png" alt="Facebook" width={24} height={24} className="w-6 h-6" />
              </Link>
              <Link href="https://www.youtube.com/channel/UC4sXxXfdWbYV8uPvfNsmT_Q" target="_blank" rel="noopener noreferrer">
                <Image src="/Youtube.png" alt="YouTube" width={24} height={24} className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Popup - Remains the same */}
        {isMenuOpen && <MenuPopUp menuToggle={toggleMenu} navContent={navContent} />}
      </footer>
    </>
  )
}

export default FooterComp
