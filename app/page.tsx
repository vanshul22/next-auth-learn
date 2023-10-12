import Navbar from './component/Navbar'
import IsLogin from './component/IsLogin';
import Providers from './component/Providers';

export default function Home() {

  return (
    <main>
      <Providers>
        <Navbar />
        <div>Home</div>
        <IsLogin />
      </Providers>
    </main>
  )
}
