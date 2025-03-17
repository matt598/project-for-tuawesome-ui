import Link from 'next/link'

export default function Footer() {
  return (<div className="flex flex-col w-full h-fit bg-[#ffffff] text-[#808080] px-14 py-14">
  <div className="w-full border-t border-gray-500 my-8"/>
  <div className="flex flex-row">
      <div className="flex flex-col gap-2 justify-center w-[35%] w-[35%]">
          <div className="flex items-center w-full gap-4">
              <img alt="Logo Preview" src="https://projectforawesome.com/assets/2023/Logos/Logo_NoText_Transparent.png" width="120"/>
              <div className="text-5xl  ">P4A</div>
          </div>
          <div className="grid grid-cols-3 gap-6 mx-auto p-4">
            <Link href="https://www.instagram.com/projectforawesome/">Instagam</Link>
            <Link href="https://bsky.app/profile/projectforawesome.bsky.social">BlueSky</Link>
            <Link href="https://www.youtube.com/vlogbrothers">YouTube</Link>
          </div>
      </div>
      <div className="flex flex-row w-[65%] justify-end gap-16 text-wrap">
          <div className="flex flex-col">
              <div className="font-bold uppercase text-[#e64923] pb-3">Graphics by</div>
              <Link href="#" className="hover:underline">Katie Brink</Link>
          </div>
          <div className="flex flex-col">
              <div className="font-bold uppercase text-[#e64923] pb-3">Website by</div>
              <Link href="#" className="hover:underline">Matt Sauer</Link>
          </div>
          <div className="flex flex-col">
            <div className="font-bold uppercase text-[#e64923] pb-3">Questions</div>
            <Link href="https://fightworldsuck.org/" className="hover:underline">The Foundation to Decrease World Suck</Link>
              <Link href="mailto:info@projectforawesome.com" className="hover:underline">info@projectforawesome.com</Link>
          </div>
          <div className="flex flex-col">
              <div className="font-bold uppercase text-[#e64923] pb-3">Newsletter</div>
              <Link href="https://projectforawesome.eo.page/newsletter" className="text-[#808080] mb-2">Subscribe!</Link>
          </div>
      </div>
  </div>
  <div className="text-center">©2025 Project for Tuawesome - All rights reserved.</div>
</div>)
}