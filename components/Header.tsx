import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/appello-logo-dark.svg"
              alt="Appello Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#overview" className="text-gray-700 hover:text-primary transition-colors">
              Overview
            </Link>
            <Link href="/#features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-primary transition-colors">
              Case Studies
            </Link>
          </div>
          
          <a
            href="https://meetings.hubspot.com/shelson/appello-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
            aria-label="Book a free demo"
          >
            Book A Demo
          </a>
        </div>
      </nav>
    </header>
  );
}
