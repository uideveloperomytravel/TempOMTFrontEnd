import svgPaths from "./svg-huszy8nf87";
import clsx from "clsx";
import imgScreenshot20250922At104432Am1 from "figma:asset/76eafb6641c77df625acbb45ffdb54a665900231.png";
import img78Bc965B31B842089A413Deb5Cce411E1 from "figma:asset/b4fb1a081f40125f0d7f09dbd8fbdd9252a032d0.png";
import imgEllipse524 from "figma:asset/46ffcae1bd90f80ee3cc3f5bb1c3f192537e89da.png";
import imgInterviewCandidate from "figma:asset/70db7b7be8d00f723b68b73433e020d2363a1237.png";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[56px] relative shrink-0 w-[89px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 56">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[20.903px]">
      <div className="absolute inset-[-7.41%_-6.24%_-7.41%_-4.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2085 15.5">
          <path d={svgPaths.p28c8f180} id="Vector 24" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage({ text, text1, additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0", additionalClassNames)}>
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[18px] relative shrink-0 text-[#3d4759] text-[12px] w-full">{text}</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#718096] text-[14px] w-full">{text1}</p>
    </div>
  );
}

function VectorBackgroundImage() {
  return (
    <div className="h-[6.063px] relative shrink-0 w-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6.0625">
        <path d={svgPaths.p1f269d00} fill="var(--fill-0, #718096)" id="Vector" />
      </svg>
    </div>
  );
}

function AccessTime24PxBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="access_time_24px">
          <path d={svgPaths.p49e2d00} fill="var(--fill-0, #303F9F)" id="icon/device/access_time_24px" />
        </g>
      </svg>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d4759] text-[16px] text-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute h-[533px] left-[-738px] opacity-0 top-[397px] w-[740px]">
      <div className="absolute inset-[0_0_-0.56%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 740 536">
          <g id="Frame 1171281877">
            <g filter="url(#filter0_d_69_489)" id="Rectangle 165486">
              <path d={svgPaths.p3fe6eba4} fill="url(#paint0_linear_69_489)" />
              <path d={svgPaths.p29e77980} stroke="url(#paint1_linear_69_489)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="531" id="filter0_d_69_489" width="738" x="1" y="5">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.300284 0 0 0 0 0.947191 0 0 0 0 0.614362 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_69_489" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_69_489" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_69_489" x1="370" x2="370" y1="10" y2="523">
              <stop stopColor="#E0FFEF" />
              <stop offset="1" stopColor="#EFFFF7" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_69_489" x1="370" x2="370" y1="10" y2="486">
              <stop stopColor="#00D369" />
              <stop offset="1" stopColor="#00F67B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[370px]">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#718096] text-[0px] w-[323px]">
        <p className="leading-[28px] text-[18px]">
          <span>{`We’ve sent a verification code to email address `}</span>
          <span className="font-['SF_Pro_Text:Medium',sans-serif] not-italic text-[#3d4759]">kak*******gmail.com</span>
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d4759] text-[24px] w-[301px]">
        <p className="leading-[36px]">Please verify your email to get started.</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[56px] relative shrink-0 w-[260px]">
      <div className="absolute inset-[-1.79%_0_-1.79%_-0.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 261 58">
          <g id="Frame 8">
            <rect fill="var(--fill-0, white)" height="56" id="Rectangle 3" rx="8" stroke="var(--stroke-0, #388E3C)" strokeWidth="2" width="56" x="1" y="1" />
            <rect fill="var(--fill-0, white)" height="55" id="Rectangle 4" rx="7.5" stroke="var(--stroke-0, #CBD5E0)" width="55" x="69.5" y="1.5" />
            <rect fill="var(--fill-0, white)" height="55" id="Rectangle 5" rx="7.5" stroke="var(--stroke-0, #CBD5E0)" width="55" x="137.5" y="1.5" />
            <rect fill="var(--fill-0, white)" height="55" id="Rectangle 6" rx="7.5" stroke="var(--stroke-0, #CBD5E0)" width="55" x="205.5" y="1.5" />
            <path d="M13 13V45" id="Vector 2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame6 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#718096] text-[0px] text-nowrap">
        <p className="leading-[28px] text-[18px]">
          <span>{`Resend OTP in `}</span>
          <span className="font-['SF_Pro_Text:Medium',sans-serif] not-italic text-[#3d4759]">60 Sec</span>
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[-672px] opacity-0 top-[488px] w-[400px]">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[-738px] top-[397px]">
      <Frame22 />
      <Frame7 />
      <div className="absolute h-[344px] left-[-342px] mix-blend-multiply opacity-0 top-[460px] w-[343px]" data-name="Screenshot 2025-09-22 at 10.44.32 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250922At104432Am1} />
      </div>
    </div>
  );
}

