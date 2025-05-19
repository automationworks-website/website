export default function OurLocations() {
    return (
      // Added padding bottom
      <section className="container mx-auto px-4 py-12 pb-16 lg:pb-24">
        <div className="text-center mb-12">
          {/* Responsive text size */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">Our locations</h2>
          {/* Adjusted text size and color */}
          <p className="text-lg text-gray-600">Find our offices below.</p> {/* Updated placeholder text */}
        </div>

        {/* Removed fixed width w-[1312px] */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Johannesburg Office */}
          <div className="flex flex-col">
            {/* Added overflow hidden for rounded corners on iframe */}
            <div className="w-full h-[300px] bg-muted rounded-lg mb-6 overflow-hidden">
            {/* Changed allowfullscreen to allowFullScreen */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.795236066808!2d28.251484174968734!3d-26.072947558640436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951529f551a811%3A0x5cfdced38fcd8473!2s9%20Wonderboom%20St%2C%20Glen%20marais%2C%20Kempton%20Park%2C%201619!5e0!3m2!1sen!2sza!4v1735571266912!5m2!1sen!2sza"  allowFullScreen={true} width={"100%"} height={"100%"} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <h3 className="font-semibold text-lg mb-2">Johannesburg Office</h3>
            <p className="text-sm text-muted-foreground">
              9 Kremetart Street, Die Hoewes, Centurion Park, South Africa
            </p>
          </div>
  
          {/* Swellendam Office */}
          <div className="flex flex-col">
             {/* Added overflow hidden for rounded corners on iframe */}
            <div className="w-full h-[300px] bg-muted rounded-lg mb-6 overflow-hidden">
                 {/* Changed allowfullscreen to allowFullScreen */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6612.514128831461!2d20.53716327909849!3d-34.037276415292574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5abaccf178c3%3A0x1d55379de6e2fbfa!2sAutomation%20Works!5e0!3m2!1sen!2sza!4v1735571109798!5m2!1sen!2sza" allowFullScreen={true} width={"100%"} height={"100%"} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h3 className="font-semibold text-lg mb-2">Swellendam Office</h3>
            {/* Adjusted text color */}
            <p className="text-sm text-gray-600">
            Oaktree Business Park, Buffeljagsrivier 6742, Western Cape, South Africa
            </p>
          </div>

        </div>
      </section>
    )
  }
