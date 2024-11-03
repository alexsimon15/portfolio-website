"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
                After graduating with a degree in{" "}
                <span className='font-medium'>Management</span>, I decided to
                pursue my passion for programming. I finished a coding bootcamp,
                learned <span className='font-medium'>web development</span> and
                eventually found my first job.{" "}
                <span className='italic'>My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className='underline'>love</span> the feeling of finally
                figuring out a solution to a problem. My core technology is{" "}
                <span className='font-medium'>React</span> but I am always
                looking to learn new technologies. I am currently looking for a{" "}
                <span className='font-medium'>full-remote position</span> as a
                front-end developer.
            </p>
        </motion.section>
    );
}
