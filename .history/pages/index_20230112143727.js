import Head from 'next/head'
import Image from 'next/image'
import { Inter, Jacques_Francois } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState} from 'react'
import { useRouter} from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    username: ''
  })


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <label>First Name:</label>
        <input
        type="text"
        id="first"
        name="first"
        pattern="[A-Z] {1} [a-z] {2,10}"
        title="The first letter should be uppercase"
        
        />

        <label>Username:</label>
        <input
        type="text"
        id="first"
        name="first"
        required
        minLength="5"
        maxLength="10"
        />

        <button>Submit</button>
      </main>
    </>
  )
}
