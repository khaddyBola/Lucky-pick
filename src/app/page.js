"use client"
import Image from "next/image";
import Header from '../app/components/Header';
import PotCard from '../app/components/PotCard';
import Table from '../app/components/Table';
import { AppProvider } from "./context/context";



import style from '../app/styles/Home.module.css';


export default function Home() {
  return (
    <>
<AppProvider>
    <div className={style.wrapper}>
        <Header />
        <PotCard />
        <Table />
    </div>
</AppProvider>

    </>
  );
}
