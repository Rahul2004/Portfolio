const projects = [
  {
    title: 'AI Support Ticket Router',
    subtitle: 'Automated GenAI Routing System',
    stack: 'Python · FastAPI · Docker · Terraform · Gemini AI',
    desc: 'An automated routing system that uses AI to read and classify customer support tickets. Instead of having humans manually sort through requests, this tool uses Gemini AI to understand the context of the issue and send it to the right department. I built the backend with Python and FastAPI, and set up the infrastructure using Docker and Terraform.',
    link: 'https://github.com/Rahul2004/support-ticket-router',
  },
  {
    title: 'Food Delivery Platform',
    subtitle: 'Interactive Web Application & Dashboard',
    stack: 'HTML5 · CSS3 · Vanilla JavaScript',
    desc: 'A web application built for restaurant admins to easily manage and track food orders. I focused heavily on making the dashboard as clean and simple as possible so that staff can navigate it quickly during busy hours. It features real-time order updates and interactive UI elements built entirely with plain HTML, CSS, and JavaScript.',
    link: 'https://github.com/Rahul2004/Food-delivery',
  },
  {
    title: 'TaskFlow',
    subtitle: 'Collaborative Task Management',
    stack: 'React · Next.js · Tailwind · Framer Motion · Supabase',
    desc: 'A real-time collaborative task manager with drag-and-drop boards, team workspaces, and instant sync. Features optimistic UI updates, keyboard shortcuts, and dark mode. Built to feel native, not like a web app.',
    link: 'https://github.com/Rahul2004/taskflow',
  },
  {
    title: 'DevMetrics',
    subtitle: 'Developer Analytics Dashboard',
    stack: 'TypeScript · Next.js · Chart.js · Tailwind · GitHub API',
    desc: 'Visualizes team velocity, PR cycle times, and code review patterns. Connects to GitHub to auto-fetch data — no manual entry. Designed for engineering leads who want insights without the spreadsheet grind.',
    link: 'https://github.com/Rahul2004/devmetrics',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b-2 border-ink px-6 md:px-12 lg:px-24 py-24 md:py-36">
      <div className="max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-ink mb-16 md:mb-24">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="border-2 border-ink bg-paper p-6 md:p-8 shadow-[6px_6px_0px_#111] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#111] transition-all duration-300 ease-out group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="space-y-4">
                <div className="border-t-2 border-ink pt-4">
                  <h3 className="font-sans text-sm md:text-base font-medium text-ink tracking-tight">{p.subtitle}</h3>
                  <p className="mt-2 text-xs md:text-sm text-muted">{p.stack}</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl md:text-3xl text-ink tracking-tight mb-4 group-hover:text-muted transition-colors">{p.title}</h4>
                  <p className="text-ink leading-relaxed text-base md:text-lg mb-6">{p.desc}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-sm md:text-base shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-medium tracking-wide group-hover:bg-muted"
                  >
                    {p.link.replace('https://github.com/', 'github.com/')}
                    <svg className="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}