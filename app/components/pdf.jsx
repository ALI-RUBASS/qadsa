"use client";

import { useState } from "react";

export default function PdfCard() {
  const [isOpen, setIsOpen] = useState(false);
  const pdfUrl = "https://transknit.shop/qadsa.pdf"; // replace with your actual PDF path

  return (
    <div className="flex justify-center items-center bg-gray-900 mb-10">
      {/* PDF Preview Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="max-w-sm cursor-pointer bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105"
      >
        <img
          src="https://transknit.shop/qadsa-preview.png" // Add a static thumbnail in /public
          alt="PDF Preview"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-white text-center">
          <h2 className="text-lg font-semibold mb-2">Qadsa Noor</h2>
          <p className="text-sm text-gray-300">
            Full Stack Software Engineer (Resume)
          </p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative bg-white rounded-xl overflow-hidden w-11/12 md:w-3/4 h-5/6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-black text-xl font-bold"
            >
              ×
            </button>
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              frameBorder="0"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
