/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Youtube, Instagram, MessageCircle, Gamepad2, Video, ExternalLink } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@ZAKGAMER.G",
    icon: <Youtube className="w-6 h-6" />,
    color: "hover:bg-red-600",
    shadow: "hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]",
    borderColor: "border-red-600/30"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/isac_sant20/",
    icon: <Instagram className="w-6 h-6" />,
    color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]",
    shadow: "hover:shadow-[0_0_20px_rgba(220,38,67,0.5)]",
    borderColor: "border-pink-600/30"
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@zaakgamer23",
    icon: <Video className="w-6 h-6" />,
    color: "hover:bg-black",
    shadow: "hover:shadow-[3px_3px_0_#ff0050,-3px_-3px_0_#00f2ea]",
    borderColor: "border-cyan-400/30"
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/zakgamer33",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "hover:bg-[#9146ff]",
    shadow: "hover:shadow-[0_0_20px_rgba(145,70,255,0.5)]",
    borderColor: "border-purple-600/30"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5500000000000",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "hover:bg-[#25d366]",
    shadow: "hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]",
    borderColor: "border-green-600/30"
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400&h=400&auto=format&fit=crop"
];

export default function App() {
  const coverImageUrl = "https://cdn.discordapp.com/attachments/1451786003600904352/1497034447676113118/665221139_840690862441791_7403069432828828812_n.png?ex=69ec0d79&is=69eabbf9&hm=eff1f253458531758347e8fdbc1c27e078a1f1b03eb354c74f10223f04b7c8e8&";

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Gamer Background Components */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-600/20 blur-[130px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[10%] w-[50%] h-[50%] bg-red-600/10 blur-[140px] rounded-full" 
        />

        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-6 md:py-12 min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row w-full gap-8 lg:gap-12 items-stretch">
          
          {/* Left Panel: Identity Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 min-h-[400px] md:min-h-[600px] relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group"
          >
            {/* Pulsing Border Glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            <img 
              src={coverImageUrl} 
              alt="Isaac_Gamer" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent p-10 flex flex-col justify-end">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-[10px] uppercase font-bold tracking-[0.4em] text-cyan-400 mb-3 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              >
                Content Creator
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl lg:text-7xl font-black leading-[0.9] mb-4 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent"
              >
                ISAAC<br/>GAMER
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-zinc-400 text-lg max-w-sm leading-relaxed"
              >
                Bem-vindos ao meu mundo gamer. Acompanhe minhas lives e conteúdos diários nas redes sociais. 🎮
              </motion.p>
            </div>
          </motion.div>

          {/* Right Panel: Links and Interaction */}
          <div className="flex-[0.85] flex flex-col gap-6">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-xs uppercase font-bold tracking-[0.2em] text-zinc-600">Conecte-se Comigo</h2>
              <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                </span>
                ONLINE AGORA
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.6 }}
                  whileHover={{ x: 8, backgroundColor: "#1c1c1f" }}
                  className="flex items-center p-4 bg-[#18181b] border border-[#27272a] rounded-2xl group transition-all"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${link.color.replace('hover:', '')} text-white`}>
                    {link.icon}
                  </div>
                  <div className="ml-5 flex-grow">
                    <span className="block text-lg font-semibold leading-tight">{link.name}</span>
                    <span className="block text-xs text-zinc-500 font-medium">
                      {link.name === "WhatsApp" ? "Direct Chat" : link.url.split('/').pop()}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all mr-2" />
                </motion.a>
              ))}
            </div>

            <div className="mt-4">
              <h2 className="text-xs uppercase font-bold tracking-[0.2em] text-zinc-600 mb-4 px-2">Últimos Posts</h2>
              <div className="grid grid-cols-3 gap-3">
                {GALLERY_IMAGES.map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <img 
                      src={img} 
                      alt={`Post ${i}`} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <footer className="mt-auto pt-8 text-center md:text-left px-2">
              <p className="text-[10px] uppercase tracking-widest text-[#52525b] font-bold">
                ISAAC_GAMER &copy; 2026 • LinkHub
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
