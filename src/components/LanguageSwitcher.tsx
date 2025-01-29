"use client";

import { useRouter, usePathname } from "next/navigation";

const LanguageSwitcher = ({ currentLocale }: { currentLocale: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div style={{ paddingBottom: "10px" }}>
      <a
        onClick={() => changeLanguage("en")}
        style={{ cursor: "pointer", marginRight: "5px" }}
      >
        English
      </a>
      /
      <a
        onClick={() => changeLanguage("es")}
        style={{ cursor: "pointer", marginRight: "5px" }}
      >
        Español
      </a>
    </div>
  );
};

export default LanguageSwitcher;
