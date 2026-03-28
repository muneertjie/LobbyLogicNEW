import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <img 
              src={`${import.meta.env.BASE_URL}assets/logo-full.png`} 
              alt="LobbyLogic" 
              className="h-10 mb-6 brightness-0 invert" 
            />
            <p className="text-white/70 max-w-sm text-balance">
              Built to turn attention into revenue. The smartest content system for service business waiting rooms.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#problem" className="text-white/60 hover:text-white transition-colors">The Problem</a></li>
              <li><a href="#solution" className="text-white/60 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#industries" className="text-white/60 hover:text-white transition-colors">Industries</a></li>
              <li><a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@lobbylogic.com" className="text-white/60 hover:text-white transition-colors">hello@lobbylogic.com</a></li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="text-white/60 hover:text-azure transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-white/60 hover:text-azure transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-white/60 hover:text-azure transition-colors"><Instagram size={20} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} LobbyLogic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
