"use client";

export default function LmsCaseStudySection() {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 max-w-3xl">
          <p className="section-kicker mb-3">Featured case study · LMS‑MERN</p>
          <h2 className="section-title">
            A learning platform built to keep studying smooth, not stressful.
          </h2>
        </header>

        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">The context</h3>
              <p>
                The brief was simple: a web app where students could log in, access
                notes and syllabus material, and stay organised without dealing with
                clunky interfaces or confusing permissions.
              </p>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">What I built</h3>
              <p>
                I designed and implemented a full‑stack LMS with role‑based access
                (admin, teacher, student), secure authentication, structured content
                (courses, notes, syllabus), and media uploads backed by Cloudinary.
              </p>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">Key decisions</h3>
              <ul className="ml-4 list-disc space-y-1.5">
                <li>
                  Kept navigation and course views intentionally simple so students
                  can reach content in one or two clicks.
                </li>
                <li>
                  Used clear, predictable role rules so teachers and admins always
                  know what they can and can’t change.
                </li>
                <li>
                  Structured the API and data model to make it easy to add new
                  content types later without rewrites.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">Result</h3>
              <p>
                The app feels lightweight and responsive, with students able to
                move between courses and notes quickly, and admins managing content
                without needing developer help.
              </p>
            </div>
          </div>

          <aside className="space-y-4 text-sm text-muted-foreground">
            <div>
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Role
              </h3>
              <p>Full‑stack developer (solo) · product & implementation.</p>
            </div>

            <div>
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Stack
              </h3>
              <p>MERN stack · JWT auth · Cloudinary for media · role‑based access.</p>
            </div>

            <div>
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Links
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://github.com/abhishekkalme/LMS-MERN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quiet-link"
                  >
                    View source on GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://lms-learning-management-system.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quiet-link"
                  >
                    Open live demo
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

