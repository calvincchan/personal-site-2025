import Link from "next/link";
import { ImageZoom } from "nextra/components";
import { YouTube } from "src/_components/YouTube";
import { GitHubIcon } from "src/_icons";
import KioskModeImage from "./240924-kiosk-mode.png";
import PublicScreenImage from "./240924-public-screen.png";
import StationModeImage from "./240924-station-mode.png";

export function generateMetadata() {
  return {
    title: "Line Me Up",
    description: "The Line Me Up project is an open-source waitlist management software designed for restaurants and retail stores. It aims to simplify the process of handling customer queues by offering a self-service approach for both customers and staff.",
    image: "/projects/line-me-up.jpg",
    openGraph: {
      title: "Line Me Up",
      description: "The Line Me Up project is an open-source waitlist management software designed for restaurants and retail stores. It aims to simplify the process of handling customer queues by offering a self-service approach for both customers and staff.",
      url: process.env.SITE_URL + "/projects/line-me-up",
      siteName: "Calvin C. Chan",
      type: "website",
      images: [
        {
          url: "/projects/line-me-up.jpg",
          width: 1920,
          height: 1080,
        },
      ],
    },
  };
};

export default function Page() {
  const metadata = generateMetadata();

  return (
    <div>
      <header className="x-page-header">
        <h1>{metadata.title}</h1>
        <h2>{metadata.description}</h2>
      </header>

      <main className="x-prose">
        <p>
          <Link href="https://github.com/calvincchan/line-me-up" className="x-button" target="_blank">
            <GitHubIcon /> View on GitHub
          </Link>
        </p>

        <h3>Tech Stack</h3>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Refine.js</li>
          <li>Supabase</li>
        </ul>

        <p>Quick video intro:</p>

        <YouTube id="p1OwccZgKsA" />

        <h3>Kiosk Mode</h3>

        <p>With Line Me Up, customers can easily join the waitlist through a self-serving kiosk or a browser in their own device, eliminating the need to interact with staff just to get in line. This reduces the workload on staff and provides a more convenient experience for customers.</p>

        <ImageZoom
          src={KioskModeImage}
          alt="line me up kiosk mode"
          width={800}
          height={200}
        />

        <h3>Station Mode</h3>

        <p>The system supports a station dashboard that allows multiple staff members to manage the waitlist simultaneously. Staff can view the current queue, call out customers, and mark them as served, all from a single interface. This helps to streamline the process and ensure that customers are served promptly.</p>

        <ImageZoom
          src={StationModeImage}
          alt="line me up station mode"
          width={800}
          height={200}
        />

        <h3>Public Waitlist Screen</h3>

        <p>Additionally, Line Me Up features a real-time waitlist status page that is displayed on a public screen. This allows customers to stay informed about their position in the queue without needing to check in with staff, reducing uncertainty and improving transparency.</p>

        <ImageZoom
          src={PublicScreenImage}
          alt="line me up public screen"
          width={800}
          height={200}
        />

        <p>Being an open-source project, Line Me Up is available for customization and further development by businesses and developers. The goal is to provide a flexible, adaptable tool that can be tailored to fit different use cases and contribute to ongoing improvements in queue management.</p>

      </main>
    </div>
  );
}