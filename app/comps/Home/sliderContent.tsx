import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail } from 'lucide-react'; // Assuming you use lucide-react for icons

type SliderContentProps = {
  heading: string;
  paragraph: string;
  image1Url: string;
  image2Url: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
};

export const SliderContent = ({
  heading,
  paragraph,
  image1Url,
  image2Url,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
}: SliderContentProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white p-8 md:p-16 lg:p-24">
      {/* Grid container: Default is single column, becomes 10 columns on md screens for 60/40 top and 50/50 bottom split */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-10 md:gap-12 lg:gap-16"> {/* Changed md:grid-cols-5 to md:grid-cols-10 */}
        {/* Heading: Order 1 on mobile, spans 6/10 columns on md (60%) */}
        <div className="order-1 flex flex-col justify-center text-center md:col-span-6 md:text-left"> {/* Changed md:col-span-3 to md:col-span-6 */}
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            {heading}
          </h1>
        </div>

        {/* Image 1 (Yellow): Hidden on mobile, spans 4/10 columns on md (40%) */}
        <div className="order-2 hidden items-center justify-center md:order-2 md:col-span-4 md:flex md:items-center"> {/* Changed md:col-span-2 to md:col-span-4 */}
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl bg-yellow-500">
            <Image
              src={image1Url}
              alt="Dynamic alt text based on slide content" // TODO: Pass descriptive alt text from slidesData
              layout="fill"
              objectFit="contain" // Use contain or cover based on image aspect ratio
              className="p-4" // Add padding if needed
              priority={true} // Add priority for LCP
            />
          </div>
        </div>

        {/* Image 2 (Blue): Order 4 on mobile, spans 5/10 columns on md (50%) */}
        <div className="order-4 flex items-center justify-center lg:order-3 md:col-span-5 md:items-center"> {/* Changed md:col-span-2 to md:col-span-5 */}
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl bg-blue-900 flex">
            <Image
              src={image2Url}
              alt="Dynamic alt text based on slide content" // TODO: Pass descriptive alt text from slidesData
              layout="fill"
              objectFit="contain" // Use contain or cover based on image aspect ratio
              className="p-4" // Add padding if needed
              priority={true} // Add priority for LCP
            />
          </div>
        </div>

        {/* Paragraph and Buttons Container: Use 'contents' on mobile. Spans 5/10 columns on md (50%) */}
        <div className="contents md:order-4 md:col-span-5 md:flex md:flex-col md:items-center md:justify-center md:gap-6 md:text-left"> {/* Changed md:col-span-3 to md:col-span-5 */}
          {/* Paragraph: Order 2 on mobile */}
          <p className="order-2 text-base text-center text-gray-700 md:order-none md:text-lg">{paragraph}</p> {/* ADDED: order-2, md:order-none */}
          {/* Buttons container: Order 3 on mobile */}
          <div className="order-3 mt-4 flex flex-row flex-wrap justify-center gap-6 md:order-none md:mt-0"> {/* KEPT: order-4. ADDED: md:order-none, md:mt-0 */}
            <Button asChild className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
              <Link href={button1Link}>{button1Text}</Link>
            </Button>
            <Link href={button2Link} className="group flex items-center gap-2 text-base font-medium text-gray-900 hover:text-blue-700">
              {button2Text}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-white transition-colors group-hover:bg-blue-700">
                <Mail size={16} /> {/* Email Icon */}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
