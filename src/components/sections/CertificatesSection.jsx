import { useState, useEffect, Suspense, lazy } from 'react';
import { certificates } from '@/data/certificatesData';

const CertificateCard = lazy(() => import('@/components/CertificateCard').then(m => ({ default: m.CertificateCard })));

export const CertificatesSection = () => {
  const [modalImage, setModalImage] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    if (!modalImage) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setModalImage(null);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalImage]);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/40 dark:to-indigo-900/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0 pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 id="certificates-heading" className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
          🎓 Certificates & Achievements
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <Suspense fallback={<div className="h-96 glass-panel rounded-xl animate-pulse" />}>
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={index}
                {...certificate}
                description={certificate.description ?? ""}
                onImageClick={(url, title) => setModalImage({ url, title })}
              />
            ))}
          </Suspense>
        </div>
      </div>

      {/* Accessible Fullscreen Preview Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all animate-fade-in p-4"
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={modalImage.title}
        >
          <img
            src={modalImage.url}
            alt={modalImage.title}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white/20 object-contain transition-all"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute top-6 right-8 text-white text-3xl font-bold bg-black/40 rounded-full px-3 py-1 hover:bg-black/70 transition focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setModalImage(null)}
            aria-label="Close fullscreen preview"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

