import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center">

      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-5xl font-bold text-center">POS System</h1>
        <p className="text-center text-xl">for Cambodian User</p>
        <Button>
          Free
        </Button>
      </div>

      <div>
        <Image src={"/pos.png"} alt="POS" width={300} height={100} />
      </div>

    </div>
  );
}
