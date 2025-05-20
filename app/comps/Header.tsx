"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link" // Ensure Link is imported
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

// Define props type for MenuPopUp
interface MenuPopUpProps {
  menuToggle: () => void;
  navContent: NavContentProps[];
}

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

// MenuPopUp Component
const MenuPopUp = ({ menuToggle, navContent }: MenuPopUpProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (event: React.MouseEvent, name: string) => {
    event.stopPropagation()
    setActiveDropdown((prevState) => (prevState === name ? null : name))
  }

  return (
    <div className="bg-black text-white fixed left-0 top-0 w-full h-full z-50 lg:hidden">
      <div className="w-full flex flex-row justify-end p-5">
        <button onClick={menuToggle}>
          <X className="text-white"/>
        </button>
      </div>
      <div className="flex flex-col gap-0 text-lg pt-10">
        {navContent.map((content: NavContentProps) => (
          <div key={content.name} className="flex flex-col w-full px-5 py-4 border-b border-gray-700">
            {content.DropDown ? (
              <>
                <div className="flex justify-between items-center w-full cursor-pointer" onClick={(e) => toggleDropdown(e, content.name)}>
                  {/* Main dropdown link in mobile menu */}
                  <Link href={content.url} onClick={(e) => { e.stopPropagation(); menuToggle(); }}>
                    {content.name}
                  </Link>
                  {activeDropdown === content.name ? <ChevronUp /> : <ChevronDown />}
                </div>
                {activeDropdown === content.name && content.DropdownContent && (
                  <div className="flex flex-col items-start w-full pt-2 pl-8">
                    {content.DropdownContent.map((item: NavDropdownContentProps) => (
                      <Link
                        key={item.sectionName}
                        href={item.sectionUrl}
                        className="text-gray-400 hover:text-white py-2"
                        onClick={menuToggle} // Close menu on sub-link click
                      >
                        {item.sectionName}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex justify-between items-center w-full">
                <Link href={content.url} onClick={menuToggle}>
                  {content.name}
                </Link>
              </div>
            )}
          </div>
        ))}
        {/* Automate Now button in Mobile Menu */}
        <div className="px-5 py-4 mt-4">
          <Link href="/contact" passHref> {/* Wrap button in Link */}
            <button className="w-full bg-[#232A58] px-5 py-2 rounded-xl text-white" onClick={menuToggle}>
              Automate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const headerNavRef = useRef<HTMLElement>(null);

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
      DropdownContent: [
        { sectionName: "Winter School", sectionUrl: "/community#winter-school" },
        { sectionName: "Skills Training", sectionUrl: "/community#skills-training" },
        { sectionName: "Training Facility", sectionUrl: "/community#training-facility" },
      ],
    },
    {
      name: "Contact",
      url: "/contact", // This is the target page
      DropDown: false,
      DropdownContent: null,
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && headerNavRef.current && !headerNavRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    window.addEventListener("resize", handleResize)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown]);

  const toggleDropdown = (event: React.MouseEvent, name: string) => {
    event.stopPropagation()
    setActiveDropdown((prevState) => (prevState === name ? null : name))
  }

  const closeMobileMenu = () => setIsOpen(false);
  const closeDropdowns = () => setActiveDropdown(null);

  return (
    <header className="relative">
      <div className="max-w-[1346px] w-full mx-auto px-2 sm:px-6 lg:px-8 flex flex-row justify-center items-center">
        <div className="flex w-full items-center justify-between gap-4 py-3">
          <Link href="/">
            <Image
              src={"/Logo.png"}
              alt="Automation Work logo"
              width={192}
              height={70}
              className="w-28 md:w-48 cursor-pointer"
              priority
            />
          </Link>

          <nav ref={headerNavRef} className="hidden lg:flex items-center justify-center flex-1 px-4">
            {navContent.map((content, index) => (
              <div key={content.name} className="relative px-2 lg:px-3">
                {content.DropDown ? (
                  <div className="flex items-center justify-center">
                    <Link href={content.url} className="text-gray-700 hover:text-gray-900 lg:text-[14px] md:text-[12px] focus:outline-none mr-1">
                      {content.name}
                    </Link>
                    <button
                      className="text-gray-700 hover:text-gray-900 focus:outline-none flex items-center"
                      onClick={(e) => toggleDropdown(e, content.name)}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === content.name}
                      aria-label={`Toggle ${content.name} dropdown`}
                    >
                      {activeDropdown === content.name ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                ) : (
                  <Link href={content.url} className="text-gray-700 md:text-[12px] lg:text-[14px] hover:text-gray-900">
                    {content.name}
                  </Link>
                )}
                {content.DropDown && activeDropdown === content.name && (
                  <div className={`absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200 ${index >= navContent.length - 2 ? 'right-0' : 'left-0'}`}>
                    {content.DropdownContent?.map((item) => (
                      <Link
                        key={item.sectionName}
                        href={item.sectionUrl}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdowns}
                      >
                        {item.sectionName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Automate Now Button */}
          <Link href="/contact" passHref> {/* Wrap button in Link */}
            <button 
              className="hidden lg:block bg-[#232A58] lg:px-5 lg:text-[15px] px-3 py-2 lg:h-[55px] lg:w-[160px] text-[12px] w-[120px] h-[35px] rounded-xl text-white" 
              onClick={closeDropdowns} // Keep this to close any open desktop dropdowns
            >
              Automate Now
            </button>
          </Link>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle mobile menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && <MenuPopUp menuToggle={closeMobileMenu} navContent={navContent} />}

      <div className="max-w-[1346px] mx-auto">
        <Image
          src={"/Line 1.jpg"}
          alt="line to separate header from content"
          width={1346}
          height={1}
          className="w-full"
          priority={false}
        />
      </div>
    </header>
  )
}

export default HeaderComp