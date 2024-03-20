import Image from 'next/image';
import Link from 'next/link';


export default function SideNav() {
    return (
        <Link href={"/"}>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-2 lg:py-3 flex justify-center">
                <Image src={"/pokemon-logo.png"} alt={""} width={400} height={200} className="" />
            </div>
        </Link>
    );
}