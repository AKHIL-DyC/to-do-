import Topics from '@/components/Topics/Topics'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (<>
  <div className={styles.main}>
  <Topics></Topics>
  </div>
  </>
  )}