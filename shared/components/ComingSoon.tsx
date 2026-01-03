import Link from "next/link";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
  description?: string;
  featurePreviews?: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export default function ComingSoon({
  title = "Segera Hadir",
  subtitle = "Coming Soon",
  description = "Kami sedang menyiapkan fitur-fitur terbaik untuk Anda. Tetap pantau halaman ini untuk update terbaru!",
  featurePreviews = [
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Fitur Berkualitas",
      description: "Kami sedang menyiapkan fitur-fitur terbaik untuk pengalaman terbaik"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Pengalaman Terbaik",
      description: "Dirancang untuk memberikan pengalaman terbaik bagi pengguna"
    },
    {
      icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
      title: "Teknologi Terkini",
      description: "Menggunakan teknologi terbaru untuk performa optimal"
    }
  ]
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-background py-8 md:py-12 flex items-center">
      <div className="container max-w-3xl mx-auto px-4 md:px-6 text-center">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">{title}</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-primary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Segera Hadir</h2>
            <p className="text-muted-foreground mb-6">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors duration-300 text-center"
              >
                Kembali ke Beranda
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-lg transition-colors duration-300 text-center"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featurePreviews.map((feature, index) => (
            <div key={index} className="bg-muted/20 p-6 rounded-xl border border-border/30">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}