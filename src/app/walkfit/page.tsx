"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function WalkFit() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);    

    return (
        <div className="bg-[#f6f5f0] text-[#004459]">
          {/* Header */}
          <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Walkfit - Inclusion in Motion</h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto">
              A unique walking initiative that pairs sighted and non-sighted people to experience the world together - 
              one step at a time.
            </p>
          </header>
    
          {/* Video */}
          <section className="py-12 px-6">
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
                <div className="w-full" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                    src="https://www.youtube.com/embed/nR8i8WTRJS8"
                    title="Liz on CNN's United Shades of America"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
          </section>

    
          {/* Text and Image */}
          <section className="flex flex-col lg:flex-row gap-8 px-6 lg:px-24 py-16 items-start">
            {/* Text */}
            <div className="flex-1 space-y-6 text-lg leading-relaxed" data-aos="fade-up">
            <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
                <h2 className="text-2xl font-bold text-[#004459] mb-4">
                What is Walkfit?
                </h2>
                <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                Walkfit is a unique walking initiative created in 2015 by a Visually Impaired Person (VIP) and an optometry student.
                Walkfit pairs a person who is sighted with a person who is non-sighted and just like it sounds, "we walk."  
                But that is not all. Walkfit is much more than that. Walkfit is a way to experience the world differently.  It's
                about community, connection, and changing perspectives.
                </p>
            </div>

            <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
                <h2 className="text-2xl font-bold text-[#004459] mb-4">
                Where and when does Walkfit take place?
                </h2>
                <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                The location where the walks occur vary from week to week. The walks take place primarily on a Saturday,
                usually in the morning in the City of Worcester proper. Walkfit has a laser focus on inclusion and
                accessibility so that people of all backgrounds, all ages, and all abilities can partake if they so choose.
                There is usually an out of door component to each walk and therefore walks are weather dependent. That being
                said, Walkfit does have access to a few indoor spaces so that we do not necessarily have to cancel a walk due
                to inclement weather. We simply "go in" rather than "go out."
                </p>
            </div>

            <div className="text-center lg:text-left mb-10 lg:mb-0 px-6 py-4 lg:px-12">
                <h2 className="text-2xl font-bold text-[#004459] mb-4">
                How do I sign up for Walkfit?
                </h2>
                <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                If you or anyone you know is interested in Walkfit, reach out to VIP Liz by email at <a href="mailto:lizmyska@gmail.com?subject=Walkfit Sign-Up&body=Hi Liz, I'm interested in joining Walkfit.">
                    lizmyska@gmail.com</a>.  Be sure to identify yourself and your interest in Walkfit in the
                email. Please note that you must sign up in advance of a walk.
                </p>
            </div>
            </div>
    

            {/* Image */}
            <div className="flex-shrink-0 w-full lg:w-[400px]" data-aos="fade-up" data-aos-delay="200">
              <img
                src="LizAndWalkfitPioneer.jpeg"
                alt="Walkfit in Action"
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            </div>
          </section>
    
          {/* Google Calendar */}
          <section className="py-12 px-6 bg-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center text-[#004459] mb-6">Upcoming Walkfit Events</h2>
            <div className="max-w-4xl mx-auto">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=idealizmwebsite%40gmail.com&ctz=America%2FNew_York"
                style={{ border: 0 }}
                className="w-full h-[600px] rounded-xl shadow-md"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </section>
        </div>
    );
}