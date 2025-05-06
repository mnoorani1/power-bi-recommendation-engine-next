"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-2 sm:col-span-1 space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-amber-400">
            AMZ Consulting Pty Ltd
          </h2>
          <img src="/footer_logo.png" alt="AMZ Consulting" className="w-24 sm:w-32" />
          <p className="text-xs leading-relaxed text-white">
            Our holistic approach to Power BI encompasses both training and
            consulting, providing businesses with the tools they need to
            succeed.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-amber-400">Services</h2>
          <ul className="space-y-2 text-xs text-white">
            <li className="flex items-center space-x-2">
              <span>•</span>
              <a
                href="https://amzconsulting.com.au/contact/"
                className="hover:text-amber-400 transition-colors"
              >
                Power BI Consulting
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span>•</span>
              <a
                href="https://www.powerbitraining.com.au/"
                className="hover:text-amber-400 transition-colors"
              >
                Power BI Training & Coaching
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span>•</span>
              <a
                href="https://www.powerbitraining.com.au/"
                className="hover:text-amber-400 transition-colors"
              >
                Power Apps Training
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span>•</span>
              <a
                href="https://amzconsulting.com.au/contact/"
                className="hover:text-amber-400 transition-colors"
              >
                Power Apps Consulting
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span>•</span>
              <a
                href="https://amzconsulting.com.au/contact/"
                className="hover:text-amber-400 transition-colors"
              >
                Power Platform Consulting
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="col-span-2 sm:col-span-1 space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-amber-400">Contact Us</h2>
          <div className="space-y-3 text-xs">
            <div className="flex items-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-0.5 text-white flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-white">
                <p>AMZ Consulting Pty Ltd 212/14</p>
                <p>Lexington Dr, Bella Vista NSW 2153</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-white">+61 1300 194 753</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-white">
                info@amzconsulting.com.au
              </span>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-amber-400">Follow Us</h2>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.facebook.com/amzconsulting.com.au"
              className="bg-neutral-700 p-1.5 rounded hover:bg-neutral-600 transition-colors"
            >
              <svg
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@AMZConsultingPtyLtd/about"
              className="bg-neutral-700 p-1.5 rounded hover:bg-neutral-600 transition-colors"
            >
              <svg
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/amz-consulting-pty-ltd/"
              className="bg-neutral-700 p-1.5 rounded hover:bg-neutral-600 transition-colors"
            >
              <svg
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/amzconsulting.com.au/"
              className="bg-neutral-700 p-1.5 rounded hover:bg-neutral-600 transition-colors"
            >
              <svg
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-700 bg-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-xs text-white">
          <div>© Copyright {new Date().getFullYear()} - AMZ Consulting | All Rights Reserved</div>
          <div>
            Powered by{" "}
            <a href="https://queper.com.au" className="text-amber-400 hover:text-amber-300 transition-colors">
              Queper
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
