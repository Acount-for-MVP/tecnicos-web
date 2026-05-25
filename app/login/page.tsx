"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const { data } = await supabase.auth.getUser();

    if (data.user) {
      router.push("/");
    }
  }

  async function loginGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔧 FixGo</h1>
        <p style={styles.subtitle}>
          Inicia sesión para encontrar técnicos en Lima
        </p>

        <button onClick={loginGoogle} style={styles.button}>
          Continuar con Google
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
    backgroundColor: "#111827",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center" as const,
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#9ca3af",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};