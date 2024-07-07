import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";
import { SiPhp } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <h1 className="my-20 text-4xl ">Technologies </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <FaCss3Alt className="text-7xl text-cyan-800"/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <SiPhp className="text-7xl text-cyan-400"/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <IoLogoJavascript className="text-7xl text-yellow-400"/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <BsFiletypeSql className="text-7xl text-orange-700"/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <FaJava className="text-7xl text-orange-300"/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <TbBrandKotlin className="text-7xl text-cyan-400"/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <RiReactjsLine className="text-7xl text-cyan-400"/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <SiMongodb className="text-7xl text-green-500"/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <FaNodeJs className="text-7xl text-green-500"/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(1.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <FaPython className="text-7xl text-yellow-200 "/> 
        </motion.div>
        <motion.div 
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"> 
          <SiSpringboot className="text-7xl text-green-400"/> 
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
