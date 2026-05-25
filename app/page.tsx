"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [tecnicos, setTecnicos] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    checkUser();
    cargar();
  }, []);

  async function checkUser() {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      router.push("/login");
    }
  }

  async function cargar() {
    const { data } = await supabase
      .from("Tecnicos")
      .select("*");

    if (data) setTecnicos(data);
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>🔧 FixGo - Técnicos en Lima</h1>
      <p style={styles.subtitle}>
        Encuentra técnicos confiables cerca de ti
      </p>

      {tecnicos.length === 0 ? (
        <p style={styles.empty}>No hay técnicos disponibles</p>
      ) : (
        <div style={styles.grid}>
          {tecnicos.map((t: any) => (
            <div key={t.id} style={styles.card}>
              <h2 style={styles.name}>{t.nombre}</h2>

              <p style={styles.info}>
                {t.oficio} • {t.distrito}
              </p>

              <a
                href={`https://wa.me/${String(t.whatsapp).replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                style={styles.button}
              >
                💬 WhatsApp
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    color: "white",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
  },
  name: {
    fontSize: "20px",
    marginBottom: "5px",
  },
  info: {
    color: "#94a3b8",
    marginBottom: "15px",
  },
  button: {
    display: "inline-block",
    padding: "10px 15px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  empty: {
    color: "#94a3b8",
  },
};