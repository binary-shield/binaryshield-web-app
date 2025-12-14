"use client";

import { motion } from "framer-motion";
import { Shield, GitBranch, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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

export function Hero() {
  return (
    <section className="py-24 md:py-40 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground max-w-5xl leading-[1.1] font-heading"
          >
            <span className="text-primary">Amankan</span> &{" "}
            <span className="text-secondary">Kembangkan</span>
            <br />
            Bisnis Anda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Solusi IT profesional untuk keamanan siber, DevOps, dan cloud infrastructure.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Cybersecurity */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-card/40 backdrop-blur-xl border-border/40 hover:bg-card/60 transition-all duration-500 ease-out flex flex-col rounded-3xl overflow-hidden group hover:scale-[1.02]">
              <CardHeader className="pb-4">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <Shield className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl text-foreground font-heading font-semibold">
                  Keamanan Siber
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  Layanan keamanan komprehensif untuk melindungi data berharga,
                  infrastruktur, dan reputasi Anda dari ancaman siber yang terus berkembang.
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-6 font-medium text-base">
                  Pelajari Lebih Lanjut
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Card 2: DevOps Consulting */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-card/40 backdrop-blur-xl border-border/40 hover:bg-card/60 transition-all duration-500 ease-out flex flex-col rounded-3xl overflow-hidden group hover:scale-[1.02]">
              <CardHeader className="pb-4">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-500">
                  <GitBranch className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl text-foreground font-heading font-semibold">
                  Konsultasi DevOps
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  Sederhanakan alur pengembangan Anda, percepat siklus rilis,
                  dan tingkatkan kualitas kode dengan praktik DevOps ahli kami.
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-6 font-medium text-base">
                  Pelajari Lebih Lanjut
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Card 3: Cloud Solutions */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-card/40 backdrop-blur-xl border-border/40 hover:bg-card/60 transition-all duration-500 ease-out flex flex-col rounded-3xl overflow-hidden group hover:scale-[1.02]">
              <CardHeader className="pb-4">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                  <Cloud className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl text-foreground font-heading font-semibold">
                  Solusi Cloud
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  Manfaatkan kekuatan penuh cloud untuk membangun, menerapkan,
                  dan mengelola aplikasi yang scalable, tangguh, dan hemat biaya.
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-6 font-medium text-base">
                  Pelajari Lebih Lanjut
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
