'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const RequestQuote = () => {
  return (
    <section className="py-10 md:py-10">
        <div className="container max-w-6xl px-4 md:px-8">
          <motion.div 
            className="text-center rounded-2xl py-16 px-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, hsl(var(--accent)), hsl(var(--background)))'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: 'hsl(var(--primary) / 0.05)' }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.h2 
              className="text-3xl md:text-4xl font-bold font-headline mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Build Your AI Solution?
            </motion.h2>
            <motion.p 
              className="text-lg max-w-2xl mx-auto mb-8 relative z-10"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's discuss your project requirements and build a custom implementation roadmap.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                <Button className="btn-primary-custom h-11 px-8 text-base">
                  For Inquiry
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Button>
                    </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Button  className=" btn-primary-custom h-11 px-8 text-base border-2">
                  View Portfolio
                </Button> */}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

export default RequestQuote