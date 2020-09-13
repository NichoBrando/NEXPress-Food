import Link from 'next/link';
import Header from './../components/header';

export default function Home() {
  return (
    <React.Fragment>
      <div className = "hero d-flex flex-row justify-content-center ">
        <div className = "titleArea p-2 text-center my-5 text-white">
          <h1 className="centerDiv specialElite h1">NEXpress Food</h1>
          <p>Here, you can buy the best express foods of the world.</p>
          <Link href="/shop"><p className="startBuys my-5">Start Buys</p></Link>
        </div>
      </div>
    </React.Fragment>
  )
}
