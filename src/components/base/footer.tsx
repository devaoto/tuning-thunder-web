import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 pt-8 md:pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-primary">Tune</span>Music
            </h2>
            <p className="text-sm text-muted-foreground">
             The Ultimate Music Bot for Your Discord Server.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary">
                  About Bot
                </Link>
              </li>
              <li>
                <Link href="/commands" className="hover:text-primary">
                  Commands
                </Link>
              </li>
              <li>
                <Link href="/premium" className="hover:text-primary">
                  Premium
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/xsN3eBQr"
                  className="hover:text-primary"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TuneMusic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
