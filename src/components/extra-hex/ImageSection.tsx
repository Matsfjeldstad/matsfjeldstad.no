'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

import extrahexPortfolio from '@/assets/extrahex-portfolio-blank.png';
import extrahexPortfolioComponent from '@/assets/extrahex-portfolio-component.png';
import React, { useRef } from 'react';
import Image from 'next/image';

type Props = {};

export default function ImageSection({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const x = useTransform(scrollYProgress, [0.4, 0.55], ['50%', '0%']);
  const scale = useTransform(scrollYProgress, [0.4, 0.55], [1.4, 1]);

  return (
    <motion.div style={{ opacity }} ref={ref} className="mt-40 hidden justify-center md:flex">
      <div className="flex h-[350vh] w-screen justify-center overflow-x-clip">
        <div className="sticky inset-0 flex h-screen items-center justify-center">
          <div className="pointer-events-none relative rounded-md">
            <motion.div style={{ opacity: imageOpacity }}>
              <Image
                src={extrahexPortfolio}
                alt="extrahex.com"
                className="h-full w-full rounded-md object-cover object-left-top"
              />
            </motion.div>
            <motion.div style={{ scale, x, opacity: imageOpacity2 }}>
              <Image
                src={extrahexPortfolioComponent}
                alt="extrahex.com"
                className="absolute -bottom-2 left-[9.2%] z-50 w-[82%] rounded-md object-cover object-left-top"
              />
            </motion.div>
          </div>
          <motion.div style={{ opacity: textOpacity }} className="absolute left-0 max-w-lg p-4">
            <div className="text-xl [text-wrap:balance]">Track your HEX and Pulsechain portfolio with Extrahex.com</div>
            <div className="mt-4 leading-7 text-gray-400">
              Extrahex.com is a portfolio tracker for HEX and Pulsechain. It allows users to track their HEX and
              Pulsechain portfolio, view their staking history, and monitor their staking performance. Extrahex.com is a
              dApp built on top of the Ethereum and Pulsechain blockchains. It is a React application that utilizes the
              Wagmi and Viem libraries to interact with the Ethereum and Pulsechain blockchains. Extrahex.com is a fully
              responsive application that is optimized for mobile, tablet, and desktop devices.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
