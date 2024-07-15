import bgImage from "@/public/assets/bg.png";
import ContactForm from "./ContactForm";
import bookImg from "@/public/assets/booknow.png"
import Image from "next/image";

const BookNow = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage.src})` }} className="w-full h-auto bg-cover bg-center flex justify-center">
      {/* Content goes here */}
      <div className='container justify-center flex py-12'>
        <div className="w-full grid grid-cols-2">
            <div className='flex justify-center items-center'><Image src={bookImg} alt='' width={200} /></div>
            <div><ContactForm /></div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
