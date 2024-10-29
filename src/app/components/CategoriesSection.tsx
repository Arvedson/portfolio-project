// components/CategoriesSection.tsx
import Link from 'next/link';
import React, { useState } from 'react';

interface Category {
    name: string;
    link: string;
    sublinks?: Sublink[];
}

interface Sublink {
    name: string;
    link: string;
}

interface CategoriesSectionProps {
    categories: Category[];
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories }) => {
    const [visibleDropdown, setVisibleDropdown] = useState<number | null>(null);

    const handleCategoryClick = (index: number) => {
        // Alterna la visibilidad del dropdown del botón seleccionado
        setVisibleDropdown((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="relative">
                        <button
                            onClick={() => handleCategoryClick(index)}
                            className="bg-[var(--accent-light)] text-[var(--foreground-light)] py-2 px-4 rounded-full hover:bg-[var(--accent-dark)] transition-colors duration-300"
                        >
                            {category.name}
                        </button>

                        {/* Dropdown de subcategorías */}
                        {category.sublinks && visibleDropdown === index && (
                            <div className="absolute bg-white shadow-lg mt-1 rounded-md mt-4 z-50">
                                {category.sublinks.map((sublink, subIndex) => (
                                    <Link key={subIndex} href={sublink.link} legacyBehavior>
                                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            {sublink.name}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriesSection;
