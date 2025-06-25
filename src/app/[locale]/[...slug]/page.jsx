// app/[locale]/[...slug]/page.jsx
import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound(); // Принудительно показать кастомную 404
}
