import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

//async function getData() {
  // Simulate slow loading
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  //return true;
//}

export default async function Home() {
  //await getData(); // simulate delay

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Background Image */}
        <Image
          src="/handcrafted-hero-half.jpg"
          alt="Handcrafted items"
          fill
          className={styles.heroImageDesktop}
          priority
        />

        {/* Hero Overlay */}
        <div className={styles.heroOverlay}></div>

        {/* Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Handcrafted Haven</h1>
          <p className={styles.subtitle}>
            Discover unique handcrafted treasures while supporting local
            artisans.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/shop" className={styles.primaryBtn}>
              Shop Now
            </Link>
            <Link href="/sell" className={styles.secondaryBtn}>
              Become a Seller
            </Link>
          </div>
        </div>

        {/* Mobile Image */}
        <Image
          src="/handcrafted-hero.jpg"
          alt="Handcrafted items"
          width={500}
          height={300}
          className={styles.heroImageMobile}
          priority
        />
      </section>

      {/* Featured Categories */}
      <section className={styles.categories}>
        <h2>Explore Categories</h2>
        <div className={styles.grid}>
          <Link href="/shop/jewelry" className={styles.card}>
            <h3>Jewelry</h3>
            <p>Elegant handcrafted necklaces, rings & more.</p>
          </Link>
          <Link href="/shop/home-decor" className={styles.card}>
            <h3>Home Decor</h3>
            <p>Unique handmade items to brighten your living space.</p>
          </Link>
          <Link href="/shop/clothing" className={styles.card}>
            <h3>Clothing</h3>
            <p>Cozy, one-of-a-kind fashion pieces made with care.</p>
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          At Handcrafted Haven, we believe in celebrating creativity, supporting
          artisans, and promoting sustainable shopping. Each purchase directly
          empowers a creator and helps keep traditional crafts alive.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Handcrafted Haven. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
