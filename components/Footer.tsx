import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="relative z-10 pt-24 pb-12 border-t border-gray-100">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/background.png')]" />
        <div className="absolute inset-0 bg-white opacity-80" />
      </div>
      <Container className="relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
             <div className="max-w-xl">
                 <div className="h-10 w-10 bg-black rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6">A</div>
                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Don’t scale harder.<br/>Scale smarter.</h2>
                 <p className="text-xl text-gray-600 mb-8">
                     XpressoAI helps you automate complex workflows, reduce operating costs, and scale faster — without hiring more people.
                 </p>
                 <div className="flex gap-4">
                     <Button size="lg" className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6 text-base">Get in touch</Button>
                     <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base">About us</Button>
                 </div>
             </div>
             
             <div className="grid grid-cols-2 gap-12 md:gap-24">
                 <div>
                     <h4 className="font-bold text-gray-900 mb-6">Pages</h4>
                     <ul className="space-y-4 text-gray-600">
                         <li><Link href="#" className="hover:text-black transition-colors">Home</Link></li>
                         <li><Link href="#" className="hover:text-black transition-colors">Use cases</Link></li>
                         <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
                         <li><Link href="#" className="hover:text-black transition-colors">Careers</Link></li>
                         <li><Link href="#" className="hover:text-black transition-colors">Contact</Link></li>
                     </ul>
                 </div>
                 <div>
                     <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
                     <ul className="space-y-4 text-gray-600">
                         <li><Link href="#" className="hover:text-black transition-colors">Privacy policy</Link></li>
                         <li><Link href="#" className="hover:text-black transition-colors">Terms & conditions</Link></li>
                     </ul>
                 </div>
             </div>
         </div>
         
         <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
             <div>XpressoAI 2025. All Rights Reserved</div>
             <div className="flex gap-4 mt-4 md:mt-0">
                 {/* Social Icons Placeholders */}
                 <div className="w-5 h-5 bg-gray-200 rounded-full" />
                 <div className="w-5 h-5 bg-gray-200 rounded-full" />
                 <div className="w-5 h-5 bg-gray-200 rounded-full" />
             </div>
         </div>
      </Container>
    </footer>
  )
}
