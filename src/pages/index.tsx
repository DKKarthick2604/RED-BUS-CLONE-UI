/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This page will be the initial file of the project
**/

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
