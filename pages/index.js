// pages/portfolio/qr/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Qr code component</title>
        <meta name="description" content="Qr code component for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qrcode.ico" />

      </Head>

      <div className={styles.mainContainer}>
        <div className={styles.image}>
          <Image src="/qr-code.png" alt="QR Code" width={300} height={300} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.headline} >Improve your front-end skills by building projects</h1>
          <p className={styles.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </>
  );
}
