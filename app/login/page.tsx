"use client";

import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const router = useRouter();

  async function loginCliente() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <main style={styles.container}>
      <div style={styles.card}>

        {/* LOGO */}
        <div style={styles.logoBox}>
          <span style={styles.icon}>🔧</span>
          <h1 style={styles.title}>FixGo</h1>
        </div>

        {/* SLOGAN */}
        <p style={styles.subtitle}>
          Encuentra técnicos confiables en segundos
        </p>

        {/* BOTONES */}
        <button style={styles.clientBtn} onClick={loginCliente}>
          Soy Cliente
        </button>

        <button
          style={styles.techBtn}
          onClick={() => alert("Próximamente: registro de técnicos")}
        >
          Soy Técnico
        </button>

      </div>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b1220",
    color: "white",
  },

  card: {
    width: "350px",
    backgroundColor: "#111827",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center" as const,
    boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
  },

  logoBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },

  icon: {
    fontSize: "28px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#3b82f6",
    margin: 0,
  },

  subtitle: {
    color: "#9ca3af",
    marginBottom: "25px",
  },

  clientBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#3b82f6",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "10px",
  },

  techBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
  },
};