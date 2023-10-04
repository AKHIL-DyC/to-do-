import React from 'react'
import Image from 'next/image'
import pic from '/public/logo.jpeg'
import Link from 'next/link'
import styles from './page.module.css'
export default function Navbar(){
  return (
    <div className={styles.main}>
    <div className={styles.bar} >
      <div className={styles.imageContainer}>
      <Link href='/'>
      <Image src={pic} className={styles.img}></Image>
      </Link>
      </div>
      <div className={styles.txt}>
      <Link href={"/addTopic"}>ADD TOPIC</Link>
      </div>
    </div>
    </div>
  )
}


