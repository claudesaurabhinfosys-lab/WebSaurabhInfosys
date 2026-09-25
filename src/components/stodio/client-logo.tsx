import Image from "next/image";
import { ClientMark } from "./icons";
import type { ClientLogo } from "@/lib/data";

/** A client's square mark, or the neutral ClientMark until we have the file. */
export default function ClientLogoMark({ client }: { client: ClientLogo }) {
  if (!client.logo) return <ClientMark className="st-logo-mark" />;
  return (
    <Image
      src={client.logo}
      alt=""
      width={32}
      height={32}
      className="st-logo-mark"
      unoptimized
    />
  );
}
