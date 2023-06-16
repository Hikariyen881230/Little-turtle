import Head from 'next/head';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import styles from './styles/page.module.css';

export const metadata = {
  title: '小龜論壇',
  description: '在小龜找到你所有的答案。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={styles.all}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
