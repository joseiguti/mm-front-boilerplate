"use client";

import { useRouter, usePathname } from "next/navigation";

const LanguageSwitcher = ({ currentLocale }: { currentLocale: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    if (locale !== currentLocale) {
      const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
      router.push(newPath);
    }
  };

  return (
    <div style={{ paddingBottom: "10px" }}>
      <button
        onClick={() => changeLanguage("en")}
        style={{
          cursor: "pointer",
          marginRight: "5px",
          background: "none",
          border: "none",
          color: "blue",
          textDecoration: "underline",
        }}
        tabIndex={0}
        aria-label="Switch to English"
        aria-current={currentLocale === "en" ? "page" : undefined}
      >
        English
      </button>
      /
      <button
        onClick={() => changeLanguage("es")}
        style={{
          cursor: "pointer",
          marginLeft: "5px",
          background: "none",
          border: "none",
          color: "blue",
          textDecoration: "underline",
        }}
        tabIndex={0}
        aria-label="Cambiar a Español"
        aria-current={currentLocale === "es" ? "page" : undefined}
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
