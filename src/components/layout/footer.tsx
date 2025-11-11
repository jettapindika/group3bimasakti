"use client""use client"



import { motion } from "framer-motion"import { motion } from "framer-motion"

import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react"import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react"



export function Footer() {export function Footer() {

  const socialLinks = [  const socialLinks = [

    {     { 

      icon: Instagram,       icon: Instagram, 

      handle: "@bimasaktiugm",      handle: "@bimasaktiugm",

      href: "https://instagram.com/bimasaktiugm",      href: "https://instagram.com/bimasaktiugm",

      label: "Instagram",      label: "Instagram",

      color: "from-pink-500 to-purple-500"      color: "from-pink-500 to-purple-500"

    },    },

    {     { 

      icon: Twitter,       icon: Twitter, 

      handle: "@bimasakti_ugm",      handle: "@bimasakti_ugm",

      href: "https://twitter.com/bimasakti_ugm",      href: "https://twitter.com/bimasakti_ugm",

      label: "X (Twitter)",      label: "X (Twitter)",

      color: "from-blue-400 to-blue-600"      color: "from-blue-400 to-blue-600"

    },    },

    {     { 

      icon: Linkedin,       icon: Linkedin, 

      handle: "Bimasakti Racing Team",      handle: "Bimasakti Racing Team",

      href: "https://linkedin.com/company/bimasakti-racing-team",      href: "https://linkedin.com/company/bimasakti-racing-team",

      label: "LinkedIn",      label: "LinkedIn",

      color: "from-blue-500 to-blue-700"      color: "from-blue-500 to-blue-700"

    },    },

    {     { 

      icon: Youtube,       icon: Youtube, 

      handle: "Bimasakti Racing Team",      handle: "Bimasakti Racing Team",

      href: "https://youtube.com/@bimasaktiracingteam",      href: "https://youtube.com/@bimasaktiracingteam",

      label: "YouTube",      label: "YouTube",

      color: "from-red-500 to-red-700"      color: "from-red-500 to-red-700"

    },    },

  ]  ]



  return (  return (

    <footer className="relative w-full bg-gradient-to-b from-black via-slate-950 to-slate-900 border-t border-yellow-500/20 overflow-hidden">    <footer className="relative w-full bg-gradient-to-b from-black via-slate-950 to-slate-900 border-t border-yellow-500/20 overflow-hidden">

      {/* Animated Grid Background */}      {/* Animated Grid Background */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

            

      {/* Glowing Line at Top */}      {/* Glowing Line at Top */}

      <motion.div      <motion.div

        initial={{ scaleX: 0 }}        initial={{ scaleX: 0 }}

        whileInView={{ scaleX: 1 }}        whileInView={{ scaleX: 1 }}

        viewport={{ once: true }}        viewport={{ once: true }}

        transition={{ duration: 1.5, ease: "easeOut" }}        transition={{ duration: 1.5, ease: "easeOut" }}

        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"

      />      />



      <div className="relative z-10 container mx-auto px-4 py-16">      <div className="relative z-10 container mx-auto px-4 py-16">

        {/* Main Footer Content */}        {/* Main Footer Content */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">

          {/* Brand Section */}          {/* Brand Section */}

          <motion.div          <motion.div

            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}            viewport={{ once: true }}

            transition={{ delay: 0.1 }}            transition={{ delay: 0.1 }}

            className="lg:col-span-1"            className="lg:col-span-1"

          >          >

            <div className="mb-6">            <div className="mb-6">

              <h3 className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">              <h3 className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">

                BIMASAKTI                BIMASAKTI

              </h3>              </h3>

              <p className="text-yellow-400 font-semibold text-sm tracking-widest">              <p className="text-yellow-400 font-semibold text-sm tracking-widest">

                RACING TEAM                RACING TEAM

              </p>              </p>

            </div>            </div>

            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">

              Formula SAE Electric Team dari Universitas Gadjah Mada. Berinovasi untuk masa depan mobilitas berkelanjutan.              Formula SAE Electric Team dari Universitas Gadjah Mada. Berinovasi untuk masa depan mobilitas berkelanjutan.

            </p>            </p>

                        

            {/* Contact Info */}            {/* Contact Info */}

            <div className="space-y-3 text-sm">            <div className="space-y-3 text-sm">

              <div className="flex items-start gap-3">              <div className="flex items-start gap-3">

                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />

                <span className="text-slate-400">Universitas Gadjah Mada, Yogyakarta, Indonesia</span>                <span className="text-slate-400">Universitas Gadjah Mada, Yogyakarta, Indonesia</span>

              </div>              </div>

              <div className="flex items-center gap-3">              <div className="flex items-center gap-3">

                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />

                <span className="text-slate-400">+62 xxx-xxxx-xxxx</span>                <span className="text-slate-400">+62 xxx-xxxx-xxxx</span>

              </div>              </div>

              <div className="flex items-center gap-3">              <div className="flex items-center gap-3">

                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />

                <a href="mailto:bimasakti.fsaeteam@ugm.ac.id" className="text-slate-400 hover:text-yellow-400 transition-colors">                <a href="mailto:bimasakti.fsaeteam@ugm.ac.id" className="text-slate-400 hover:text-yellow-400 transition-colors">

                  bimasakti.fsaeteam@ugm.ac.id                  bimasakti.fsaeteam@ugm.ac.id

                </a>                </a>

              </div>              </div>

            </div>            </div>

          </motion.div>          </motion.div>



          {/* Social Media Grid */}          {/* Social Media Grid */}

          <motion.div          <motion.div

            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}            viewport={{ once: true }}

            transition={{ delay: 0.2 }}            transition={{ delay: 0.2 }}

            className="lg:col-span-2"            className="lg:col-span-2"

          >          >

            <h4 className="text-xl font-bold text-white mb-6 tracking-wide font-display">CONNECT WITH US</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {socialLinks.map((social, index) => (              {socialLinks.map((social, index) => (

                <motion.a                <motion.a

                  key={social.label}                  key={social.label}

                  href={social.href}                  href={social.href}

                  target="_blank"                  target="_blank"

                  rel="noopener noreferrer"                  rel="noopener noreferrer"

                  initial={{ opacity: 0, x: -20 }}                  initial={{ opacity: 0, x: -20 }}

                  whileInView={{ opacity: 1, x: 0 }}                  whileInView={{ opacity: 1, x: 0 }}

                  viewport={{ once: true }}                  viewport={{ once: true }}

                  transition={{ delay: 0.3 + index * 0.1 }}                  transition={{ delay: 0.3 + index * 0.1 }}

                  whileHover={{ scale: 1.03, x: 5 }}                  whileHover={{ scale: 1.03, x: 5 }}

                  className="group relative"                  className="group relative"

                >                >

                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-yellow-500/50 rounded-xl p-4 transition-all duration-300 overflow-hidden">                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-yellow-500/50 rounded-xl p-4 transition-all duration-300 overflow-hidden">

                    {/* Gradient overlay on hover */}                    {/* Gradient overlay on hover */}

                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                        

                    <div className="relative flex items-center gap-4">                    <div className="relative flex items-center gap-4">

                      <div className={`p-3 rounded-lg bg-gradient-to-br ${social.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>                      <div className={`p-3 rounded-lg bg-gradient-to-br ${social.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>

                        <social.icon className="w-5 h-5 text-white" />                        <social.icon className="w-5 h-5 text-white" />

                      </div>                      </div>

                      <div className="flex-1">                      <div className="flex-1">

                        <p className="text-xs text-slate-500 mb-0.5">{social.label}</p>                        <p className="text-xs text-slate-500 mb-0.5">{social.label}</p>

                        <p className="text-white font-medium">{social.handle}</p>                        <p className="text-white font-medium">{social.handle}</p>

                      </div>                      </div>

                      <div className="text-slate-600 group-hover:text-yellow-400 transition-colors">                      <div className="text-slate-600 group-hover:text-yellow-400 transition-colors">

                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

                        </svg>                        </svg>

                      </div>                      </div>

                    </div>                    </div>

                  </div>                  </div>

                </motion.a>                </motion.a>

              ))}              ))}



              {/* TikTok */}              {/* TikTok */}

              <motion.a              <motion.a

                href="#"                href="#"

                target="_blank"                target="_blank"

                rel="noopener noreferrer"                rel="noopener noreferrer"

                initial={{ opacity: 0, x: -20 }}                initial={{ opacity: 0, x: -20 }}

                whileInView={{ opacity: 1, x: 0 }}                whileInView={{ opacity: 1, x: 0 }}

                viewport={{ once: true }}                viewport={{ once: true }}

                transition={{ delay: 0.7 }}                transition={{ delay: 0.7 }}

                whileHover={{ scale: 1.03, x: 5 }}                whileHover={{ scale: 1.03, x: 5 }}

                className="group relative"                className="group relative"

              >              >

                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-yellow-500/50 rounded-xl p-4 transition-all duration-300 overflow-hidden">                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-yellow-500/50 rounded-xl p-4 transition-all duration-300 overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                                    

                  <div className="relative flex items-center gap-4">                  <div className="relative flex items-center gap-4">

                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">

                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">

                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>

                      </svg>                      </svg>

                    </div>                    </div>

                    <div className="flex-1">                    <div className="flex-1">

                      <p className="text-xs text-slate-500 mb-0.5">TikTok</p>                      <p className="text-xs text-slate-500 mb-0.5">TikTok</p>

                      <p className="text-white font-medium">@bimasaktiugm</p>                      <p className="text-white font-medium">@bimasaktiugm</p>

                    </div>                    </div>

                    <div className="text-slate-600 group-hover:text-yellow-400 transition-colors">                    <div className="text-slate-600 group-hover:text-yellow-400 transition-colors">

                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

                      </svg>                      </svg>

                    </div>                    </div>

                  </div>                  </div>

                </div>                </div>

              </motion.a>              </motion.a>

            </div>            </div>

          </motion.div>          </motion.div>

        </div>        </div>



        {/* Bottom Bar */}        {/* Bottom Bar */}

        <motion.div        <motion.div

          initial={{ opacity: 0 }}          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}          viewport={{ once: true }}

          transition={{ delay: 0.8 }}          transition={{ delay: 0.8 }}

          className="pt-8 border-t border-slate-800"          className="pt-8 border-t border-slate-800"

        >        >

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm">            <p className="text-slate-500 text-sm">

              © 2025 Bimasakti Racing Team UGM. All rights reserved.              © 2025 Bimasakti Racing Team UGM. All rights reserved.

            </p>            </p>

            <div className="flex items-center gap-4 text-sm">            <div className="flex items-center gap-4 text-sm">

              <a href="#" className="text-slate-500 hover:text-yellow-400 transition-colors">Privacy</a>              <a href="#" className="text-slate-500 hover:text-yellow-400 transition-colors">Privacy</a>

              <span className="text-slate-700">•</span>              <span className="text-slate-700">•</span>

              <a href="#" className="text-slate-500 hover:text-yellow-400 transition-colors">Terms</a>              <a href="#" className="text-slate-500 hover:text-yellow-400 transition-colors">Terms</a>

              <span className="text-slate-700">•</span>              <span className="text-slate-700">•</span>

              <a href="#" className="text-slate-500 hover:text-yellow-400 transition-colors">Contact</a>              <a href="#" className="text-slate-500 hover:text-yellow-400 transition-colors">Contact</a>

            </div>            </div>

          </div>          </div>

        </motion.div>        </motion.div>

      </div>      </div>



      {/* Animated Bottom Glow */}      {/* Animated Bottom Glow */}

      <motion.div      <motion.div

        animate={{        animate={{

          opacity: [0.3, 0.6, 0.3],          opacity: [0.3, 0.6, 0.3],

        }}        }}

        transition={{        transition={{

          duration: 3,          duration: 3,

          repeat: Infinity,          repeat: Infinity,

          ease: "easeInOut",          ease: "easeInOut",

        }}        }}

        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"

      />      />

    </footer>    </footer>

  )  )

}}


    { 
      icon: Instagram, 
      handle: "@bimasaktiugm",
      href: "https://instagram.com/bimasaktiugm",
      label: "Instagram"
    },
    { 
      icon: Twitter, 
      handle: "@bimasakti_ugm",
      href: "https://twitter.com/bimasakti_ugm",
      label: "X (Twitter)"
    },
    { 
      icon: Linkedin, 
      handle: "Bimasakti Racing Team",
      href: "https://linkedin.com/company/bimasakti-racing-team",
      label: "LinkedIn"
    },
    { 
      icon: Youtube, 
      handle: "Bimasakti Racing Team",
      href: "https://youtube.com/@bimasaktiracingteam",
      label: "YouTube"
    },
  ]

  return (
    <footer className="relative w-full bg-gradient-to-t from-[#fabf75] via-[#ffd89f] to-white py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Instagram & TikTok */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex gap-3">
                <motion.a
                  href={socialLinks[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Instagram className="w-6 h-6 text-pink-600" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </motion.a>
              </div>
              <p className="text-2xl font-medium text-white drop-shadow-md">
                {socialLinks[0].handle}
              </p>
            </motion.div>

            {/* LinkedIn & YouTube */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="flex gap-3">
                <motion.a
                  href={socialLinks[2].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </motion.a>
                <motion.a
                  href={socialLinks[3].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Youtube className="w-6 h-6 text-red-600" />
                </motion.a>
              </div>
              <p className="text-2xl font-medium text-white drop-shadow-md">
                Bimasakti Racing Team
              </p>
            </motion.div>

            {/* Twitter/X */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href={socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              >
                <Twitter className="w-6 h-6 text-blue-500" />
              </motion.a>
              <p className="text-2xl font-medium text-white drop-shadow-md">
                {socialLinks[1].handle}
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="mailto:bimasakti.fsaeteam@ugm.ac.id"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="w-6 h-6 text-gray-700" />
              </motion.a>
              <p className="text-2xl font-medium text-white drop-shadow-md">
                bimasakti.fsaeteam@ugm.ac.id
              </p>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center pt-8 border-t border-white/30"
          >
            <p className="text-white/90 text-lg font-medium drop-shadow">
              © 2025 Bimasakti Racing Team UGM. All rights reserved.
            </p>
            <p className="text-white/70 text-sm mt-2">
              Formula SAE Electric Team • Universitas Gadjah Mada
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animated decorative lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
      />
    </footer>
  )
}
