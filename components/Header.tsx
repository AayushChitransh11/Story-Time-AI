import { BookOpen, FilePen } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="relative p-16 text-center">
      <Link href="/">
      <h1 className="text-6xl font-black">
        StoryTime AI
      </h1>
      
      <div className="flex justify-center whitespace-nowrap space-x-5 text-3xl lg:text-5xl">
        <div className="relative inline-block">
        <h2>Bringing your stories</h2>
        </div>
        <div className="relative inline-block">
          {/* Purple background */}
          <div className="absolute bg-indigo-600 -left-2 -top-1 
            -bottom-1 -right-2 ms:-left-3 md:-top-0 ms:-bottom-0 
            md:-right-3 -rotate-2 z-0"
          />
          {/* "To Life!" text with higher z-index */}
          <p className="relative text-white font-bold px-2 z-10">To Life!</p>
        </div>
      </div>
      </Link>
      <div className="absolute top-5 right-5 flex space-x-2">
        <Link href="/" >
            <FilePen 
            className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-indigo-600
            mt-10 border border-indigo-600 p-2 rounded-md
            hover:opacity-50 cursor-pointer"/>
        </Link>
        <Link href="/stories" >
        <BookOpen 
            className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-indigo-600
            mt-10 border border-indigo-600 p-2 rounded-md
            hover:opacity-50 cursor-pointer"/>
        </Link>
      </div>
    </header>
  );
}

export default Header;
