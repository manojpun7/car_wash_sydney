import React from 'react';


const SloganBanner: React.FC = () => {
    return (
        // Outer container for the full-width background color
        <div className="bg-[#044E9E] w-full">

            {/* Inner container to center the content (max-w-7xl) and apply vertical/horizontal padding */}
            <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">

                <p
                    className="text-center text-sm font-medium tracking-wide"
                    // We use inline style only for the custom hex color that is not a standard Tailwind utility
                    style={{
                        color: '#fdb813', // A golden-yellow color for the text
                    }}
                >
                    Instant Cash Paid From $200 for Unwanted Cards
                </p>
            </div>
        </div>
    );
};

export default SloganBanner;