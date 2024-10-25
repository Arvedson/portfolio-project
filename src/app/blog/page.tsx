'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Image from 'next/image';

interface Post {
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

interface Category {
  name: string;
  link: string;
}


export default function Blog() {
  const { t } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  // Extract posts and categories from translation files
  const posts: Post[] = t('posts', { returnObjects: true }) as Post[];
  const categories: Category[] = t('categories_list', { returnObjects: true }) as Category[];
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] p-8 rounded-lg shadow-md mb-12">
        <h1 className="text-5xl font-bold mb-4 text-center">{t('blog_title')}</h1>
        <p className="text-xl text-center max-w-2xl mx-auto">{t('blog_intro')}</p>
      </div>

      {/* Featured Blog Posts Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">{t('featured_posts')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {/* Map over the posts array */}
          {posts.map((post, index) => (
            <div key={index} className=" dark:bg-[var(--secondary-dark)] dark:text-[var(--foreground-dark)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-110 transition-transform cursor-pointer ">
              <Image
                src={post.image} // Dynamic image source
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-t-md mb-4"
              />
              <h3 className="text-2xl font-bold mb-2  ">{post.title}</h3>
              <p className=" text-[var(--foreground)] mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-[var(--foreground)] hover:text-[var(--primary-dark)]">{t('read_more')}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">{t('categories')}</h2>
        <div className="flex flex-wrap gap-4">
          {/* Map over the categories array */}
          {categories.map((category, index) => (
            <a key={index} href={category.link}
              className="bg-[var(--accent-light)] text-[var(--foreground-light)] py-2 px-4 rounded-full hover:bg-[var(--accent-dark)] transition-colors duration-300 dark:bg-[var(--primary-dark)] dark:text-[var(--foreground-dark)] dark:hover:bg-[var(--accent-dark)]">
              {category.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
