import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
        <div className="container nav">
          <div className="nav-left">
            <Link href="/" aria-label="Ana sayfa">
              <Image
                src="/img/auroco_logo.png"
                alt="Auroco logo"
                width={100}
                height={100}
              />
            </Link>
            <Link href="/hakkimizda" className="link" data-nav>
              Hakkımızda
            </Link>
            <Link href="/vizyon-misyon" className="link" data-nav>
              Vizyon&Misyon
            </Link>
            <Link href="/iletisim" className="link" data-nav>
              İletişim
            </Link>
          </div>
        </div>
      </header>
  );
}
