import Head from 'next/head'
import GameCard from '../components/GameCard'
import Gamelist from '../components/Gamelist'
import Header from '../components/Header'
import ToolTag from '../components/ToolTag'
import { useState } from 'react'

export default function Home() {

  const [searchvalue, setSearchvalue] = useState('');
  const [searchTool, setSearchTool] = useState('ALL');


  return (
    <div>
      <Head>
        <title>What game engine does x use? - Game engine explorer</title>
        <meta name="description" content="what game engine does x use? Find out here. This is a Google SEO Test."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header searchvalue={searchvalue} onChangeMethod={setSearchvalue} />

      <section className="bg-[#f0f0f0] pb-10 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="py-2">
            <h2 className="text-gray-700">Games using <ToolTag name={searchTool}></ToolTag></h2>
          </div>
          <Gamelist searchResult={searchvalue} />
        </div>
      </section>

    </div>
  )
}
