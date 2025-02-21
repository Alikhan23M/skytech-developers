import Link from "next/link";
import { Laptop2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="flex flex-wrap gap-4 items-center justify-center md:flex-row justify-between ">
          <div className="space-y-4 sm-[30%]  md:w-[20%]">
            <Link href="/" className="flex items-center space-x-2">
              <Laptop2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">SkyTech</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into powerful digital solutions. Your trusted
              partner in software development and technology innovation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com/skytech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/skytech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/skytech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} SkyTech Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}