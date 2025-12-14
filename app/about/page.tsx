import { Target, Users, Zap, Shield, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Fokus Hasil",
      description:
        "Kami mengutamakan solusi yang memberikan dampak nyata untuk bisnis Anda.",
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description:
        "Menggunakan best practice industri untuk melindungi data dan sistem Anda.",
    },
    {
      icon: Zap,
      title: "Teknologi Terkini",
      description:
        "Selalu update dengan tools dan metodologi terbaru di industri IT.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Kami partner jangka panjang, bukan sekadar vendor teknologi.",
    },
  ];

  const stats = [
    { number: "500+", label: "Klien Bahagia" },
    { number: "1000+", label: "Proyek Selesai" },
    { number: "99.9%", label: "Jaminan Uptime" },
    { number: "24/7", label: "Dukungan Tersedia" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Pendiri",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "10+ tahun dalam kepemimpinan teknologi enterprise",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Ahli arsitektur cloud dan keamanan",
    },
    {
      name: "Emily Rodriguez",
      role: "Kepala DevOps",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Spesialis Kubernetes dan otomasi",
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Ahli machine learning dan data science",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 via-secondary/5 to-background py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Solusi <span className="text-primary">Aman</span> &{" "}
              <span className="text-secondary">Terpercaya</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Partner teknologi terpercaya untuk keamanan siber, cloud
              infrastructure, dan transformasi digital bisnis Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container max-w-7xl mx-auto px-4 md:px-6 -mt-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-border bg-card">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="container max-w-7xl mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Tentang Kami
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sejak 2014, kami fokus membantu bisnis Indonesia menghadapi
                tantangan teknologi modern. Dari startup hingga enterprise, kami
                memberikan solusi IT yang aman, scalable, dan efisien.
              </p>
              <p>
                Tim kami terdiri dari profesional bersertifikat di bidang cloud
                computing, keamanan siber, dan DevOps. Kami tidak hanya
                memberikan solusi, tapi juga menjadi partner jangka panjang
                dalam perjalanan transformasi digital Anda.
              </p>
              <p>
                Dengan pengalaman menangani berbagai industri, kami memahami
                setiap bisnis memiliki kebutuhan unik. Itulah mengapa pendekatan
                kami selalu customized, disesuaikan dengan tujuan dan budget
                klien.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              fill
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Kolaborasi tim"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Mengapa Kami?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi layanan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow border-border bg-card"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Tim Profesional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Didukung oleh ahli bersertifikat di bidangnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 ease-in-out border-border bg-card"
            >
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  fill
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-b from-background to-primary/5 py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Pencapaian Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dipercaya dan diakui oleh industri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                title: "Penyedia Layanan Cloud Terbaik",
                org: "Tech Excellence Awards",
              },
              {
                year: "2023",
                title: "Perusahaan Keamanan Siber Teratas",
                org: "Security Innovation Summit",
              },
              {
                year: "2023",
                title: "Inovasi dalam AI/ML",
                org: "Digital Transformation Forum",
              },
            ].map((award, index) => (
              <Card
                key={index}
                className="p-8 text-center border-border bg-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <div className="text-sm text-primary font-medium mb-2">
                  {award.year}
                </div>
                <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.org}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Mari Berkembang Bersama
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Konsultasikan kebutuhan IT bisnis Anda dengan tim kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 bg-background text-foreground hover:bg-background/90 border-primary-foreground"
            >
              Hubungi Kami
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-primary-foreground hover:bg-primary-foreground/10"
            >
              Lihat Layanan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
