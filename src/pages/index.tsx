import Head from 'next/head'
import { SearchBuses } from '@/components/landingpage/SearchBuses';
import { TrendingOffers } from '@/components/landingpage/TrendingOffers';

export default function Home() {
  return (
    <>
      <SearchBuses />
      <TrendingOffers />
    </>
  )
}
