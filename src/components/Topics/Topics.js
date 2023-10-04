import Link from 'next/link'
import React from 'react'
import Removebtn from '../Removebtn/Removebtn'
import styles from './page.module.css'
import {HiPencilAlt} from "react-icons/hi"
export default function Topics(){
  return (
    <div className={styles.topic}>
      <div className={styles.txt}>
        <h2>Title</h2>
        <div>description</div>
      </div>
      <div className={styles.logo}>
        <Removebtn/>
        <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24}/>
        </Link>
      </div>
    </div>
  )
}

