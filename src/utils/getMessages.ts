export async function getMessages(lang: string) {
  try {
    return (await import(`../locales/${lang}/common.json`)).default;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.error("Error loading messages:", error);
    }
    return {};
  }
}
