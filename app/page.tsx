// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import FadeOverlay from "@/components/FadeOverlay";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import GlobeScene from "@/components/GlobeScene";

export const metadata = {
  title: "Auroco",
};

export default function Page() {
  return (
    <main data-route="anasayfa">
      {/* Header */}
      <Header />

      {/* Hover etiketi */}
      <div id="info" role="status" aria-live="polite"></div>

      {/* Giriş/Çıkış overlay'i */}
      <FadeOverlay /> 

      {/* UI Kartları */}
      <div id="ui-layer">
        <Link
          href="/academy"
          className="group-card academy"
          data-group="academy"
        >
          <div className="gc-title">Auro.Academy</div>
          <div className="gc-desc">Kişisel & Kurumsal Gelişim Platformu</div>
        </Link>

        <Link
          href="/automation"
          className="group-card automation"
          data-group="automation"
        >
          <div className="gc-title">Auro.Automation</div>
          <div className="gc-desc">Yapay Zeka Otomasyon Platformu</div>
        </Link>

        <Link
          href="/creative"
          className="group-card creative"
          data-group="creative"
        >
          <div className="gc-title">Auro.Creative</div>
          <div className="gc-desc">Strateji & Tasarım Çözümleri</div>
        </Link>

        <Link
          href="/experiences"
          className="group-card experiences"
          data-group="experiences"
        >
          <div className="gc-title">Auro.Experiences</div>
          <div className="gc-desc">Etkinlik & Deneyimsel Hizmetler</div>
        </Link>
      </div>

      {/* Chatbot */}
      <Chatbot />

      {/* Three.js sahnesi */}
      <GlobeScene />
    </main>
  );
}
