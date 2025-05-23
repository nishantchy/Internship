import Link from "next/link";
import { H1 } from "@/components/typography";
import connectDB from "@/server/utils/connectDB";
import Speech from "@/server/models/Speech";
import { notFound } from "next/navigation";
import { PlusCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import DeleteAlert from "@/components/DeleteAlert";
import { deleteSpeech } from "@/server/actions/speech/speech.action";
const RichContentPreview = dynamic(
  () => import("@/components/editor/Preview"),
  { ssr: false },
);

const page = async () => {
  try {
    await connectDB();
    const speech = await Speech.find();
    if (speech.length !== 0) {
      return (
        <div>
          <H1 className="border-b pb-2">Voice of Chairperson</H1>
          <div className="pt-4">
            <RichContentPreview html={speech[0].speech} />
          </div>

          <div className="space-y-2 pt-4">
            <Link
              className="mr-5 mt-10 text-blue-600 underline underline-offset-4"
              href={`/admin/speech/${speech[0].id}/edit`}
            >
              Edit Speech
            </Link>

            <div className="flex text-red-500 underline underline-offset-4">
              <DeleteAlert
                name="Delete"
                id={JSON.stringify(speech[0]._id)}
                deleteAction={deleteSpeech}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <H1 className="border-b pb-2">Voice of Chairperson</H1>
          <Link
            href="/admin/speech/new"
            className="flex items-center gap-2 text-blue-500 underline underline-offset-4"
          >
            <PlusCircle size={16} /> Add Chairman Speech
          </Link>
        </div>
      );
    }
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
