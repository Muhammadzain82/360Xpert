import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white p-10 font-['Arial'] mx-auto md:mx-8 lg:mx-16 mb-8 rounded-lg mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="mb-8 lg:mb-0">
            <Link  href={'/'}>
            <Image
              src="/Vector.png"
              alt="360X Solutions Logo"
              width={180}
              height={36}
              />
              </Link>
            <p className="mt-8 text-[13px] leading-[18px] max-w-[300px] text-[#9B9B9B] font-['Clash_Display']">
              Accelerating innovation,
              <br />
              Amplifying impact. We <br />
              transform visions into reality.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-16 font-['Clash_Display']">
            <div>
              <p className="font-normal text-[15px]">800 00 975 20 34</p>
              <p className="text-[13px] text-[#9B9B9B] mb-10">
                +1 201 1800 234 3678
              </p>
              <Link
                href="mailto:info@techxworlds.co"
                className="text-[13px] hover:text-[#9B9B9B] font-['Clash_Display']"
              >
                info@techxworlds.co
              </Link>
            </div>
            <div>
              <p className="font-normal text-[15px] font-['Clash_Display']">
                Dubai Silicon Oasis, DSO
              </p>
              <p className="text-[13px] text-[#9B9B9B] mb-10 font-['Clash_Display']">
                Building #12, Dubai, UAE
              </p>

              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook">
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Image
                    src="/xrp-(xrp).png"
                    alt="Twitter"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#" aria-label="YouTube">
                  <Image
                    src="/youtube.png"
                    alt="YouTube"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Image
                    src="/figma.png"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-2 text-[13px] font-['Clash_Display']">
              <Link href={"/About"} className="hover:text-[#9B9B9B]">
                About Us
              </Link>
              <Link href={"/Careers"} className="hover:text-[#9B9B9B]">
                Careers
              </Link>
              <Link href={"/Blogs"} className="hover:text-[#9B9B9B]">
                Blogs
              </Link>
              <Link href={"/"} className="hover:text-[#9B9B9B]">
                Home
              </Link>
            </div>
          </div>
        </div>

        <div className="border-[#2D2D2D] pt-8 flex flex-col lg:flex-row justify-between items-center font-['Clash_Display']">
          <p className="text-[11px] text-[#9B9B9B] mb-4 lg:mb-0 lg:self-start lg:mr-auto">
            © 2023 Samurai Systems. All rights reserved.
          </p>
          <div className="flex justify-center lg:justify-end space-x-4 text-[11px] text-[#9B9B9B] font-['Clash_Display']">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:underline font-['Clash_Display']"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
