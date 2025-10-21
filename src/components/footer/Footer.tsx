import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000] py-[40px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-[360px_1fr_auto_auto_1fr] justify-content-between items-start gap-5">
          {/* <!-- column-1  --> */}
          <div>
            <div>
              <Image
                src="/logo/logo-white.svg"
                alt="logo"
                width={160}
                height={40}
                className="w-[160px] h-[40px]"
              />
            </div>
            <h4 className="font-primary font-normal text-[24px] leading-[140%] text-white my-[32px]">
              488 East Winchester St Suite 450, Murray, Utah 84107
            </h4>
            <p className="font-primary text-[16px] leading-[140%] flex justify-start items-center gap-[10px] mb-[16px]">
              <Image
                src="/icons/phone-in-talk.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <span className="text-white"> +1 801 656 0470</span>
            </p>
            <p className="font-primary text-[16px] leading-[140%] flex justify-start items-center gap-[10px]">
              <Image src="/icons/mail.svg" alt="icon" width={16} height={16} />
              <span className="text-white"> info@devsquad.com</span>
            </p>
          </div>
          {/* <!-- column-2 --> */}
          <div>
            <h5 className="footer-col-title">Company</h5>
            <ul className="footer-col-link">
              <li className="font-primary text-sm text-white">
                <a href="#">How we work</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">About us</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">Success Stories</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          {/* <!-- column-3 --> */}
          <div>
            <h5 className="footer-col-title">Engagement Models</h5>
            <ul className="footer-col-link">
              <li className="font-primary text-sm text-white">
                <a href="#">Dedicated Development Squad</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">Product Strategy and Design</a>
              </li>
            </ul>
          </div>
          {/* <!-- column-4 --> */}
          <div>
            <h5 className="footer-col-title">Services</h5>
            <ul className="footer-col-link">
              <li className="font-primary text-sm text-white">
                <a href="#">SaaS App Development</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">Mobile App Development</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">Web App Development</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">Custom Software</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">MVP Development</a>
              </li>
            </ul>
          </div>
          {/* <!-- column-5 --> */}
          <div>
            <h5 className="footer-col-title">Technologies</h5>
            <ul className="footer-col-link">
              <li className="font-primary text-sm text-white">
                <a href="#">Laravel</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">Vue js</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">Next.js</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">React</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">React Native</a>
              </li>
              <li className="font-primary text-sm text-white">
                <a href="#">Electron</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-primary text-sm text-[#758b9d] mt-[32px] pt-[24px] border-t-1 border-[#758b9d]">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
