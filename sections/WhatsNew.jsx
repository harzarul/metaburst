'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const WhatsNew = () => (
   <section className={`${styles.paddings} relative z-10`}>
    <motion.div className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount: 0.25}}
      >
      <motion.div className='flex-[0.75] flex justify-center flex-col'
        variants={fadeIn('right','tween', 0.2, 1)}>
        <TypingText title='| What New?' textStyles='text-start'/>
        <TitleText title={<>What's new about Metaversus?</>}/>
        <div className='mt-[31px] flex flex-wrap justify-around gap-[24px]'>
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div className={`flex-1 ${styles.flexCenter}`}
        variants={planetVariants('right')}>
        <img className='w-[90%] h-[90%] object-contain'
          src="/whats-new.png"
          alt="planet" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
