"use client";
import CourseData from "../data/music_courses.json";
import React from "react";
import Link from "next/link";
import { GlareCard } from "./ui/glare-card";

import { Url } from "next/dist/shared/lib/router/router";


interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image:Url;
}

function FeaturedCourses() {
  const featuredCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <GlareCard className="flex flex-col items-center justify-center">
              
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    
                  <p className=" z-10 font-bold text-lg sm:text-xl mt-4 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    {course.title}
                  </p>
                  <p className="z-10 mt-3 text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <img
                    className=" h-full w-full absolute inset-0 object-cover "
                    src={(course.image)} layout='responsive' alt='Dynamic Image'
                    />
                  <Link className="z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" href={`/courses/${course.slug}`}>Learn more</Link>

                  
                </div>
              </GlareCard>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href="/courses">View All courses</Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
