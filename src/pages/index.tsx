import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const topics = [
  {
    icon: '🔐',
    title: 'Cybersecurity',
    desc: 'Pelajari konsep keamanan siber, ethical hacking, kriptografi, dan perlindungan sistem dari ancaman digital.',
    to: '/docs/cybersecurity',
    color: '#ef4444',
  },
  {
    icon: '🤖',
    title: 'Machine Learning',
    desc: 'Eksplorasi algoritma ML, supervised & unsupervised learning, neural networks, dan implementasinya.',
    to: '/docs/machine-learning',
    color: '#f59e0b',
  },
  {
    icon: '🧠',
    title: 'Artificial Intelligence',
    desc: 'Memahami konsep AI modern, large language models, computer vision, dan masa depan kecerdasan buatan.',
    to: '/docs/artificial-intelligence',
    color: '#10b981',
  },
];

function HeroBanner() {
  return (
    <div className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroBadge}>📚 Knowledge Base</div>
        <h1 className={styles.heroBannerTitle}>
          ProjectFBS<br />
          <span className={styles.heroAccent}>Docs</span>
        </h1>
        <p className={styles.heroBannerSubtitle}>
          Dokumentasi lengkap seputar <strong>Cybersecurity</strong>,{' '}
          <strong>Machine Learning</strong>, dan <strong>Artificial Intelligence</strong>.
          <br />Ditulis dengan jelas, untuk semua level.
        </p>
        <div className={styles.heroBannerButtons}>
          <Link className={styles.heroBannerBtnPrimary} to="/docs/cybersecurity">
            Mulai Membaca →
          </Link>
          <Link className={styles.heroBannerBtnSecondary} to="https://github.com/projectfbs/projectfbs-docs">
            ⭐ GitHub
          </Link>
        </div>
      </div>
      <div className={styles.heroOrbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>
    </div>
  );
}

function TopicCards() {
  return (
    <section className={styles.topicSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Topik Utama</h2>
          <p className={styles.sectionSubtitle}>
            Pilih topik yang ingin kamu pelajari
          </p>
        </div>
        <div className={styles.cardGrid}>
          {topics.map((topic) => (
            <Link key={topic.title} to={topic.to} className={styles.topicCard} style={{'--card-color': topic.color} as React.CSSProperties}>
              <span className={styles.topicIcon}>{topic.icon}</span>
              <h3 className={styles.topicTitle}>{topic.title}</h3>
              <p className={styles.topicDesc}>{topic.desc}</p>
              <span className={styles.topicLink}>Pelajari →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: '3', label: 'Bidang Ilmu' },
    { number: '20+', label: 'Artikel Docs' },
    { number: '100%', label: 'Open Source' },
    { number: 'Free', label: 'Gratis Selamanya' },
  ];
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNumber}>{s.number}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Beranda"
      description="Dokumentasi ProjectFBS — Cybersecurity, Machine Learning, dan Artificial Intelligence">
      <HeroBanner />
      <TopicCards />
      <StatsSection />
    </Layout>
  );
}
