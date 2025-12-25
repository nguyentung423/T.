import Link from "next/link";
import { DemoPageContent } from "@/content/demoContent";

interface DemoLayoutProps {
  content: DemoPageContent;
}

export function DemoLayout({ content }: DemoLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <div className="mb-1">
            <span className="text-sm text-gray-500">
              {content.intro.location}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            {content.intro.name}
          </h1>
          <p className="text-lg text-gray-600">{content.intro.role}</p>
        </div>
      </header>

      {/* Summary */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="space-y-4">
            {content.summary.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">Projects</h2>
          <div className="space-y-12">
            {content.projects.map((project, index) => (
              <article key={index} className="group">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.role}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      View →
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="space-y-1">
                  {project.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-500 flex items-start gap-2"
                    >
                      <span className="text-gray-400" aria-hidden="true">
                        ·
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Notes (optional) */}
      {content.notes && content.notes.length > 0 && (
        <section className="border-b border-gray-100">
          <div className="mx-auto max-w-3xl px-6 py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Notes</h2>
            <ul className="space-y-2">
              {content.notes.map((note, index) => (
                <li key={index} className="text-gray-600">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Contact */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact</h2>
          <div className="flex flex-wrap gap-6">
            <a
              href={`mailto:${content.contact.email}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {content.contact.email}
            </a>
            {content.contact.linkedin && (
              <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            )}
            {content.contact.github && (
              <a
                href={content.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Demo indicator */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm text-center md:text-left">
          <span className="opacity-75">Demo portfolio by</span>{" "}
          <Link href="/" className="underline hover:no-underline">
            Studio
          </Link>
        </div>
      </div>
    </main>
  );
}
