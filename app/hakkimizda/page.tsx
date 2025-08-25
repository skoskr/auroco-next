import FadeOverlay from "@/components/FadeOverlay";
import Header from "@/components/Header";
import styles from "./hakkimizda.module.css";
import clsx from "clsx";

export default function Page() {
  return (
    <main className={styles.root}>
      <Header />
      <FadeOverlay />

      <section className={clsx(styles.container, styles.hero)}>
        <span className={styles.badge}>İnsan zekâsı + Yapay zekâ</span>
        <h1>Hakkımızda</h1>
        <p>
          Auro.co; dijital ve fiziksel dünyayı birleştirerek markalara büyüme
          odağında <strong>AI destekli</strong> çözümler üretir. Stratejiden
          üretime; sosyal medya, etkinlik ve kreatif çalışmaları tek bir
          organizasyonda toplar.
        </p>
      </section>

      <section id="misyon" className={clsx(styles.container, styles.grid)}>
        <div className={styles.card}>
          <h3>Vizyon</h3>
          <p>
            Türkiye’den global markalar çıkaran, <em>AI-first</em> bir
            yaratıcı/operasyon stüdyosu olmak.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Yaklaşım</h3>
          <p>
            Momentum  Mükemmellik. <br />Hızlı dene, ölç, ölçekle. Veriye
            dayalı kararlar; net ROI.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Değer Önerimiz</h3>
          <p>
            Tek ekip, tek KPI, uçtan uca yönetim: Strateji → Üretim → Yayın →
            Analiz.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Farkımız</h3>
          <p>
            Yerinde prodüksiyon + yaratıcı etkinlikler + AI otomasyonları ile
            <strong>hız</strong> ve <strong>verimlilik</strong>.
          </p>
        </div>
      </section>

      <section id="hizmetler" className={clsx(styles.container, styles.timeline)}>
        <h3>Ne yapıyoruz?</h3>
        <div className={styles.step}>
          <div className={styles.dot}></div>
          <div>
            <h4>Strateji & Büyüme</h4>
            <p>
              Hedef, konumlandırma, paket/pricing ve büyüme planı. Haftalık
              hedef takibi.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.dot}></div>
          <div>
            <h4>İçerik & Sosyal Medya</h4>
            <p>
              İçerik takvimi, üretim, topluluk yönetimi ve performans raporu.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.dot}></div>
          <div>
            <h4>Etkinlik & Prodüksiyon</h4>
            <p>
              Mekân iş birlikleri, tema/kreatif, yerinde prodüksiyon, influencer
              entegrasyonu.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.dot}></div>
          <div>
            <h4>AI Otomasyonları</h4>
            <p>
              Chatbot, teklif/rapor otomasyonu, CRM entegrasyonları ve veri
              panelleri.
            </p>
          </div>
        </div>
      </section>

      {/* <section id="ekip" className={clsx(styles.container, styles.team)}>
      <h3>Ekibimiz</h3>
      <div className={styles["team-grid"]}>
        <div className={styles.person}>
          <h5>Burak Hamza Alkılıç</h5>
          <span>Kurucu Ortak — CEO</span>
          <p className={styles.muted}>Strateji, büyüme ve iş ortaklıkları.</p>
        </div>
        <div className={styles.person}>
          <h5>Sefa Köşker</h5>
          <span>Kurucu Ortak — Yazılım & Operasyon</span>
          <p className={styles.muted}>AI entegrasyonları, otomasyon ve teknik liderlik.</p>
        </div>
        <div className={styles.person}>
          <h5>Çekirdek Takım</h5>
          <span>Kreatif & Sosyal & Etkinlik</span>
          <p className={styles.muted}>Onur (Kreatif), Ahmet (Dijital Pazarlama), Ali (Sosyal Medya), Kaan (Etkinlik).</p>
        </div>
      </div>
    </section> */}

      <section id="iletisim">
        <div className={clsx(styles.container, styles.grid)}>
          <div className={styles.card}>
            <h3>Bizimle Çalış</h3>
            <p>
              Hızlı bir keşif görüşmesi ayarlayalım; ihtiyacınıza en uygun
              paketi birlikte çıkaralım.
            </p>
            <p>
              <a className={styles.cta} href="mailto:hello@auro.co">hello@auro.co</a>
            </p>
          </div>
          <div className={styles.card}>
            <h3>Bağlantılar</h3>
            <p className={styles.muted}>Instagram • LinkedIn • GitHub (yakında)</p>
          </div>
        </div>
      </section>
    

    <footer className={styles.container}>
      <span className={styles.muted}>© <span id="y"></span> Auro.co</span>
    </footer>
    </main>
  );
}