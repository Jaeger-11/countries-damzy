import Image from "next/image"
import Link from "next/link"
const Back = () => {
  return (
    <Link href={'/'} className="flex gap-2 items-center px-4 py-2 w-max mb-6 shadow-md">
        <Image 
        src='/arrow-left-solid.svg'
        width={15}
        height={2}
        alt="back"
        />
        Back
    </Link>
  )
}

export default Back