import LogoImage from "@/public/assets/logo.png"
import Image from "next/image"

const Logo = () => {
  return (
    <div className="relative flex justify-center mt-8">
        <Image 
        src={LogoImage} 
        width={200}
        height={0}
        alt=""
        />
    </div>
  )
}

export default Logo