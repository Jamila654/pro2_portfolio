"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const toggleLinks = () => {
    setIsSheetVisible((prev) => !prev);
  };
  return (
    <div className="navbar">
      <div className="title">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        >
          Portfolio
        </motion.div>
      </div>
      <div className="links hidden sm:flex">
        <motion.div
          animate={{ x: 100 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        >
          <div className="all-links">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <a href="#">Home</a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <a href="#about">About</a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <a href="#edu">Projects</a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <a href="#contact">Contact</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="toggle sm:hidden">
        <div className="button" onClick={toggleLinks}>
          <GiHamburgerMenu className="text-[#459fab] mt-[50px] size-10 cursor-pointer hover:opacity-65" />
        </div>
        {isSheetVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="small-all-links bg-white text-center text-[#459fab] flex flex-col gap-2"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a href="#">Home</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a href="#about">About</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a href="#edu">Projects</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a href="#contact">Contact</a>
            </motion.div>
          </motion.div>
        )}
      </div>
        </div>

  );
}
