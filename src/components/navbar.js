import Link from 'next/link'

export default function Navbar() {
  return (<header>
    <img/>
    <div className="flex justify-center flex-row gap-4 bg-[#3b3e8b] text-[#ffffff]">
      <Link href='/' className="flex">Home</Link>
      <Link href='about' className="flex">About P4A</Link>
      <Link href='#' className="flex">Get Involved</Link>
      <Link href='perktracker' className="flex">Perk Tracker</Link>
      <Link href='faq' className="flex">FAQ</Link>
    </div>
    <div className="flex justify-center flex-row gap-4">
      <Link href='donate' className="flex bg-[#3b3e8b] text-[#ffffff]">Donate</Link>
      <Link href='newsletter' className="flex bg-[#3b3e8b] text-[#ffffff]">Newsletter</Link>
    </div>
  </header>)
}