import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
    lang: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: "Publication Details",
  };
}

export default function PublicationPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">Publication Details</h1>
      <p>Publication ID: {params.id}</p>
    </div>
  );
}
