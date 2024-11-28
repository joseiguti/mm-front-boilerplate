"use client";

import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
    const router = useRouter();

    const changeLanguage = (lang: string) => {
        router.push(`/${lang}/demo`);
    };

    return (
        <div style={{ textAlign: "center", margin: "10px" }}>
            <button
                onClick={() => changeLanguage("en")}
                style={{
                    margin: "5px",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#0070f3",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                English
            </button>
            <button
                onClick={() => changeLanguage("es")}
                style={{
                    margin: "5px",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#0070f3",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Español
            </button>
        </div>
    );
};

export default LanguageSwitcher;
