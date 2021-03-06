import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyImage from '../components/MyImage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title> My index page </title>
      </Head>
      <main className={styles.main}>
        <MyImage
          src='/images/flamenco.jpg'
          alt='flamenco.jpg'
          width={500}
          height={500}
        />
      </main>
    </div>
  )
}
