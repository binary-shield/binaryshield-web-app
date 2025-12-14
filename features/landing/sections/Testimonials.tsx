"use client";

import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-accent/20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Kisah Sukses Klien
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Lihat bagaimana kami membantu bisnis seperti Anda mengatasi tantangan
            dan mencapai tujuan mereka.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Testimonial 1 */}
          <motion.div variants={itemVariants}>
            <TestimonialCard
              text="Tim keamanan siber sangat membantu dalam memperkuat pertahanan kami. Pengujian penetrasi mereka mengungkap kerentanan kritis yang tidak akan pernah kami temukan. Kami merasa jauh lebih aman sekarang."
              name="Sarah Johnson"
              title="CTO, FinTech Innovators"
            />
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div variants={itemVariants}>
            <TestimonialCard
              name="Michael Chen"
              title="CEO, TechStart Solutions"
              text="Konsultasi DevOps mereka mengubah cara kami bekerja. Pipeline deployment kami sekarang 5x lebih cepat dan lebih reliable. Investasi terbaik yang pernah kami buat untuk tim engineering."
            />
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div variants={itemVariants}>
            <TestimonialCard
              text="Migrasi cloud kami berjalan sempurna berkat tim yang berpengalaman. Mereka memahami kebutuhan bisnis kami dan memberikan solusi yang scalable dan cost-effective."
              name="Diana Putri"
              title="IT Director, Global Commerce"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
