"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/shared/components"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/"
        return pathname.startsWith(path)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
            <div className="container flex h-16 md:h-20 max-w-7xl items-center justify-between mx-auto px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <span className="font-bold text-xl md:text-2xl tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">Logo</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
                    <Link 
                        href="/ebook" 
                        className={cn(
                            "px-4 py-2 rounded-lg hover:bg-accent hover:text-foreground transition-all duration-300 relative text-sm font-medium",
                            isActive("/ebook") ? "text-primary bg-accent/50" : "text-muted-foreground"
                        )}
                    >
                        Ebook
                    </Link>
                    <Link 
                        href="/e-course" 
                        className={cn(
                            "px-4 py-2 rounded-lg hover:bg-accent hover:text-foreground transition-all duration-300 relative text-sm font-medium",
                            isActive("/e-course") ? "text-primary bg-accent/50" : "text-muted-foreground"
                        )}
                    >
                        E-Course
                    </Link>
                    <Link 
                        href="/blog" 
                        className={cn(
                            "px-4 py-2 rounded-lg hover:bg-accent hover:text-foreground transition-all duration-300 relative text-sm font-medium",
                            isActive("/blog") ? "text-primary bg-accent/50" : "text-muted-foreground"
                        )}
                    >
                        Blog
                    </Link>
                    <Link 
                        href="/about" 
                        className={cn(
                            "px-4 py-2 rounded-lg hover:bg-accent hover:text-foreground transition-all duration-300 relative text-sm font-medium",
                            isActive("/about") ? "text-primary bg-accent/50" : "text-muted-foreground"
                        )}
                    >
                        Tentang
                    </Link>
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-2 md:gap-3">
                    {/* Search - Hidden on mobile */}
                    <div className="relative hidden xl:flex items-center w-48">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Cari..."
                            className="w-full rounded-full bg-muted/50 pl-9 pr-4 text-sm h-9 focus-visible:ring-2 focus-visible:ring-primary border border-border/50 text-foreground placeholder:text-muted-foreground/70 transition-all duration-300"
                        />
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-2">
                        <ModeToggle />
                        <Button variant="ghost" size="sm" className="rounded-full px-4 hover:bg-accent text-foreground font-medium transition-all duration-300">
                            Masuk
                        </Button>
                        <Button size="sm" className="rounded-full px-4 bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300">
                            Daftar
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex lg:hidden items-center gap-2">
                        <ModeToggle />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="lg:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <SheetHeader className="text-left mb-6">
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                
                                {/* Mobile Search */}
                                <div className="relative mb-6">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Cari..."
                                        className="w-full rounded-full bg-muted/50 pl-9 pr-4 text-sm h-10 border border-border/50"
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Link 
                                        href="/ebook" 
                                        className={cn(
                                            "text-base font-medium px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300",
                                            isActive("/ebook") ? "text-primary bg-accent/50" : "text-foreground"
                                        )}
                                    >
                                        Ebook
                                    </Link>
                                    <Link 
                                        href="/e-course" 
                                        className={cn(
                                            "text-base font-medium px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300",
                                            isActive("/e-course") ? "text-primary bg-accent/50" : "text-foreground"
                                        )}
                                    >
                                        E-Course
                                    </Link>
                                    <Link 
                                        href="/blog" 
                                        className={cn(
                                            "text-base font-medium px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300",
                                            isActive("/blog") ? "text-primary bg-accent/50" : "text-foreground"
                                        )}
                                    >
                                        Blog
                                    </Link>
                                    <Link 
                                        href="/about" 
                                        className={cn(
                                            "text-base font-medium px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300",
                                            isActive("/about") ? "text-primary bg-accent/50" : "text-foreground"
                                        )}
                                    >
                                        Tentang
                                    </Link>

                                    <div className="border-t border-border pt-4 mt-4 flex flex-col gap-3">
                                        <Button variant="outline" className="w-full justify-center rounded-full h-11 font-medium transition-all duration-300">
                                            Masuk
                                        </Button>
                                        <Button className="w-full justify-center rounded-full h-11 bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300">
                                            Daftar
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}