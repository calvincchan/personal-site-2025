import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import Link from "next/link";
import { ImageZoom } from "nextra/components";
import { GitHubIcon, RefineJsIcon, SupabaseIcon } from "src/_icons";
import { ProjectCaseStudy } from "../_components/ProjectCaseStudy";
import MyWeekMainImage from "./1-my-week-main.png";
import MyWeekDialogImage from "./2-my-week-time-entry-dialog.png";
import ReportMainImage from "./3-report-main.png";
import ReportDetailsImage from "./4-report-details.png";
import AnalyticsImage from "./5-analytics.png";

export const metadata: Metadata = {
  title: "Volunteer Time Tracking",
  description:
    "An open-source time tracking app built for Familogue NGO — replacing WhatsApp messages and manual spreadsheets with a proper audit trail for grant reporting.",
  keywords: [
    "time tracking",
    "volunteer management",
    "NGO software",
    "grant reporting",
    "Refine.js",
    "Supabase",
    "open source",
  ],
  alternates: {
    canonical: siteConfig.siteUrl + "/projects/timetracking",
  },
  other: {
    published: "true",
    tags: "TypeScript,React,Supabase,Refine.js,shadcn/ui",
    date: "2026-05-01",
  },
};

export default function Page() {
  return (
    <ProjectCaseStudy
      title={metadata.title as string}
      description={metadata.description as string}
      links={[
        {
          label: "View on GitHub",
          href: "https://github.com/calvincchan/timetracking",
          icon: <GitHubIcon />,
          target: "_blank",
        },
      ]}
      techStack={[
        { name: "Refine.js", icon: <RefineJsIcon className="" /> },
        { name: "Supabase", icon: <SupabaseIcon className="" /> },
        { name: "TypeScript" },
        { name: "shadcn/ui" },
      ]}
    >
      <h2>Problem</h2>
      <p>
        Familogue, a non-profit organization, needed a way for its volunteers to
        log their work hours. The existing process was entirely informal:
        volunteers sent WhatsApp messages to staff, who then manually transcribed
        the hours into an Excel spreadsheet. There was no timestamp, no audit
        trail, and no accountability — just a staff member&#39;s best effort to
        keep a tally.
      </p>
      <p>
        The stakes are high. Volunteer hours are submitted to government funders
        and grant bodies as evidence of community contribution. An inaccurate or
        unverifiable record can fail an audit and cost the organization its
        funding. With 5–10 active volunteers, the manual process was already a
        bottleneck; it would not survive growth.
      </p>
      <p>
        Commercial tools like Harvest exist but are priced for agencies and come
        loaded with features irrelevant to a small NGO — timers, invoicing,
        project budgets. What Familogue needed was something simpler, cheaper to
        run, and easy enough that non-technical volunteers would actually use it.
      </p>

      <h2>Key Decisions</h2>
      <p>
        <strong>Passwordless auth via OTP magic link.</strong> Volunteers are not
        software users by trade. A password-based system would immediately
        introduce forgotten passwords, reset flows, and weak credentials.
        Supabase&#39;s built-in OTP email login eliminated all of that — users
        receive a one-time code, enter it, and are in. Signup is invite-only:
        supervisors create the account; the volunteer just claims it on first
        login via a magic link. No self-registration, no OAuth complexity.
      </p>
      <p>
        <strong>Duration-only time entries, not start/stop timestamps.</strong>{" "}
        The obvious approach for a time tracker is clock-in/clock-out. It was
        rejected deliberately. Volunteers often forget to clock out, creating
        phantom sessions and requiring staff intervention to fix. Instead, each
        entry is simply a date and a duration in hours and minutes — close to
        how they already reported time verbally, but now structured and
        persisted. The &quot;My Week&quot; view gives each volunteer a weekly
        grid to fill in at whatever cadence suits them.
      </p>
      <p>
        <strong>
          Auto-locking entries on report generation, with append-only audit log.
        </strong>{" "}
        Once a supervisor generates a report for a date range, the included
        entries are locked — volunteers can no longer edit or delete them. This
        protects the integrity of submitted data. Supervisors can still amend a
        locked entry when a genuine correction is needed, but every change —
        create, edit, delete, lock, amend — is recorded in an append-only audit
        log stored in the database. The log cannot be modified by any user role,
        giving funders a verifiable chain of custody.
      </p>

      <h2>What I Built</h2>
      <p>
        The system has two roles: Member (volunteer) and Supervisor. Members see
        only their own data; supervisors see everything.
      </p>
      <p>
        Core features: invite-only onboarding, a weekly time entry view with
        daily and weekly totals, a supervisor report generator that exports CSV
        and locks the included entries, an analytics dashboard with KPI cards and
        charts filterable by date range and member, and a full audit log with
        amendment capability for locked entries. Categories are supervisor-managed
        and can be archived without affecting historical entries.
      </p>
      <p>
        The stack is Refine v5 for the frontend framework (handling data
        fetching, routing, and access control), Supabase for auth, database, and
        row-level security, and shadcn/ui for the component layer. A custom JWT
        hook injects the user&#39;s role into every access token, which drives
        all RLS policies server-side — no trust placed in the client.
        Development followed a PRD-first process: each feature started as a
        written spec before a line of code was written. Total build time: one
        week.
      </p>

      <figure>
        <ImageZoom
          src={MyWeekMainImage}
          alt="My Week view showing time entries grouped by day with daily and weekly totals"
          width={800}
          height={500}
        />
        <figcaption className="">My Week view showing time entries grouped by day with daily and weekly totals</figcaption>
      </figure>

      <figure>
        <ImageZoom
          src={MyWeekDialogImage}
          alt="Time entry dialog for logging hours and minutes with category selection"
          width={800}
          height={500}
        />
        <figcaption>Time entry dialog for logging hours and minutes with category selection</figcaption>
      </figure>

      <figure>
        <ImageZoom
          src={ReportMainImage}
          alt="Report generation screen with date range picker and entry preview"
          width={800}
          height={500}
        />
        <figcaption>Report generation screen with date range picker and entry preview</figcaption>
      </figure>

      <figure>
        <ImageZoom
          src={ReportDetailsImage}
          alt="Generated report details showing locked entries and CSV export"
          width={800}
          height={500}
        />
        <figcaption>Generated report details showing locked entries and CSV export</figcaption>
      </figure>

      <figure>
        <ImageZoom
          src={AnalyticsImage}
          alt="Analytics dashboard with KPI cards and charts filtered by member and date range"
          width={800}
          height={500}
        />
        <figcaption>Analytics dashboard with KPI cards and charts filtered by member and date range</figcaption>
      </figure>

      <h2>Evidence of Polish</h2>
      <p>
        The app is deployed on Vercel and actively used by Familogue. The RLS
        policy design means that even a compromised client cannot read or modify
        another user&#39;s data — all access control is enforced at the database
        layer. Report CSVs are generated from an immutable JSONB snapshot stored
        at generation time, so re-downloading a past report always produces the
        same output regardless of subsequent edits. The audit log stores
        before/after state on every change and has no DELETE permission for any
        role.
      </p>

      <h2>Outcome</h2>
      <p>
        Familogue&#39;s volunteers are actively using the app. Staff no longer
        receive WhatsApp messages or maintain spreadsheets. Reports are generated
        in seconds and exported as CSV for submission to funders. The audit trail
        provides the traceability that grant bodies require.
      </p>
      <p>
        This project demonstrates the ability to scope and deliver a
        production-grade, compliance-aware internal tool quickly — with real
        security constraints, a deliberate UX, and zero unnecessary features. The
        right tool for the right problem, built and shipped in a week.
      </p>

      <h3>Work with me</h3>
      <p>
        Interested in a similar build?{" "}
        <Link href="/contact">Contact me</Link> — I offer a free 30-minute
        consultation.
      </p>
    </ProjectCaseStudy>
  );
}
