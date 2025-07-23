export default function Footer() {
  // Aktuell keine Übersetzungen, aber locale wird für SSR-i18n durchgereicht
  return (
    <footer className="py-12 px-8 bg-gradient-to-t from-[#2A1454] to-[#8750F7] border-t border-purple-900 shadow-inner">
      <div className="container mx-auto text-center">
        <img src="/logo.png" alt="Logo" className="h-12 mx-auto mb-6" />

        <div className="flex justify-center gap-8 mb-6">
          <a href="/terms-and-conditions" className="text-purple-100 hover:text-white font-semibold transition-colors">
            AGB
          </a>
          <a href="/privacy-policy" className="text-purple-100 hover:text-white font-semibold transition-colors">
            Datenschutz
          </a>
          <a href="/impressum" className="text-purple-100 hover:text-white font-semibold transition-colors">
            Impressum
          </a>
        </div>
        {/* Icons für E-Mail und LinkedIn entfernt */}
        <p className="text-white/80 font-medium">© 2025 Alle Rechte vorbehalten</p>
      </div>
    </footer>
  );
}
