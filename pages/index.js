import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import RestaurantList from "../components/RestaurantList";

export default function Home({ restaurants }) {
  return <div className="container">
    <RestaurantList restaurants={restaurants} />
  </div>;
}

export async function getStaticProps({params}) {
  const response = await fetch('https://restaurant-api.dicoding.dev/list');;
  const { restaurants } = await response.json();
  return {
    props: {
      restaurants,
    },
  }
}
