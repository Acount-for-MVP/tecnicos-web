"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [tecnicos, setTecnicos] = useState<any[]>([]);

  useEffect(() => {
    cargar();
  }, []);

  async function cargar() {
    const { data, error } = await supabase
      .from("Tecnicos")
      .select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (data) setTecnicos(data);
  }

  return (
    <main>
      <h1>FixGo</h1>

      {tecnicos.length === 0 ? (
        <p style={{ color: "#6b7280" }}>
          No hay técnicos disponibles
        </p>
      ) : (
        tecnicos.map((t: any) => (
          <div key={t.id} className="card">
            <h3 style={{ margin: 0 }}>{t.nombre}</h3>

            <p style={{ color: "#6b7280" }}>
              {t.oficio} - {t.distrito}
            </p>

            <a
              href={t.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        ))
      )}
    </main>
  );
}