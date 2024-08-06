"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-1 items-center justify-center bg-[#EBEBEB]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={"./images/logo/logoKwm.svg"}
          alt="loading"
          sizes="100vh"
          width={400}
          height={400}
        />
      </motion.div>
    </div>
  );
}
