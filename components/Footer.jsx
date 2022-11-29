'use client';

import {motion} from 'framer-motion';
import {socials} from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer className={`${styles.xPaddings} py-8 relative`}
    variants={footerVariants}
    initial='hidden'
    whileInView='show'>
    <div className='footer-gradient'/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
          Enter The Metaverse
        </h4>
        <button className='flex items-center h-fit py-4 px-6 bg-[#256188] rounded-[32px] gap-[12px]'
          type='button'>
          <img className='w-[24px] h-[24px] object-contain'
            src="/headset.svg"
            alt="headset" />
          <span className='font-normal texxt-[16px] text-white'>
            Enter Metaverse
          </span>
        </button>
      </div>

      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10'/>
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h4 className='font-extrabold text-[24px] text-white'>
            Metaverse
          </h4>
          <p className='font-normal text-[14px] text-white opacity-50'>
            Copyright © 2021 - 2022 Metaburst. All rights reserved.
          </p>
          <div className='flex gap-4'>
            {socials.map((icon,index) => (
              <img className='w-[24px] h-[24px] object-contain cursor-pointer'
                src={icon.url}
                alt={icon.name}
                key={icon.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
