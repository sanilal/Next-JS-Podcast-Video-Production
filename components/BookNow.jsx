import bgImage from "@/public/assets/bg.png";
import ContactForm from "./ContactForm";

const BookNow = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage.src})` }} className="w-full h-auto bg-cover bg-center">
      {/* Content goes here */}
      <div className='container justify-center flex'>
        <div className="w-full grid grid-cols-2">
            <div>sdffsd</div>
            <div><ContactForm /></div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
