const OfficeHours = () => {
    return (
        // Added max-width, centering, and padding
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col items-center text-center gap-5">
            {/* Responsive text size */}
            <h3 className="text-2xl sm:text-3xl font-bold">Office Hours</h3>
            {/* Responsive text size and added subtle text color */}
            <div className="text-lg sm:text-xl text-gray-600">
                <p>Mon - Thu: 7:15 - 16:15</p>
                <p>Fri: 7:15 - 13:00</p>
                <p>Closed on Weekends</p>
            </div>

        </div>
     );
}
 
export default OfficeHours;
