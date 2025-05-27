import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "A brief introduction about my background and interests, including my recent activities related to AI and language learning.",
  openGraph: {
    title: "About Me",
    description: "A brief introduction about my background and interests, including my recent activities related to AI and language learning.",
    url: process.env.SITE_URL + "/about",
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
  alternates: {
    canonical: process.env.SITE_URL + "/about",
  },
};

export default async function Page() {
  return (
    <div>
      <header className="x-page-header">
        <h1>{metadata.title as string}</h1>
        <h2>{metadata.description}</h2>
      </header>

      <div role="main" className="x:prose">
        <h2>Introduction</h2>
        <p>Full-stack developer with 10 years building JavaScript/TypeScript back-end APIs and React front-ends. Now pivoting into AI engineering, applying production software skills to LLM integration, evaluation, and cost optimization.</p>

        <h2>Recent activities related to language learning and AI integration.</h2>
        <section>
          <h3>Local LLM with Ollama</h3>
          <p>I experimented with running various models locally using Ollama, testing function calling and local integration.</p>
          <p>Related blog posts: <Link href="/tags/function-calling">#function-calling</Link></p>
        </section>
        <section>
          <h3>TTS(Text-to-Speech) for a Japanese Documentary Video</h3>
          <p>I worked on a project to convert a PowerPoint slideshow file into a fully narrated Japanese documentary video, The skills involved are:</p>
          <ul>
            <li>generate voiceover audio file from a text script using the Google TTS API.</li>
            <li>use LLM to automate SSML annotation to control the pronunciation of Japanese words, especially for names and places.</li>
            <li>use iMovie to mix the static slide images with the audio narration.</li>
          </ul>
        </section>
        <section>
          <h3>STT (Speech-to-Text) for Webinar Transcription</h3>
          <p>I worked on a project to transcribe spoken Cantonese language into text, The skills involved are:</p>
          <ul>
            <li>use <Link href="https://github.com/ggml-org/whisper.cpp">whisper.cpp</Link> to convert audio recordings into timestamped text transcripts.</li>
            <li>fix incorrect words in the transcripts manually.</li>
          </ul>
          <p>The video is about Teaching Cantonese at Home by Dr. Chaak Ming Lau: <Link href="https://www.youtube.com/watch?v=TW6UiDrejVI">https://www.youtube.com/watch?v=TW6UiDrejVI</Link></p>
          <p>Learn more about Dr. Chaak Ming Lau at <Link href="http://chaak.net/#/">chaak.net</Link></p>
        </section>
        <section>
          <h3>Cantonese language preservation</h3>
          <p>I am a native Cantonese speaker and I am passionate about preserving the Cantonese language and culture.</p>
          <p>In 2024, I started volunteering at <Link href="https://familogue.ca">Familogue.ca</Link>, a local non-profit organization dedicated to supporting Cantonese parenting and promoting the use of the language. My responsibilities include building websites and automation, creating educational materials, and leading storytelling sessions for children.</p>
          <p>I am also keen on using technology to aid language learning and preservation efforts. Some future projects include developing automated story generation tools for children, and exploring the use of AI in language education.</p>
        </section>
        <section>
          <h3>MCP (Model Context Protocol)</h3>
          <p>Experimenting with Model Context Protocol (MCP) to improve the productivity of LLMs in various scenarios, including accounting data analysis and document summarization.</p>
          <p>Related blog posts: <Link href="/tags/mcp">#mcp</Link></p>
        </section>
      </div>
    </div>
  );
};