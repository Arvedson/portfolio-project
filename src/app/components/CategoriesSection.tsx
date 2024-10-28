// components/CategoriesSection.tsx
import Link from 'next/link';
import React from 'react';

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
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="group relative">
                        <Link href={category.link} legacyBehavior>
                            <a className="bg-[var(--accent-light)] text-[var(--foreground-light)] py-2 px-4 rounded-full hover:bg-[var(--accent-dark)] transition-colors duration-300">
                                {category.name}
                            </a>
                        </Link>
                        {/* Subcategories Dropdown */}
                        {category.sublinks && (
                            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded-md">
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
