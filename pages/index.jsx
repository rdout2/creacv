import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eaf6fb] to-white text-zinc-900 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="font-bold text-xl tracking-tight text-blue-800">CréaCV</div>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-700 transition">Accueil</Link>
          <Link href="/builder" className="hover:text-blue-700 transition">Créer mon CV</Link>
          <a href="https://github.com/rdout2" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">GitHub</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">Créez votre CV en ligne. Gratuitement.</h1>
        <p className="text-lg md:text-xl text-zinc-700 mb-8 max-w-2xl">Un éditeur moderne, rapide et sans inscription pour générer un CV professionnel en PDF. Open-source, pensé pour les chercheurs d'emploi.</p>
        <Link href="/builder">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow transition text-lg">Commencer</button>
        </Link>
      </section>

      {/* Fonctionnalités */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">Fonctionnalités</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow border border-zinc-100 p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🤖</span>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">Pré-remplissage intelligent</h3>
            <p className="text-zinc-600 text-sm text-center">Importez votre ancien CV PDF (bientôt IA) pour gagner du temps sur la saisie.</p>
          </div>
          <div className="bg-white rounded-xl shadow border border-zinc-100 p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">📄</span>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">Export PDF</h3>
            <p className="text-zinc-600 text-sm text-center">Générez un PDF professionnel, fidèle à l'aperçu, en un clic.</p>
          </div>
          <div className="bg-white rounded-xl shadow border border-zinc-100 p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🔒</span>
            <h3 className="font-semibold text-lg mb-2 text-blue-900">Sans inscription</h3>
            <p className="text-zinc-600 text-sm text-center">Aucune création de compte requise. Vos données restent sur votre appareil.</p>
          </div>
        </div>
      </section>

      {/* Aperçu produit */}
      <section className="max-w-5xl mx-auto py-12 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">Aperçu du produit</h2>
        <div className="w-full flex justify-center">
          <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-lg bg-white">
            {/* Remplacer l'image ci-dessous par un screenshot réel du builder si possible */}
            <img src="/assets/resume.jpg" alt="Aperçu du builder" className="w-[600px] h-[380px] object-cover" />
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">Témoignages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow border border-zinc-100 p-6">
            <p className="text-zinc-700 italic mb-2">"J'ai pu créer un CV moderne en 10 minutes, sans prise de tête. Merci !"</p>
            <div className="text-zinc-500 text-sm">— Utilisateur anonyme</div>
          </div>
          <div className="bg-white rounded-xl shadow border border-zinc-100 p-6">
            <p className="text-zinc-700 italic mb-2">"Simple, rapide, et sans inscription. Idéal pour candidater partout."</p>
            <div className="text-zinc-500 text-sm">— Étudiant</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-zinc-200 text-center text-zinc-500 text-sm bg-white/80">
        <div className="mb-2">Projet open-source sur <a href="https://github.com/rdout2" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">GitHub</a></div>
        <div>&copy; {new Date().getFullYear()} CréaCV. Tous droits réservés.</div>
      </footer>
    </main>
  );
}

