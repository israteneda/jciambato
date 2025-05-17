"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service

    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Página No Encontrada</h2>
      <p className="text-gray-600 mb-8">Lo sentimos, la página que buscas no existe.</p>
      <a
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        href="/"
      >
        Volver al inicio
      </a>
    </div>
  );
}
