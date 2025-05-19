import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import Link from 'next/link';
import Image from 'next/image'; // Importing Image from Next.js for optimized images

// Dummy data for projects - replace with actual data source later
const projects = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Project Name ${i + 1}`,
  description: 'A short description of the project and the goals it fills. This should be brief. Lorem ipsum dolor sit amet.',
  imageUrl: '/PlaceholderImage.png', // Use a placeholder image path
  link: `/portfolio/project-${i + 1}`, // Example link
}));

const ShowcaseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          A Showcase of Our Work
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              {/* Image Placeholder */}
              <div className="aspect-square w-full relative"> {/* Added relative positioning */}
                <Image
                  src={project.imageUrl}
                  alt={`Image for ${project.name}`} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-t-lg" 
                />
              </div>
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{project.description}</p>
                <Button asChild className="w-full mt-auto bg-black text-white hover:bg-gray-800">
                  <Link href={project.link}>View This Project</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center items-center space-x-2 text-sm text-gray-600">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <span className="px-2 py-1 rounded bg-gray-200 text-gray-800">1</span>
          <Button variant="ghost" size="sm" className="px-2 py-1">2</Button>
          <Button variant="ghost" size="sm" className="px-2 py-1">3</Button>
          <span>...</span>
          <Button variant="ghost" size="sm" className="px-2 py-1">5</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
