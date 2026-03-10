import { Hero } from "@/components/hero";
import NavBar from "@/components/NavBar";
import { Suspense } from "react";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Suspense>
        <NavBar />
      </Suspense>
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <Hero />
          <main className="flex-1 flex flex-col gap-6 px-4">
            <h2 className="font-medium text-xl mb-4">Next steps</h2>
            
          </main>
        </div>

        <Footer/>

       
      </div>
    </main>
  );
}
