import { Container } from "../components/layout/Container";
import { useLocation } from "react-router-dom";

export function PlaceholderPage() {
  const location = useLocation();
  const title = location.pathname
    .split("/")
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" - ") || "Page";

  return (
    <Container className="py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-muted-foreground">
        This page is a placeholder for future Phase implementations.
      </p>
    </Container>
  );
}
