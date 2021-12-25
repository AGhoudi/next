import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, impedit reiciendis! Enim maxime fugit nesciunt incidunt non quisquam dolores, ullam cum accusantium animi, debitis ab sapiente cumque doloribus ad necessitatibus!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, impedit reiciendis! Enim maxime fugit nesciunt incidunt non quisquam dolores, ullam cum accusantium animi, debitis ab sapiente cumque doloribus ad necessitatibus!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
