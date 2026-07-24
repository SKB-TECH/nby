import { MapPin, Mail, Phone } from 'lucide-react'
import React from 'react'
import { footerColumns } from './home-data'
import { CircuitBackdrop } from './visuals'

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-black px-4 py-16 text-white">
            <div className="absolute inset-0">
                <CircuitBackdrop className="opacity-20" />
            </div>
            <div className="relative mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
                <div>
                    <h2 className="text-2xl font-bold">Iteck</h2>
                    <p className="mt-1 text-xs uppercase text-white/50">Tech & IT Solutions</p>
                    <p className="mt-6 text-sm leading-7 text-white/60">
                        Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-white/60">
                        <p className="flex gap-3"><MapPin className="h-4 w-4 text-blue-400" />58 Howard St, San Francisco, CA 941</p>
                        <p className="flex gap-3"><Mail className="h-4 w-4 text-blue-400" />contact@iteck.co</p>
                        <p className="flex gap-3"><Phone className="h-4 w-4 text-blue-400" />(+23) 5535 68 68</p>
                    </div>
                </div>
                {footerColumns.map((column) => (
                    <div key={column.title}>
                        <h3 className="text-sm font-bold">{column.title}</h3>
                        <ul className="mt-5 space-y-3 text-sm text-white/55">
                            {column.links.map((link) => (
                                <li key={link}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                    <h3 className="text-sm font-bold">Newsletter</h3>
                    <p className="mt-5 text-sm leading-7 text-white/55">
                        Register now to get latest updates on promotions & coupons.
                    </p>
                    <div className="mt-5 flex overflow-hidden rounded bg-white">
                        <input className="w-92  h-12 flex-1 px-3 text-sm text-slate-950 outline-none" placeholder="Enter your email" />
                        <button className="bg-blue-500 px-4 text-xs font-bold text-white">Subscribe</button>
                    </div>
                    <p className="mt-4 text-xs leading-6 text-white/45">
                        By subscribing, you accepted our Privacy Policy.
                    </p>
                </div>
            </div>
            <div className="relative mx-auto mt-12 max-w-5xl border-t border-white/10 pt-7 text-center text-xs text-white/40">
                © 2022 Copyrights by Iteck. All Rights Reserved by ThemesCamp
            </div>
        </footer>
  )
}
