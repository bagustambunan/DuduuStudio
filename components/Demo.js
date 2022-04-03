import React from "react";

export default function Demo() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="text-container max-w-6xl mx-auto pt-20">
        <p
          className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
          style={{ lineHeight: "3rem" }}
        >
          Demo Aplikasi "Sistem Deteksi Langsung Pemalsuan Suara Replay Attack Menggunakan CQT dan CNN"
        </p>
      </div>
      <div className="px-4 text-container max-w-6xl mx-auto pt-20">
      <iframe width="910" height="512" src="https://www.youtube.com/embed/BdS-rnIyHPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
    </section>
  );
}
