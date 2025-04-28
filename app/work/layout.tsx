export default async function Layout({children}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Works</h1>
      <p className="mt-2 text-lg">Here are some of my works.</p>
      {children}
    </div>
  );
}