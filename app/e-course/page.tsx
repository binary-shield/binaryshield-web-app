import ComingSoon from "@/shared/components/ComingSoon";

export default function EcourseComingSoon() {
  const featurePreviews = [
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Kursus Berkualitas",
      description: "Pelajari dari praktisi terbaik di bidangnya"
    },
    {
      icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
      title: "Proyek Praktis",
      description: "Terapkan ilmu langsung dalam proyek nyata"
    }
  ];

  return (
    <ComingSoon 
      title="E-Course"
      subtitle="Platform pembelajaran interaktif untuk menguasai keterampilan teknologi terkini"
      description="Kami sedang menyiapkan kursus-kursus terbaik untuk membantu Anda menguasai teknologi terkini. Tetap pantau halaman ini untuk update terbaru!"
      featurePreviews={featurePreviews}
    />
  );
}
