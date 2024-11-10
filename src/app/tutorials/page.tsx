import Image from "next/image"
import Link from "next/link"

export default function Tutorials() {
  return (
    <section className="bg-white py-10">
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
      <p className="text-lg text-gray-600 mt-4">Hello, I&apos;m Hanzala Rehman, a passionate full-stack developer.</p>
      
      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <Image src="/j.png" alt="Profile Picture"width={"600"} height={"0"}className="rounded-full w-48 h-48 object-cover"/>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <p className="text-lg text-gray-600">With 1+ years of experience in building scalable and efficient web applications, I specialize in:</p>
          <ul className="list-disc pl-4 mt-4">
            <li>Full-stack development (Frontend & Backend)</li>
            <li>Web design and UI/UX</li>
            <li>Database management (MySQL, MongoDB)</li>
            <li>Cloud platforms (AWS, Google Cloud)</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-lg text-gray-600 mt-4">Let&apos;s collaborate on your next project.</p>
        <br />
        <Link href="mailto:hanzalarehman@email.com" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2">Contact Me</Link>
      </div>
      
      <div className="flex justify-center mt-10">
        <Link href="(link unavailable)" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-300 mr-4">
          <i className="fab fa-linkedin fa-2x"></i>
        </Link>
        <Link href="(link unavailable)" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-300 mr-4">
          <i className="fab fa-github fa-2x"></i>
        </Link>
        <Link href="(link unavailable)" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-300">
          <i className="fab fa-twitter fa-2x"></i>
        </Link>
      </div>
    </div>
  </section>
  )
}
