import Link from 'next/link';
import Nav from './Nav';
import { Button } from './ui/button';
import { MobileNav } from './MobileNav';


export function Header() {
  return (
    <>
      <header className='py-8 xl:py-12 text-white dark:text-slate-900'>
        <div className="container mx-auto flex justify-between items-center">
          <Link href={'/'}>
            <h1 className='text-3xl font-semibold'>
              Mahdi <span className='text-accent'>.</span>
            </h1>
          </Link>
          <div className='hidden lg:flex items-center gap-8'>
            <Nav />
            <Link href={'/contact'}>
              <Button>
                Hire Me
              </Button>
            </Link>
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  )
}
