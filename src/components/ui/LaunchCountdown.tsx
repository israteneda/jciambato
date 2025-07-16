"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface LaunchCountdownProps {
  onComplete: () => void;
}

export default function LaunchCountdown({ onComplete }: LaunchCountdownProps) {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      triggerConfettiCelebration();
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 5000); // Mostrar confetti por 5 segundos
      return () => clearTimeout(completeTimer);
    }
  }, [count, onComplete]);

  const triggerConfettiCelebration = () => {
    // Colores de JCI
    const jciColors = ["#3A67B1", "#0087D7", "#EDBE3B", "#56BDA3"];

    // Fireworks desde el centro
    const fireworks = () => {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: jciColors,
          })
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: jciColors,
          })
        );
      }, 250);
    };

    // Cañones laterales
    const sideCannons = () => {
      const end = Date.now() + 3 * 1000; // 3 seconds

      const frame = () => {
        if (Date.now() > end) return;

        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors: jciColors,
          zIndex: 9999,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors: jciColors,
          zIndex: 9999,
        });

        requestAnimationFrame(frame);
      };

      frame();
    };

    // Confetti desde arriba
    const topConfetti = () => {
      const duration = 4 * 1000;
      const animationEnd = Date.now() + duration;

      const frame = () => {
        if (Date.now() > animationEnd) return;

        confetti({
          particleCount: 5,
          angle: 90,
          spread: 50,
          startVelocity: 80,
          origin: { x: Math.random(), y: 0 },
          colors: jciColors,
          gravity: 1.2,
          zIndex: 9999,
        });

        requestAnimationFrame(frame);
      };

      frame();
    };

    // Ejecutar todos los efectos
    setTimeout(() => fireworks(), 0);
    setTimeout(() => sideCannons(), 500);
    setTimeout(() => topConfetti(), 1000);

    // Explosión final
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: jciColors,
        zIndex: 9999,
      });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9998]">
      {/* Contador */}
      {count > 0 && (
        <div className="text-center">
          <div className="text-8xl font-bold text-white mb-4 animate-pulse">{count}</div>
          <div className="text-2xl text-white font-semibold">🚀 Preparando lanzamiento</div>
        </div>
      )}

      {/* Mensaje de lanzamiento */}
      {count === 0 && (
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-4 animate-bounce">
            🎉 ¡LANZAMIENTO! 🎉
          </div>
          <div className="text-3xl text-white font-semibold mb-2">¡Bienvenido a JCI Ambato!</div>
          <div className="text-xl text-white opacity-80">¡Una experiencia increíble te espera!</div>
        </div>
      )}
    </div>
  );
}
