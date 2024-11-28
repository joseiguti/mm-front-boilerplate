export async function getMessages(lang: string) {
    try {
        return (await import(`../locales/${lang}/common.json`)).default;
    } catch (error) {
        console.error("Error al cargar mensajes:", error);
        return {};
    }
}
