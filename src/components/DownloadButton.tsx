import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

export function DownloadButton() {
  return (
    <>
      <a download href="/api/download">
        <Button
          variant={"outline"}
          size={"lg"}
          className="uppercase flex items-center gap-2"
        >
          <span>Download CV</span>
          <FiDownload className="text-xl" />
        </Button>
      </a>
    </>
  );
}
