import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming Button component exists
import GetInTouch from '@/app/comps/GetInTouch'; // Assuming GetInTouch component exists

// Define an interface for project data (replace with actual data structure)
interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  tags: string[];
  heroImageUrl: string;
  opportunityText: string;
  opportunityImageUrl: string;
  whatWeDidText: string;
  whatWeDidImageUrl: string;
  outcomeText: string;
  outcomeImageUrl: string;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  nextProject?: {
    id: string;
    title: string;
    imageUrl: string;
  };
}

// Placeholder function to get project data by ID
const getProjectData = (id: string): ProjectData | null => {
  if (id === 'project-1') {
    return {
      // ... (your existing dummy data)
      id: 'project-1',
      title: 'Project Name Here',
      shortDescription: 'Brief overview of the project goals, challenges, and solutions provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['PLC', 'HMI', 'SCADA', 'System Integration'],
      heroImageUrl: '/PlaceholderImage.png',
      opportunityText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      opportunityImageUrl: '/PlaceholderImage.png',
      whatWeDidText: 'Excepteur sint occaecat cupidatat non proident...',
      whatWeDidImageUrl: '/PlaceholderImage.png',
      outcomeText: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur...',
      outcomeImageUrl: '/PlaceholderImage.png',
      testimonial: {
        quote: '"Automation Works delivered exceptional results, exceeding our expectations. Their expertise and dedication were invaluable."',
        author: 'Satisfied Client',
        company: 'Client Company Inc.',
      },
      nextProject: {
        id: 'project-2',
        title: 'Next Project Title',
        imageUrl: '/PlaceholderImage.png',
      },
    };
  }
  return null;
};

// The Page component - MODIFIED PROPS
const ProjectPage = ({ params }: { params: { id: string } }) => { // Changed here
  const project = getProjectData(params.id);

  if (!project) {
    return <div className="container mx-auto px-4 py-16 text-center">Project not found.</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[60vh] w-full bg-gray-200">
        <Image
          src={project.heroImageUrl}
          alt={`${project.title} Hero Image`}
          fill // Use fill instead of layout="fill" for modern Next.js
          style={{ objectFit: "cover" }} // Use style for objectFit with fill
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Project Header */}
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">{project.shortDescription}</p>
        <div className="flex justify-center space-x-2">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 space-y-16 md:space-y-24 pb-16 md:pb-24">
        {/* The Opportunity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">The Opportunity</h2>
            <p className="text-gray-700 leading-relaxed">{project.opportunityText}</p>
          </div>
          <div className="order-2 relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image src={project.opportunityImageUrl} alt="Opportunity Image" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        {/* What We Did */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image src={project.whatWeDidImageUrl} alt="What We Did Image" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">What We Did</h2>
            <p className="text-gray-700 leading-relaxed">{project.whatWeDidText}</p>
          </div>
        </div>

        {/* The Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">The Outcome</h2>
            <p className="text-gray-700 leading-relaxed">{project.outcomeText}</p>
          </div>
          <div className="order-2 relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image src={project.outcomeImageUrl} alt="Outcome Image" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>

      {/* Testimonial Section (Optional) */}
      {project.testimonial && (
        <div className="bg-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C6.387 8 4 10.387 4 13.333v8C4 24.28 6.387 26.667 9.333 26.667H12V16H8v-2.667C8 11.493 9.493 10 11.333 10V8H9.333zm13.334 0C19.72 8 17.333 10.387 17.333 13.333v8c0 2.947 2.387 5.334 5.334 5.334H28V16h-4v-2.667c0-1.84 1.493-3.333 3.333-3.333V8h-2z" />
            </svg>
            <p className="text-xl md:text-2xl italic text-gray-800 mb-6">{project.testimonial.quote}</p>
            <p className="font-semibold text-gray-900">{project.testimonial.author}</p>
            <p className="text-sm text-gray-600">{project.testimonial.company}</p>
          </div>
        </div>
      )}

      {/* Next Project Section (Optional) */}
      {project.nextProject && (
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h3 className="text-center text-2xl font-semibold text-gray-900 mb-8">Next Project</h3>
          <Link href={`/portfolio/${project.nextProject.id}`} className="block group relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <Image src={project.nextProject.imageUrl} alt={`${project.nextProject.title} Image`} fill style={{ objectFit: "cover" }} className="transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl font-semibold">{project.nextProject.title}</span>
            </div>
          </Link>
        </div>
      )}

      {/* Get In Touch Section */}
      <GetInTouch />
    </div>
  );
};

export default ProjectPage;