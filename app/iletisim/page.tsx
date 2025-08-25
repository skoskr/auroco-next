// app/iletisim/page.tsx
import Header from "@/components/Header"
import styles from "./iletisim.module.css"
import FadeOverlay from "@/components/FadeOverlay"

export const metadata = {
  title: "İletişim | Auro.co",
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <FadeOverlay />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.badge}>İletişim</span>
            <h1 className={styles.title}>
              Bizimle <span className={styles.gradientText}>İletişime Geçin</span>
            </h1>
            <p className={styles.lead}>
              Projeleriniz hakkında konuşmaya hazırız. Size en uygun çözümü birlikte bulalım.
            </p>
          </div>
        </div>
      </section>

      {/* Info + Form */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid2}>
            {/* Contact Info */}
            <div className={styles.infoCol}>
              <h2 className={styles.sectionTitle}>İletişim Bilgileri</h2>
              <p className={styles.sectionText}>
                Hibrit ajansımızla çalışmaya başlamak için hemen iletişime geçin.
              </p>

              <div className={styles.cards}>
                <div className={styles.card}>
                  <div className={styles.iconBox}>📍</div>
                  <div>
                    <h3 className={styles.cardTitle}>Adres</h3>
                    <p className={styles.muted}>Maslak Mahallesi, Büyükdere Caddesi<br/>No:123, Sarıyer/İstanbul</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.iconBox}>📞</div>
                  <div>
                    <h3 className={styles.cardTitle}>Telefon</h3>
                    <p className={styles.muted}>+90 212 123 45 67</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.iconBox}>✉️</div>
                  <div>
                    <h3 className={styles.cardTitle}>E-posta</h3>
                    <p className={styles.muted}>hello@auro.co</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form alanı (şimdilik placeholder) */}
            <div className={styles.formCol}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Mesaj Gönderin</h3>
                <p className={styles.muted}>Formu doldurun, 24 saat içinde size geri dönelim.</p>
                <form className={styles.form}>
                  <input type="text" placeholder="Adınız" />
                  <input type="email" placeholder="E-posta" />
                  <textarea placeholder="Mesajınız..." />
                  <button type="submit">Gönder</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
