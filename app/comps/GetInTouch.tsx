import Image from "next/image"
import ContactForm from "./contactForm"

const GetInTouch = () => {
  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 lg:my-16">
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center gap-3 mb-2">
          <h2 className="text-5xl sm:text-7xl lg:text-6xl xl:text-[165px] font-bold uppercase leading-none">Let's</h2>
          <div className="flex justify-center items-center">
            <Image
              src="/Arrow right-circle.png"
              height={160}
              width={160}
              alt="Light blue circle with an arrow pointing right"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
            />
          </div>
        </div>
        <h2 className="text-5xl sm:text-7xl lg:text-6xl xl:text-[165px] font-bold uppercase leading-none ml-4 sm:ml-8 lg:ml-16 xl:ml-20 mb-2">
          Get in
        </h2>
        <h2 className="text-5xl sm:text-7xl lg:text-6xl xl:text-[165px] font-bold uppercase leading-none ml-2 sm:ml-4 lg:ml-5">
          Touch
        </h2>
      </div>
      <div>
        <div className="mb-8">
          <ContactForm />
        </div>
        <h3 className="mb-6 font-semibold text-xl sm:text-2xl lg:text-[28px]">Locations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Johannesburg Office</h4>
            <p>Tel: 011 972 1316</p>
            <p>9 Wonderboom Street</p>
            <p>Glen Marais</p>
            <p>Kempton Park, South Africa</p>
            <p className="mt-2">
              <a href="mailto:info@automationworks.co.za" className="text-blue-600 hover:underline">
                info@automationworks.co.za
              </a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Swellendam Office</h4>
            <p>Tel: 028 514 2558 / 2587</p>
            <p>Oaktree Business Park</p>
            <p>Buffeljagsrivier, 6742</p>
            <p>Western Cape, South Africa</p>
            <p className="mt-2">
              <a href="mailto:info@automationworks.co.za" className="text-blue-600 hover:underline">
                info@automationworks.co.za
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch

