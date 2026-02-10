import { Github, Instagram, Linkedin, Globe } from 'lucide-react'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
  { icon: Globe, label: 'Website', href: 'https://example.com' },
]

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-400">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-red-200">CodePunk 2.0</p>
          <p className="text-slate-200">Friendly Neighborhood Hackathon • Swing, Ship, Save the city.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-slate-100 transition hover:border-red-500 hover:text-red-200"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">"No matter how buried it gets, or how lost you feel, you must promise me that you will hold on to hope." – Peter Parker</p>
    </footer>
  )
}

export default Footer
