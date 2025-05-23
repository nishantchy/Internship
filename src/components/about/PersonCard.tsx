import { cn } from "@/lib/utils";
import { H3 } from "../typography";
import { v2 } from "cloudinary";
import { getCloudinaryCloudName } from "@/app/[lang]/(admin)/admin/news/new/constants";

const PersonCard = ({
  main,
  public_id,
  name,
  position,
  height,
  width,
}: {
  main?: boolean;
  public_id: string;
  name: string;
  position: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.75)" }}
        className={cn(
          "mb-2 w-[200px] overflow-hidden  shadow-lg",
          main ? "bg-[#4283fa]" : "bg-[#ffb267]",
        )}
      >
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: v2.image(public_id, {
              gravity: "face",
              width: width ? width : 250,
              height: height ? height : 350,
              crop: "fill",
              cloud_name: getCloudinaryCloudName(),
            }),
          }}
        ></div>
      </div>
      <H3 className="text-center">{name}</H3>
      <p className="text-center">{position}</p>
    </div>
  );
};
export default PersonCard;
