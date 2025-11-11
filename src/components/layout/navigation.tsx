import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">Brand</Link>
                </div>
                <div className="space-x-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;