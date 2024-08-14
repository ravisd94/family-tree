import FamilyTree from "@/components/FamilyTree";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Family Tree</h1>
      <div style={{ width: "100%", height: "600px" }} className="border border-black items-center">
        <FamilyTree />
      </div>
    </div>
  );
}
