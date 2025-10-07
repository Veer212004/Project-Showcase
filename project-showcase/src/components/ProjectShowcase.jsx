import React, { useState } from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'LoanMate – AI-Powered Loan Recommendation System',
    description:
      'Full-stack mobile/web financial advisory platform delivering personalized loan recommendations via AI-driven analytics. Built ReactJS frontend, Node.js + Express backend, Botpress chatbot and multilingual support.',
    github: '',
    website: '',
    mobilePreview: '',
    screenshot: 'https://via.placeholder.com/360x780.png?text=LoanMate+Mobile',
    tags: ['React', 'Node.js', 'Express', 'Botpress', 'AI'],
    timeframe: '01/2025 – 04/2025'
  },
  {
    id: 2,
    title: 'Data Structures Visualizer – Interactive Learning Tool',
    description:
      'Interactive React + Tailwind app that visualizes Stack, Queue and Linked List operations with real-time animations and operation history to boost learning engagement.',
    github: '',
    website: '',
    mobilePreview: '',
    screenshot: 'https://via.placeholder.com/360x780.png?text=DS+Visualizer+Mobile',
    tags: ['React', 'Tailwind', 'Visualization'],
    timeframe: '03/2024 – 03/2024'
  },
  {
    id: 3,
    title: 'Additional Technical Projects',
    description:
      'Collection of 5+ small web apps: Tic Tac Toe, stopwatch, weather app (real-time API), portfolio site, responsive landing page — focused on responsive UI and frontend best practices.',
    github: '',
    website: '',
    mobilePreview: '',
    screenshot: 'https://via.placeholder.com/360x780.png?text=Other+Projects+Mobile',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    timeframe: '07/2024 – 08/2024'
  }
]

function renderTags(tags) {
  return tags.map((t) => (
    <span key={t} className="text-xs px-2 py-1 rounded-full border bg-slate-50 mr-1">
      {t}
    </span>
  ))
}

function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(null)

  function openInNewTab(url) {
    if (!url) return alert('No URL provided')
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function showMobilePreview(p) {
    setCurrentProject(p)
  }

  function closeMobilePreview() {
    setCurrentProject(null)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">Project Showcase</h1>
          <p className="text-sm text-slate-600">
            Quick access to GitHub, live website and mobile preview (React).
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => window.location.reload()}
            className="px-3 py-1.5 rounded-lg bg-white shadow text-sm"
          >
            Refresh
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-live="polite">
        {sampleProjects.map((p) => (
          <article key={p.id} className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium">{p.title}</h2>
                <p className="text-sm text-slate-600 mt-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">{renderTags(p.tags)}</div>
                <div className="text-xs text-slate-500 mt-2">{p.timeframe}</div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <div className="flex gap-2">
                  <button
                    onClick={() => openInNewTab(p.github)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-white shadow-sm text-sm"
                  >
                    GitHub
                  </button>
                  <button
                    onClick={() => openInNewTab(p.website)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-white shadow-sm text-sm"
                  >
                    Live
                  </button>
                </div>

                <div className="mt-1 flex gap-2">
                  <button
                    onClick={() => showMobilePreview(p)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-600 text-white text-sm"
                  >
                    Mobile Preview
                  </button>
                  <button
                    onClick={() => {
                      if (!p.github) return alert('No GitHub URL')
                      navigator.clipboard?.writeText(p.github)
                      alert('GitHub link copied to clipboard')
                    }}
                    className="px-3 py-2 rounded-xl border bg-white text-sm"
                  >
                    Copy GitHub
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {currentProject && (
        <div
          id="mobileModal"
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMobilePreview}></div>
          <div className="relative z-10 max-w-4xl w-full flex gap-6">
            <div className="flex-none">
              <div className="phone">
                <div className="px-3 py-2 text-xs text-slate-500 bg-black/5">{currentProject.title} — Mobile</div>
                <div className="phone-screen">
                  {currentProject.mobilePreview ? (
                    <iframe src={currentProject.mobilePreview} style={{ border: 'none', width: '100%', height: '100%' }} />
                  ) : (
                    <img src={currentProject.screenshot} alt={`${currentProject.title} mobile screenshot`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </div>
                <div className="p-3 flex items-center gap-2 justify-between">
                  <div className="text-xs text-slate-600">Preview size: 360×720</div>
                  <div className="flex gap-2">
                    <button onClick={() => openInNewTab(currentProject.website)} className="text-xs px-2 py-1 rounded-md border bg-white">Open Live</button>
                    <button onClick={() => openInNewTab(currentProject.github)} className="text-xs px-2 py-1 rounded-md border bg-white">Open Repo</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{currentProject.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{currentProject.description}</p>
                </div>
                <div>
                  <button onClick={closeMobilePreview} className="text-sm px-3 py-1 rounded-md border">Close</button>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs text-slate-500">Links</h4>
                <ul className="mt-2 space-y-2">
                  <li><a href={currentProject.github} target="_blank" rel="noreferrer" className="text-sm underline">GitHub — {currentProject.github}</a></li>
                  <li><a href={currentProject.website} target="_blank" rel="noreferrer" className="text-sm underline">Live site — {currentProject.website}</a></li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-xs text-slate-500">How to use this preview</h4>
                <ol className="list-decimal list-inside text-sm mt-2 text-slate-600">
                  <li>Click <strong>Open Live</strong> to view the responsive website in a new tab.</li>
                  <li>If the website blocks iframes, use a screenshot image instead.</li>
                  <li>Paste your project's mobile-friendly route into <code>mobilePreview</code> in the sample data.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectShowcase
