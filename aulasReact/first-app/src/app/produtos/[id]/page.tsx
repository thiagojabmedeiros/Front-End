"use client"

import Image from "next/image";
import styles from "../../page.module.css";

import { useParams } from "next/navigation"; 

export default function Produto() {
    const params = useParams< {id: string} >()

    const id = params.id

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>hello, produto #{id}!</h1>
      </main>
    </div>
  );
}