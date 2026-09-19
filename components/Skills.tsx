'use client';
const categories = [
  { title: 'Frontend & UI/UX', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Vite'] },
  { title: 'Backend & DB', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST', 'GraphQL'] },
  { title: 'Tools & Workflow', items: ['Git', 'Docker', 'VS Code', 'ESLint', 'Prettier', 'CI/CD', 'AWS', 'Vercel', 'Terraform'] },
];
export default function Skills() {
  return (
    <section id="skills" className="bg-[#F4F4F0] border-b-2 border-neutral-900 px-6 md:px-12 lg:px-24 py-24 md:py-36">
      <div className="max-w-6xl">
        <div className="border-2 border-neutral-900 bg-[#F4F4F0] p-8 md:p-12 mb-16 md:mb-24 shadow-[6px_6px_0px_#111]">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-neutral-900 leading-[1.05]">Skills</h2>
          <div className="mt-4 w-16 h-1 bg-neutral-900" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {categories.map((cat) => (
            <div key={cat.title} className="border-2 border-neutral-900 bg-[#F4F4F0] p-6 md:p-8 shadow-[6px_6px_0px_#111] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#111] transition-all duration-300 ease-in-out">
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-900 mb-5 font-bold">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="border border-neutral-900 bg-[#F4F4F0] px-3 py-1 text-xs font-bold tracking-wide shadow-[3px_3px_0px_#111] hover:-translate-y-0.5 hover:shadow-[1px_1px_0px_#111] transition-all duration-300 ease-in-out">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
