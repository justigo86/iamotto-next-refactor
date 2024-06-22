import "../../index.scss";
import { ClientOnly } from "./client";

// server component and static asset - will import global CSS
// generateStaticParams - will generate dynamic routes
export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <ClientOnly />;
}
