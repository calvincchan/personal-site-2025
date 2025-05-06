import { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { Callout } from "nextra/components";

export const metadata: Metadata = {
  title: "Calvin's Works",
  description: "Showcasing my projects and work experience.",
  other: {
    displayInSitemap: "hidden",
  },
  openGraph: {
    title: "Calvin's Works",
    description: "Showcasing my projects and work experience.",
    url: process.env.SITE_URL + "/work",
    siteName: "Calvin C. Chan",
    type: "website",
    images: [
      {
        url: process.env.SITE_OG_IMAGE,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Page() {
  permanentRedirect("/projects");
  return;

  return (
    <div>
      <header className="x-page-header">
        <h1>{metadata.title as string}</h1>
        <p>{metadata.description}</p>
      </header>

      <section role="main" className="x:prose">
        <Callout>
          To see all my public projects, please visit my GitHub at
          <a href="https://github.com/calvincchan" target="_blank" rel="noopener noreferrer">https://github.com/calvincchan</a>
        </Callout>

        <p>The following are some of my open projects:</p>

        <h2>Line Me Up</h2>
        <p>An open-source waitlist management software designed for restaurants and retail stores.</p>
        <ul>
          <li>
            Github: <a href="https://github.com/calvincchan/line-me-up" target="_blank" rel="noopener noreferrer">https://github.com/calvincchan/line-me-up</a>
          </li>
          <li>
            Blog posts: <a href="/tags/line-me-up">#line-me-up</a>
          </li>
        </ul>

        <h2>Logseq RAG (Retrieval-Augmented Generation)</h2>
        <p>Chat with your personal knowledge base in Logseq using a locally running Ollama.</p>
        <ul>
          <li>
            Github: <a href="https://github.com/calvincchan/logseq-rag" target="_blank" rel="noopener noreferrer">https://github.com/calvincchan/logseq-rag</a>
          </li>
          <li>
            Blog posts: <a href="/tags/logseq-rag">#logseq-rag</a>
          </li>
        </ul>

        <h2>LLM Function Calling</h2>
        <p>Experimenting function calling with Local LLM.</p>
        <ul>
          <li>
            Github: <a href="https://github.com/calvincchan/student-attendance-chatbot" target="_blank" rel="noopener noreferrer">https://github.com/calvincchan/student-attendance-chatbot</a>
          </li>
          <li>
            Blog posts: <a href="/tags/function-calling">#function-calling</a>
          </li>
        </ul>

        <h2>usePersistedState Hook</h2>
        <p>A React hook that persists state in sessionStorage.</p>
        <ul>
          <li>
            Github: <a href="https://github.com/calvincchan/use-persisted-state" target="_blank" rel="noopener noreferrer">https://github.com/calvincchan/use-persisted-state</a>
          </li>
          <li>
            Demo: <a href="https://githubbox.com/calvincchan/use-persisted-state" target="_blank" rel="noopener noreferrer">https://githubbox.com/calvincchan/use-persisted-state</a>
          </li>
          <li>
            Blog posts: <a href="/tags/react-persist-state">#react-persist-state</a>
          </li>
        </ul>

        <h2>React Version Checker</h2>
        <p>Periodic Version Checking and Auto Update for React Web App.</p>
        <ul>
          <li>
            Github: <a href="https://github.com/calvincchan/react-version-checker" target="_blank" rel="noopener noreferrer">https://github.com/calvincchan/react-version-checker</a>
          </li>
          <li>
            Blog posts: <a href="/tags/react-version-checker">#react-version-checker</a>
          </li>
        </ul>

        <h2>Icon Image Maker (iconimg.com)</h2>
        <p>A tool to generate PNG from open source icon images.</p>
        <ul>
          <li>
            Site: <a href="https://iconimg.com" target="_blank" rel="noopener noreferrer">https://iconimg.com</a>
          </li>
          <li>
            Github: <a href="https://github.com/calvincchan/icon-button-generator" target="_blank" rel="noopener noreferrer">https://github.com/calvincchan/icon-button-generator</a>
          </li>
          <li>
            Blog posts: <a href="/tags/icon-image-maker">#icon-image-maker</a>
          </li>
        </ul>

      </section>
    </div>
  );
}

