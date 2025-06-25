import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation"; // Ensure this path is correct based on your setup

export default async function NotFoundPage() {
  const t = await getTranslations("NotFound"); // Fetch translations server-side

  return (
    <div className='flex flex-col items-center justify-center min-h-[80dvh] bg-white text-black p-4 text-center relative'>
      <div
        style={{
          backgroundImage: "url('/404.jpg')",
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className='relative z-10'>
        <h1 className='text-7xl 2xl:text-9xl font-oswald mb-4'>404</h1>
        <p className='text-xl md:text-2xl mb-8 uppercase font-oswald'>
          {t("errorMessage")}
        </p>
        <Link
          href='/' // Link to the root, next-intl middleware will handle the default locale
          className='bg-black text-white px-8 py-4 max-w-xs text-lg md:text-xl uppercase font-oswald border-2 border-black hover:bg-blue hover:text-black transition-colors'
        >
          {t("returnButton")}
        </Link>
      </div>
    </div>
  );
}
