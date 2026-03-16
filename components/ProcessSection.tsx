"use client";

import { ListChecks } from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center gap-2">
          <ListChecks className="h-4 w-4 text-muted-foreground" />
          <p className="section-kicker">How a project usually runs</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="mb-2 text-sm font-semibold">1 · Understand the problem</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Clarify goals, constraints, and what “good” looks like so we don’t
              overbuild or miss what matters.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="mb-2 text-sm font-semibold">2 · Design the flow & shape</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sketch simple flows, choose a sensible stack, and line up a plan that we
              can actually ship.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="mb-2 text-sm font-semibold">3 · Build, refine, and ship</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ship in small slices, tidy the code as we go, and leave things documented
              enough for future you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

