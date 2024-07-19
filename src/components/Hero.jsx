import React from 'react';
import {HERO_CONTENT} from "../constants";
import PrfilePic from "../assets/Profile.png";
import { motion } from "framer-motion";
import { delay } from 'framer-motion/dom';

const container =(delay) =>({
    hidden:{x:-100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:0.5,delay}}
})

function Hero() {
  return (
    <div  className="border-b border-neutral-900 pb-4 lg:mb-20">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                     variants={container(0)}
                     initial="hidden"
                     animate="visible"
                    className="pb-16 text=6xl font-thin tracking-tight lg:mt-16 lg:text-8xl mb-8">Ishara Tharindu</motion.h1>
                    <motion.span variants={container(0.5)}
                     initial="hidden"
                     animate="visible"
                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-2">
                        Full Stack Developer
                    </motion.span>
                    <motion.p
                    variants={container(1.5)}
                    initial="hidden"
                    animate="visible"
                     className="my-4 max-w-xl py-6 font-light tracking-tighter mb-60">{HERO_CONTENT} </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center ">
                    <motion.img 
                    initial={{x:+100,opacity:0}}
                    animate={{x:1,opacity:1}}
                    transition={{delay:0.5,duration:1.2}}
                    src={PrfilePic} alt="" width={600}/>

                </div>
            </div>

        </div>
       
    </div>
  )
}

export default Hero