function LiLayers() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="li:layers">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g clipPath="url(#clip0_69_460)" id="li:layers">
          <path clipRule="evenodd" d={svgPaths.p289fa680} fill="var(--fill-0, #303F9F)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1bb04100} fill="var(--fill-0, #303F9F)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pe1ea500} fill="var(--fill-0, #303F9F)" fillRule="evenodd" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_69_460">
            <rect fill="white" height="21" width="21" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center px-0 py-[3.5px] relative shrink-0">
      <LiLayers />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#eff3f8] content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0">
      <Frame4 />
      <BackgroundImageAndText text="5 Questions" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#eff3f8] content-stretch flex gap-[12px] h-[44px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0">
      <AccessTime24PxBackgroundImage />
      <BackgroundImageAndText text="30 Minutes" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#eff3f8] content-stretch flex gap-[12px] h-[44px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0">
      <AccessTime24PxBackgroundImage />
      <BackgroundImageAndText text="Video Interview" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#eff3f8] content-stretch flex gap-[12px] h-[44px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0">
      <AccessTime24PxBackgroundImage />
      <BackgroundImageAndText text="English" />
    </div>
  );
}

function HkjhkhGjgj() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-[calc(50%-1431.94px)] opacity-0 top-[718px] translate-x-[-50%] w-[668.113px]" data-name="hkjhkh gjgj">
      <Frame2 />
      <Frame5 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[283px] items-end left-[-307px] opacity-0 top-[528px]">
      <div className="h-[283px] relative rounded-[18px] shrink-0 w-[262px]">
        <div aria-hidden="true" className="absolute border-[#1976d2] border-[4px_0px_0px] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)]" />
      </div>
      <div className="absolute h-[63px] left-[17px] rounded-[800px] top-[21px] w-[64px]" data-name="78bc965b-31b8-4208-9a41-3deb5cce411e 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[800px]">
          <img alt="" className="absolute h-[120.11%] left-[-11.1%] max-w-none top-0 w-[124.66%]" src={img78Bc965B31B842089A413Deb5Cce411E1} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[20px] not-italic text-[#3d4759] text-[16px] top-[162px] translate-y-[-50%] w-[218px]">
        <p className="leading-[24px]">Your chances of conversion go up to 8x when you’re in a quiet room with strong internet and good lighting.</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center relative shrink-0 text-[#3d4759] text-[0px] w-full">
        <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[36px] not-italic text-[24px]">
          <span>{`Meet Jess, your `}</span>
          <span className="bg-clip-text mix-blend-hard-light" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(172.005deg, rgb(25, 118, 210) 35.943%, rgb(40, 53, 147) 30.573%, rgb(236, 64, 122) 168.42%)" }}>
            AI Interviewer
          </span>
        </p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center relative shrink-0 text-[#718096] text-[18px] w-full">
        <p className="leading-[28px]">You’re about to begin your screening interview for the Product Designer role</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[96px]">
        <img alt="" className="block max-w-none size-full" height="96" src={imgEllipse524} width="96" />
      </div>
      <Frame18 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#718096] text-[0px] w-[632px]">
        <p className="leading-[28px] text-[18px]">
          <span className="font-['SF_Pro_Text:Semibold',sans-serif] not-italic text-[#3d4759]">Hi Akash!</span>
          <span>{` Thanks for your interest in joining our team. We’re excited to learn more about you. This AI interview will explore your design thinking, problem-solving skills, and experience.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[633px]">
      <Frame10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[108px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#cbd5e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[8px] py-[24px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[-1054px] opacity-0 top-[458px] w-[654px]">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-1102px] top-[407px]">
      <div className="absolute h-[511px] left-[-1102px] opacity-0 top-[407px] w-[1100px]">
        <div className="absolute inset-[-0.96%_-0.82%_-2.54%_-0.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1118 528.912">
            <g filter="url(#filter0_d_69_465)" id="Rectangle 165486">
              <path d={svgPaths.p3f57bc00} fill="var(--fill-0, #FAFFFD)" />
              <path d={svgPaths.p23a11200} stroke="url(#paint0_linear_69_465)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="528.912" id="filter0_d_69_465" width="1118" x="0" y="7.45058e-09">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.300284 0 0 0 0 0.947191 0 0 0 0 0.614362 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_69_465" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_69_465" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_69_465" x1="559" x2="559" y1="4.91196" y2="479.056">
                <stop stopColor="#00D369" />
                <stop offset="1" stopColor="#00F67B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <HkjhkhGjgj />
      <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[-1046px] not-italic opacity-0 text-[#718096] text-[0px] top-[850px] translate-y-[-50%] w-[668px]">
        <p className="leading-[20px] text-[14px]">
          <span>{`This interview will be conducted by SmartRecruiter’s Voice AI Assistant, Winston. We only use essential cookies for functionality—no tracking or analytics. Learn more in our `}</span>
          <span className="font-['SF_Pro_Text:Medium',sans-serif] not-italic text-[#102dd1]">Privacy Policy</span>
          <span>{` and `}</span>
          <span className="font-['SF_Pro_Text:Medium',sans-serif] not-italic text-[#102dd1]">{`Terms & Conditions`}</span>.
        </p>
      </div>
      <Frame13 />
      <Frame19 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex font-['SF_Pro_Display:Semibold',sans-serif] gap-[10px] items-center px-0 py-[10px] relative shrink-0 text-[40px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[#cbd5e0] text-nowrap">
        <p className="leading-[normal]">Now your’e all set,</p>
      </div>
      <div className="bg-clip-text flex flex-col justify-center relative shrink-0 w-[942px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(179.753deg, rgb(17, 129, 233) 1.095%, rgb(255, 104, 155) 110.73%)" }}>
        <p className="leading-[normal]">Akash</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
      <Frame29 />
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center relative shrink-0 text-[#a0aec0] text-[24px] w-[659px]">
        <p className="leading-[normal]">You’re all set for the interview. Here’s your video preview, feel free to check your camera, mic, or speaker in the dropdowns below.</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[14px] relative shrink-0 w-[16.851px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8505 14">
        <g id="Group 427320789">
          <path d={svgPaths.p35cc4200} fill="var(--fill-0, #A0AEC0)" id="Vector" />
          <path d={svgPaths.p3e7b7400} fill="var(--fill-0, #A0AEC0)" id="Vector_2" />
          <path d={svgPaths.p8bab480} fill="var(--fill-0, #A0AEC0)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[147px]">
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#37b971] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#d9d9d9] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#d9d9d9] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#d9d9d9] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
      <div className="bg-[#d9d9d9] h-[12px] rounded-[2px] shrink-0 w-[6px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d4759] text-[12px] w-[103px]">Internet Speed</p>
      <Frame15 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fafffd] content-stretch flex gap-[16px] items-center ml-[18px] mt-[11px] relative">
      <Group6 />
      <Frame14 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#fafffd] border border-[#e2e8f0] border-dashed h-[60px] ml-0 mt-0 rounded-[12px] w-[290px]" />
      <Frame24 />
    </div>
  );
}

function LiVolume() {
  return (
    <BackgroundImage2>
      <g id="li:volume-2">
        <path clipRule="evenodd" d={svgPaths.p31effb00} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" id="Vector" />
        <path clipRule="evenodd" d={svgPaths.p3a90cc00} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" id="Vector_2" />
        <path clipRule="evenodd" d={svgPaths.p31612700} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" id="Vector_3" />
      </g>
    </BackgroundImage2>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[18px] min-w-full relative shrink-0 text-[#3d4759] text-[12px] w-[min-content]">Speaker</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#718096] text-[14px] w-[148px]">Macbook Pro Speaker</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[204px]">
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <LiVolume />
      <Frame16 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[32px] pr-0 py-0 relative shrink-0">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#119b54] text-[12px] text-nowrap">Test Speaker</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function InputFieldPrimitive() {
  return (
    <div className="content-stretch flex gap-[6px] items-center pl-[18px] pr-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="InputField_Primitive">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame28 />
      <VectorBackgroundImage />
    </div>
  );
}

function LiCamera() {
  return (
    <BackgroundImage2>
      <g id="li:camera">
        <path clipRule="evenodd" d={svgPaths.p24235a00} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" id="Vector" />
        <path clipRule="evenodd" d={svgPaths.pc5ca900} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" id="Vector_2" />
      </g>
    </BackgroundImage2>
  );
}

function InputFieldPrimitive1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[60px] items-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="InputField_Primitive">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <LiCamera />
      <BackgroundImage text="Camera Access" text1="Macbook Pro Camera" additionalClassNames="justify-center not-italic w-[204px]" />
      <VectorBackgroundImage />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15.305px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3054 20.0003">
        <g id="Group">
          <path d={svgPaths.p2291e20} fill="var(--fill-0, #A0AEC0)" id="Vector" />
          <path d={svgPaths.p24132b00} fill="var(--fill-0, #A0AEC0)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center not-italic relative shrink-0 w-[190px]">
      <BackgroundImage text="Mic Access" text1="Required" additionalClassNames="w-full" />
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[18px] relative shrink-0 text-[#119b54] text-[12px] text-nowrap">Test Mic</p>
    </div>
  );
}

function InputFieldPrimitive2() {
  return (
    <div className="content-stretch flex gap-[14px] h-[78px] items-center pl-[18px] pr-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[290px]" data-name="InputField_Primitive">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Group />
      <Frame17 />
      <VectorBackgroundImage />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start ml-[682px] mt-[40px] relative">
      <Group7 />
      <InputFieldPrimitive />
      <InputFieldPrimitive1 />
      <InputFieldPrimitive2 />
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[906.03px] mt-[402px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['SF_Pro_Text:Medium',sans-serif] leading-[18px] ml-0 mt-0 not-italic relative text-[#3d4759] text-[12px] text-nowrap">Need help?</p>
    </div>
  );
}

function Group1() {
  return (
    <BackgroundImage3>
      <g id="Group 54">
        <path d={svgPaths.pfb7ed00} fill="var(--fill-0, #3D4759)" id="Rectangle 15" />
        <path d={svgPaths.p22860000} fill="var(--fill-0, #3D4759)" id="Rectangle 165484" />
        <path d="M56.5 56V0" id="Vector 25" stroke="var(--stroke-0, #27323D)" strokeWidth="1.5" />
        <g id="li:chevron-down">
          <path clipRule="evenodd" d={svgPaths.p3ba03200} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" id="Vector" />
        </g>
        <g id="li:mic">
          <path clipRule="evenodd" d={svgPaths.p27183700} fill="var(--fill-0, #EFF3F8)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p17a82500} fill="var(--fill-0, #EFF3F8)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p34c30d0} fill="var(--fill-0, #EFF3F8)" fillRule="evenodd" id="Vector_4" />
        </g>
      </g>
    </BackgroundImage3>
  );
}

function Group2() {
  return (
    <BackgroundImage3>
      <g id="Group 55">
        <path d={svgPaths.pfb7ed00} fill="var(--fill-0, #3D4759)" id="Rectangle 15" />
        <path d={svgPaths.p22860000} fill="var(--fill-0, #3D4759)" id="Rectangle 165484" />
        <path d="M56.5 56V0" id="Vector 25" stroke="var(--stroke-0, #27323D)" strokeWidth="1.5" />
        <g id="li:chevron-down">
          <path clipRule="evenodd" d={svgPaths.p3ba03200} fill="var(--fill-0, #A0AEC0)" fillRule="evenodd" id="Vector" />
        </g>
        <g id="li:video">
          <path clipRule="evenodd" d={svgPaths.p1de86010} fill="var(--fill-0, #EFF3F8)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p5ae9200} fill="var(--fill-0, #EFF3F8)" fillRule="evenodd" id="Vector_3" />
        </g>
      </g>
    </BackgroundImage3>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[24px] items-center ml-[235px] mt-[399px] relative">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[511px] ml-0 mt-0 relative w-[1020px]">
        <div className="absolute inset-[-0.96%_-0.88%_-2.54%_-0.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1038 528.905">
            <g filter="url(#filter0_d_69_456)" id="Rectangle 165486">
              <path d={svgPaths.p4fb7b80} fill="var(--fill-0, #FAFFFD)" />
              <path d={svgPaths.p2e785880} stroke="url(#paint0_linear_69_456)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="528.905" id="filter0_d_69_456" width="1038" x="0" y="-2.23517e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.300284 0 0 0 0 0.947191 0 0 0 0 0.614362 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_69_456" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_69_456" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_69_456" x1="519" x2="519" y1="4.90505" y2="479.049">
                <stop stopColor="#00D369" />
                <stop offset="1" stopColor="#00F67B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame23 />
      <Group8 />
      <div className="[grid-area:1_/_1] h-[431px] ml-[40px] mt-[40px] relative rounded-[16px] w-[592px]" data-name="interview candidate">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute h-[143.53%] left-[-34.34%] max-w-none top-[-5.26%] w-[156.61%]" src={imgInterviewCandidate} />
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start leading-[0] left-[109px] top-[224px] w-[1289px]">
      <Frame30 />
      <Group5 />
    </div>
  );
}

function Buttondsf() {
  return (
    <div className="absolute bg-[#119b54] content-stretch flex gap-[110px] h-[52px] items-center justify-center left-[-333px] opacity-0 px-[32px] py-[8px] rounded-[44px] top-[866px] w-[320px]" data-name="Buttondsf">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">{`Verify & Proceed`}</p>
      <BackgroundImage1 />
    </div>
  );
}

function Buttondsf1() {
  return (
    <div className="absolute bg-[#119b54] content-stretch flex h-[52px] items-center justify-between left-[820px] px-[32px] py-[8px] rounded-[44px] top-[866px] w-[320px]" data-name="Buttondsf">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Start Interview</p>
      <BackgroundImage1 />
    </div>
  );
}

export default function InterviewStart() {
  return (
    <div className="bg-[#fafbff] relative size-full" data-name="Interview Start">
      <div className="absolute border-[#1976d2] border-[7px] border-solid h-[1024px] left-0 top-0 w-[1443px]" style={{ backgroundImage: "linear-gradient(121.914deg, rgb(0, 32, 14) 11.492%, rgb(5, 11, 7) 50.77%, rgb(0, 32, 14) 115.47%)" }} />
      <div className="absolute h-[24px] left-[120px] top-[104px] w-[235px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 24">
          <g id="Vector">
            <path d={svgPaths.pa61a572} fill="#37B971" />
            <path d={svgPaths.p3c30f100} fill="#37B971" />
            <path d={svgPaths.p27992a80} fill="#37B971" />
            <path d={svgPaths.p46da500} fill="#37B971" />
            <path d={svgPaths.p11a89300} fill="#37B971" />
            <path d={svgPaths.pdc58600} fill="#37B971" />
            <path d={svgPaths.p3fbb0300} fill="#37B971" />
            <path d={svgPaths.p20db8a80} fill="#37B971" />
            <path d={svgPaths.p20230700} fill="#37B971" />
            <path d={svgPaths.p14a05f72} fill="#37B971" />
            <path d={svgPaths.p36a42eb0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38fea580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37af0380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1bbbdfd2} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2312d440} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <Group3 />
      <Group4 />
      <Frame31 />
      <Buttondsf />
      <Buttondsf1 />
    </div>
  );
}