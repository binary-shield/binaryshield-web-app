import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background py-16">
            <div className="container max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-1 space-y-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl tracking-wider text-foreground">LOGO</span>
                    </Link>
                    <p className="text-muted-foreground text-sm">
                        Deskripsi
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Perusahaan</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary transition-colors">Tentang</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Komunitas</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Dukungan</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary transition-colors">Hubungi Kami</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto px-4 md:px-6 mt-16 text-center text-sm text-muted-foreground/60">
                <p>2025 [NAMA], Hak cipta dilindungi.</p>
            </div>
        </footer>
    )
}
