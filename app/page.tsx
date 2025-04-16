export default function Home() {
  return (
    <main className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Velkommen til Nutriguide</h1>
      <p className="text-lg mb-6">Din digitale matlogg med pålogging, sporing og daglige analyser.</p>
      <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
        Opprett konto
      </a>
      <a href="/login" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
        Logg inn
      </a>
    </main>
  );
}
