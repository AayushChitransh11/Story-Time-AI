import Image from "next/image";
import Logo from "@/images/logo.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StoryWriter from "@/components/StoryWriter";
export default function Home() {
  return (
    
    <main className="flex-1 flex flex-col">
      <section className="flex-1 grid grid-col-1 lg:grid-cols-2">
        <div className="bg-indigo-600 flex flex-col space-y-5
        justify-center items-center order-1 lg:-order-1 pb-10">
          <Image src={Logo} height={250} alt="Logo"/>
          <Button asChild className="px-20 bg-indigo-600 p-10 text-xl ">
            <Link href="/stories">Explore Story Library</Link>
          </Button>
        </div>
    <StoryWriter />
      </section>
    </main> 
  );
}
