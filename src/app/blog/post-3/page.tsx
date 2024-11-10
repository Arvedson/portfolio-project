'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Post3Page() {
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

    const imageVariants = {
        offscreen: { opacity: 0, y: 50 },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <section className=" bg-gradient-to-r from-[var(--secondary-light)] to-[var(--primary)] text-white p-8 rounded-xl shadow-lg mb-10 lg:mb-24 lg:mx-auto lg:w-3/4">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">{t('title')}</h1>
                <p className="text-lg lg:text-xl text-center max-w-md lg:max-w-3xl mx-auto">{t('subtitle')}</p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:prose-lg dark:prose-dark max-w-full lg:max-w-4xl mx-auto mb-12 space-y-6">
                <div className='flex flex-col justify-between space-y-4'>
                    <h2 className="font-bold mb-2">{t('intro_title')}</h2>
                    <p className='mb-2'>{t('intro')}</p>
                    <motion.div variants={imageVariants} initial="offscreen" whileInView="onscreen" className=" rounded-xl shadow-lg dark:brightness-75 overflow-hidden">
                        <Image src="/mine.webp" alt="Fantastical Mine Cavern" width={800} height={800} layout="responsive" />
                    </motion.div>

                </div>

                <div className='flex flex-col justify-between space-y-4'>
                    <p className='lg:mt-20'>{t('challenges')}</p>
                    <motion.div variants={imageVariants} initial="offscreen" whileInView="onscreen">
                        <Image src="/stairs.webp" alt="High Staircase to Technology" width={800} height={800} className=" rounded-xl shadow-lg dark:brightness-75" />
                    </motion.div>
                </div>

                <div className='flex flex-col justify-between space-y-4'>
                    <p>{t('last_chance')}</p>
                    <p>{t('physical_mental_limits')}</p>
                    <motion.div variants={imageVariants} initial="offscreen" whileInView="onscreen">
                        <Image src="/programar.webp" alt="Technological World Exit" width={800} height={800} className=" rounded-xl shadow-lg dark:brightness-75" />
                    </motion.div>
                </div>

                <div className='flex flex-col justify-between space-y-4'>
                    <p>{t('motivation')}</p>
                    <motion.div variants={imageVariants} initial="offscreen" whileInView="onscreen">
                        <Image src="/pensamiento.webp" alt="Cosmic Motivation" width={800} height={800} className="  rounded-xl shadow-lg dark:brightness-75 mb-6" />
                    </motion.div>
                    <p>{t('philosophy')}</p>
                </div>
            </section>



            <section className="prose lg:prose-lg dark:prose-dark max-w-full lg:max-w-4xl mx-auto  mt-12">
    <div className='flex flex-col justify-center space-y-4'>
        <h2 className="font-bold mb-2 text-center">{t('blogPostTitle')}</h2>
        <p className='mb-2 text-center'>{t('blogPostSubtitle')}</p>
        <p className='mb-2'>{t('introParagraph')}</p>
    </div>

    <div className='flex flex-col justify-center space-y-4'>
        <p className='mb-2'>{t('challengeParagraph')}</p>
        <motion.div variants={imageVariants} initial="offscreen" whileInView="onscreen" className="flex justify-center pb-6">
            <Image src="/imagen1.webp" alt="Technological World Exit" width={800} height={800} className="rounded-xl shadow-lg dark:brightness-75" />
        </motion.div>
    </div>

    <div className='flex flex-col justify-center space-y-4'>
        <p className='mb-2'>{t('technologyDiscovery')}</p>
        <p className='mb-2'>{t('codingStart')}</p>
        <p className='mb-2'>{t('codingChallenges')}</p>
        <motion.div variants={imageVariants} initial="offscreen" whileInView="onscreen" className="flex justify-center pb-6">
            <Image src="/imagen2.webp" alt="Technological World Exit1" width={800} height={800} className=" rounded-xl shadow-lg dark:brightness-75" />
        </motion.div>
    </div>

    <div className='flex flex-col justify-center space-y-4'>
        <p className='mb-2'>{t('udemyExperience')}</p>
        <p className='mb-2'>{t('learningHTMLCSS')}</p>
        <p className='mb-2'>{t('designLearning')}</p>
        <motion.div variants={imageVariants} initial="offscreen" whileInView="onscreen" className="flex justify-center pb-6">
            <Image src="/imagen3.webp" alt="Technological World Exit2" width={800} height={800} className=" rounded-xl shadow-lg dark:brightness-75" />
        </motion.div>
        <p className='mb-2'>{t('projectFailures')}</p>
        <p className='mb-2'>{t('firstWebApp')}</p>
        <p className='mb-2'>{t('reflectionOnJourney')}</p>
        <motion.div variants={imageVariants} initial="offscreen" whileInView="onscreen" className="flex justify-center">
            <Image src="/imagen4.webp" alt="Technological World Exit3" width={800} height={800} className=" rounded-xl shadow-lg dark:brightness-75 " />
        </motion.div>
    </div>
</section>


            
        </div>
    );
}
