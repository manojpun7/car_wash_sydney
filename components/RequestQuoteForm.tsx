"use client";

import React, { useState } from 'react';

// Define the core blue color based on the image for consistency
const PRIMARY_BLUE = '#0c55a6';

/**
 * A form component for requesting a quote from a moving service.
 * It uses React's useState for form data management and is styled with Tailwind CSS.
 */
const RequestQuoteForm: React.FC = () => {
    // State to hold the form input values
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        movingFrom: "",
        movingTo: "",
        message: "",
    });

    /**
     * Handles changes to any form input (text, tel, textarea).
     * @param e - The change event from the input or textarea element.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /**
     * Handles the form submission event.
     * @param e - The form submission event.
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Log the data (for development/testing)
        console.log("Form submitted:", formData);
      
        setFormData({
            fullName: "",
            phone: "",
            movingFrom: "",
            movingTo: "",
            message: "",
        });
    };

    return (
        // The outer container for styling: white background, rounded corners, shadow, and max width.
        <div className="bg-white p-6  sm:p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto">
            
            {/* Form Title */}
            <h3 className="text-2xl font-bold mb-6" style={{ color: PRIMARY_BLUE }}>
                REQUEST A QUOTE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name Input */}
                <div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c55a6] focus:border-[#0c55a6] text-gray-700 placeholder-gray-500 transition duration-150"
                        aria-label="Full Name"
                        required
                    />
                </div>

                {/* Your Phone Input */}
                <div>
                    <input
                        type="tel" // 'tel' is semantically appropriate for phone numbers
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c55a6] focus:border-[#0c55a6] text-gray-700 placeholder-gray-500 transition duration-150"
                        aria-label="Your Phone Number"
                        required
                    />
                </div>

                {/* Moving From / Moving To Inputs (Side-by-side) */}
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="movingFrom"
                        placeholder="Moving From"
                        value={formData.movingFrom}
                        onChange={handleChange}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c55a6] focus:border-[#0c55a6] text-gray-700 placeholder-gray-500 transition duration-150"
                        aria-label="Moving From Location"
                    />
                    <input
                        type="text"
                        name="movingTo"
                        placeholder="Moving To"
                        value={formData.movingTo}
                        onChange={handleChange}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c55a6] focus:border-[#0c55a6] text-gray-700 placeholder-gray-500 transition duration-150"
                        aria-label="Moving To Location"
                    />
                </div>

                {/* Message Textarea */}
                <div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6} // Defines the textarea height
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c55a6] focus:border-[#0c55a6] text-gray-700 placeholder-gray-500 transition duration-150 resize-none" // resize-none prevents user resizing
                        aria-label="Message"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white transition duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
                    style={{ backgroundColor: PRIMARY_BLUE }} // Uses the defined primary blue color
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RequestQuoteForm;