const projects = [
  {
    title: 'AI Support Ticket Router',
    subtitle: 'Automated GenAI Routing System',
    stack: 'Python · FastAPI · Docker · Terraform · Gemini AI',
    desc: 'Automated routing that reads and classifies customer support tickets using Gemini AI. Sends each to the right department. Backend: Python + FastAPI. Infra: Docker + Terraform.',
    link: 'https://github.com/Rahul2004/support-ticket-router',
  },
  {
    title: 'Food Delivery Platform',
    subtitle: 'Interactive Web Application & Dashboard',
    stack: 'HTML5 · CSS3 · Vanilla JavaScript',
    desc: 'A clean dashboard for restaurant admins to manage food orders. Features real-time updates and interactive UI built entirely with plain HTML, CSS, and JavaScript.',
    link: 'https://github.com/Rahul2004/Food-delivery',
  },
];
export default function Projects() {
  return (
    <section id="projects" className="bg-[#F4F4F0] border-b-2 border-neutral-900 px-6 md:px-12 lg:px-24 py-24 md:py-36">
      <div className="max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-neutral-900 mb-16 md:mb-24">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {projects.map((p) => (
            <article key={p.title} className="border-2 border-neutral-900 bg-[#F4F4F0] p-6 md:p-8 shadow-[6px_6px_0px_#111] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#111] transition-all duration-300 ease-out">
              <div className="space-y-4">
                <div className="border-t-2 border-neutral-900 pt-4">
                  <h3 className="font-sans text-sm md:text-base font-medium text-neutral-900 tracking-tight">{p.subtitle}</h3>
                  <p className="mt-2 text-xs md:text-sm text-neutral-500">{p.stack}</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl md:text-3xl text-neutral-900 tracking-tight mb-4">{p.title}</h4>
                  <p className="text-neutral-900 leading-relaxed text-base md:text-lg mb-6">{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-neutral-900 text-[#F4F4F0] px-5 py-2.5 text-sm md:text-base shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-medium tracking-wide">
                    {p.link.replace('https://github.com/', 'github.com/')}
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
