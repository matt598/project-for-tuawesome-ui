import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <h2 className="text-[#3b3e8b] font-semibold">Thank you!</h2>
        <div>Sample Blogpost response gotten from CRM management</div>
      </div>
      <h2 className="text-[#e64923] font-semibold">Featured</h2>
      <div>Carousel of Videos goes here</div>
      <h2 className="text-[#e64923] font-semibold">All Videos</h2>
      <div>Paginated Video Results view goes here</div>
    </div>
  );
}
