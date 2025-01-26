import {useState} from 'react';
import {motion} from 'framer-motion';

const years = ['2024', '2023', '2022', '2021'];
const files = [
    ['learning-framer-motion.md', 'certified-azure.md', 'building-micro-interactions.md', 'new-projects-ideas.md'],
    ['year-in-review.md', 'marathon-training-log.md', 'recipe-collection.md', 'book-reflections.md'],
    ['learning-to-meditate.md', 'spring-garden-plans.md', 'travel-wishlist.md', 'new-coding-projects.md'],
    ['goals-and-aspirations.md', 'daily-gratitude.md', 'learning-to-cook.md', 'remote-work-journal.md'],
];

function App() {
    const [selectedYear, setSelectedYear] = useState('2024');
    const [isRadiusEnabled, setIsRadiusEnabled] = useState(true);

    const selectedIndex = years.indexOf(selectedYear);

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
            <button
                onClick={() => setIsRadiusEnabled(!isRadiusEnabled)}
                className="mb-12 px-4 py-2 bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
            >
                {isRadiusEnabled ? 'Disable' : 'Enable'} Radius
            </button>

            <div className={`w-full max-w-2xl bg-gray-100 ${isRadiusEnabled ? 'rounded-2xl' : 'rounded-none'} overflow-hidden`}>
                <div className="relative">
                    <div className="flex relative">
                        <motion.div
                            className={`absolute h-full bg-white ${isRadiusEnabled && 'rounded-t-2xl'}`}
                            initial={false}
                            animate={{
                                width: '25%',
                                x: `${selectedIndex * 100}%`,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30
                            }}
                            style={{width: '25%'}}
                        />

                        {/* Tabs */}
                        {years.map((year, index) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`
                  relative z-10 flex-1 py-4 text-center transition-colors cursor-pointer
                  ${selectedYear === year ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}
                  ${isRadiusEnabled ? `
                    ${index === 0 && 'rounded-tl-2xl'}
                    ${index === years.length - 1 && 'rounded-tr-2xl'}
                  ` : ''}
                `}
                            >
                                {year}
                            </button>
                        ))}

                    </div>
                </div>

                {/* Content */}
                <div className={`bg-white p-6 ${isRadiusEnabled && 'rounded-2xl'} -mt-3`}>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3}}
                        key={selectedYear}
                    >
                        {files[selectedIndex].map((file, index) => (
                            <div
                                key={index}
                                className="py-3 border-b mx-1 md:mx-11 my-3 border-gray-200 text-gray-700"
                            >
                                {file}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

export default App;