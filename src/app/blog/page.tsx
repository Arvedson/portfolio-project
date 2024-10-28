'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Image from 'next/image';

import CategoriesSection from '../components/CategoriesSection';

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

    // Set the language from local storage
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }



    


  }, []);

  // Prevent rendering until component is mounted to ensure access to browser APIs
  if (!mounted) {
    return null;
  }

  // Extract posts and categories from translation files
  const posts: Post[] = t('posts', { returnObjects: true }) as Post[];
  const categories: Category[] = t('categories_list', { returnObjects: true }) as Category[];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-8 rounded-lg shadow-md mb-12">
        <h1 className="text-5xl font-bold mb-4 text-center">{t('blog_title')}</h1>
        <p className="text-xl text-center max-w-2xl mx-auto">{t('blog_intro')}</p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">{t('featured_posts')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {posts.map((post, index) => (
            <div key={index} className="dark:bg-[var(--secondary-dark)] dark:text-[var(--foreground-dark)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-110 transition-transform cursor-pointer">
              <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-40 object-cover rounded-t-md mb-4" />
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-[var(--foreground)] mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-[var(--foreground)] hover:text-[var(--primary-dark)]">{t('read_more')}</a>
            </div>
          ))}
        </div>
      </section>

      <CategoriesSection categories={categories} />
      
    </div>
  );
}
