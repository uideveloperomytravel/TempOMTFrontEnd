import svgPaths from "./svg-whq6zs7d9e";
import imgImageOfficeLocationMap from "figma:asset/8c80b4094c764e5ff7f717c9f6aa7b82ad7e133a.png";

function Group() {
  return (
    <div className="absolute h-[52.001px] left-0 top-[-6px] w-[141.147px]">
      <div className="absolute inset-[0_0_-0.48%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141.147 52.251">
          <g id="Group 10">
            <g id="O My Travel">
              <path d={svgPaths.p2dd04100} fill="var(--fill-0, #203066)" id="Vector" />
              <path d={svgPaths.p3086de80} fill="var(--fill-0, #203066)" id="Vector_2" />
              <path d={svgPaths.p3cd0c800} fill="var(--fill-0, #203066)" id="Vector_3" />
              <path d={svgPaths.p36f3ae00} fill="var(--fill-0, #203066)" id="Vector_4" />
              <path d={svgPaths.p3b6bf700} fill="var(--fill-0, #203066)" id="Vector_5" />
              <path d={svgPaths.p11b1e100} fill="var(--fill-0, #203066)" id="Vector_6" />
            </g>
            <g id="Group 1000002078">
              <path d={svgPaths.p2b3e0d00} fill="var(--fill-0, #FFF3E4)" id="BGcolorMY" stroke="var(--stroke-0, #FFE9CD)" />
              <path d={svgPaths.p31a0fb00} fill="var(--fill-0, #EC2027)" id="Vector_7" stroke="var(--stroke-0, #EC2027)" strokeWidth="0.5" />
              <path d={svgPaths.p2fa88f0} fill="var(--fill-0, #203066)" id="Vector 188" stroke="var(--stroke-0, #203066)" strokeWidth="0.4" />
              <path d={svgPaths.p18146980} fill="var(--fill-0, #EC2027)" id="Vector_8" stroke="var(--stroke-0, #EC2027)" strokeWidth="0.5" />
              <path d={svgPaths.pd97c100} fill="var(--fill-0, #EC2027)" id="Vector_9" stroke="var(--stroke-0, #EC2027)" strokeWidth="0.5" />
              <g id="Mask group">
                <mask height="20" id="mask0_131_1494" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="27" x="3" y="17">
                  <path d={svgPaths.p18c95400} fill="var(--fill-0, #003172)" id="path158" />
                </mask>
                <g mask="url(#mask0_131_1494)">
                  <path d={svgPaths.p2e11b980} fill="var(--fill-0, #203066)" id="Vector_10" />
                </g>
              </g>
              <path d={svgPaths.p19325800} fill="var(--fill-0, #203066)" id="path158_2" />
              <path d={svgPaths.p18153d00} fill="var(--fill-0, #203066)" id="Vector_11" />
            </g>
            <g id="Vector_12"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[52.001px] relative shrink-0 w-[141.148px]">
      <Group />
    </div>
  );
}

function Language() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Language">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_131_606)" id="Language">
          <g id="Vector"></g>
          <path d={svgPaths.p556f6c0} fill="var(--fill-0, #203066)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_131_606">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <Language />
          <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#203066] text-[14px] text-center tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-ew64yg leading-[20px]">ENG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-ew64yg leading-[20px]">Login now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#203066] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="Button">
      <StateLayer1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[66px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[90px] items-start justify-center pointer-events-auto px-[12px] py-[14px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.16)] sticky top-0 w-[385px]">
      <Frame />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[29.998px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-[0.14px] tracking-[-0.4492px]">Our offices</p>
    </div>
  );
}

function ImageOfficeLocationMap() {
  return (
    <div className="h-[191.993px] relative shrink-0 w-full" data-name="Image (Office location map)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f3f4f6] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImageOfficeLocationMap} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24.003px] left-[23.99px] top-[23.99px] w-[280.062px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.9px] tracking-[-0.3125px]">Bangalore</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[113.751px] leading-[22.75px] left-[23.99px] not-italic text-[#4a5565] text-[14px] top-[60px] tracking-[-0.1504px] w-[280.062px]" data-name="Paragraph">
      <p className="absolute css-ew64yg left-0 top-[0.62px]">Cleartrip Pvt Ltd,</p>
      <p className="absolute css-ew64yg left-0 top-[23.37px]">5th and 6th Floor,</p>
      <p className="absolute css-ew64yg left-0 top-[46.12px]">Embassy Tech Village,</p>
      <p className="absolute css-ew64yg left-0 top-[68.87px]">Devarabeesanahalli, ORR,</p>
      <p className="absolute css-ew64yg left-0 top-[91.62px]">Bangalore - 560103</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[94.83px] size-[15.994px] top-[2.51px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9939 15.9939">
        <g id="Icon">
          <path d="M3.33207 7.99696H12.6619" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
          <path d={svgPaths.p3c3bcb80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[21.006px] left-[23.99px] top-[191.84px] w-[110.827px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.1px] tracking-[-0.1504px]">Get directions</p>
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[237.739px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Link />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[430.78px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.524px] relative size-full">
          <ImageOfficeLocationMap />
          <Container />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.524px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.995px] h-[484.773px] items-start left-[32px] top-[111.98px] w-[329.1px]" data-name="Section">
      <Heading />
      <Container1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[29.998px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-[0.14px] tracking-[-0.4492px]">Email</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[16.772px] items-start left-0 top-[23.1px] w-[220.082px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#155dfc] text-[14px] tracking-[-0.1504px]">https://www.cleartrip.com/support</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[42.012px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] top-[0.1px] tracking-[-0.1504px]">For booking queries and support, visit</p>
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[16.772px] items-start left-[67.72px] top-[23.1px] w-[62.068px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#155dfc] text-[14px] tracking-[-0.1504px]">click here</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[42.012px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] top-[0.1px] tracking-[-0.1504px] w-[284px]">{`For concerns regarding Privacy statement & practices,`}</p>
      <Link2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[138.008px] items-start left-[32px] top-[644.75px] w-[329.1px]" data-name="Section">
      <Heading2 />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[29.998px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-[0.14px] tracking-[-0.4492px]">Engage with us</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        <g clipPath="url(#clip0_131_1527)" id="Icon">
          <path d={svgPaths.p3b132f00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
        </g>
        <defs>
          <clipPath id="clip0_131_1527">
            <rect fill="white" height="19.9986" width="19.9986" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[42.012px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative size-full text-[#155dfc] text-[14px] tracking-[-0.1504px]">
        <p className="absolute css-ew64yg left-0 top-[0.1px]">Connect with us on</p>
        <p className="absolute css-ew64yg left-0 top-[21.1px]">Facebook</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[67.055px] items-center left-0 px-[20.523px] py-[0.524px] rounded-[10px] top-0 w-[197.39px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.524px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon1 />
      <Text />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        <g clipPath="url(#clip0_131_1515)" id="Icon">
          <path d={svgPaths.p3db4800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
        </g>
        <defs>
          <clipPath id="clip0_131_1515">
            <rect fill="white" height="19.9986" width="19.9986" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[42.012px] relative shrink-0 w-[80.215px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative size-full text-[#155dfc] text-[14px] tracking-[-0.1504px]">
        <p className="absolute css-ew64yg left-0 top-[0.1px]">Follow us on</p>
        <p className="absolute css-ew64yg left-0 top-[21.1px]">Twitter</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[67.055px] items-center left-0 pl-[20.523px] pr-[0.524px] py-[0.524px] rounded-[10px] top-[83.05px] w-[153.257px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.524px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon2 />
      <Text1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        <g clipPath="url(#clip0_131_1522)" id="Icon">
          <path d={svgPaths.pac11b00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
          <path d={svgPaths.p29abd0b1} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
          <path d={svgPaths.p3389d000} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
        </g>
        <defs>
          <clipPath id="clip0_131_1522">
            <rect fill="white" height="19.9986" width="19.9986" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[42.012px] relative shrink-0 w-[120.81px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative size-full text-[#155dfc] text-[14px] tracking-[-0.1504px]">
        <p className="absolute css-ew64yg left-0 top-[0.1px]">Stay connected on</p>
        <p className="absolute css-ew64yg left-0 top-[21.1px]">Linked-In</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex gap-[11.997px] h-[67.055px] items-center left-0 pl-[20.523px] pr-[0.524px] py-[0.524px] rounded-[10px] top-[166.1px] w-[193.852px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.524px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon3 />
      <Text2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[233.153px] relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.995px] h-[287.146px] items-start left-[32px] top-[830.76px] w-[329.1px]" data-name="Section">
      <Heading3 />
      <Container2 />
    </div>
  );
}

export default function ContactMobile() {
  return (
    <div className="bg-white relative size-full" data-name="Contact mobile">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[32px] not-italic text-[#101828] text-[32px] top-[31.71px] tracking-[0.4063px]">Contact Us</p>
      <div className="absolute bottom-0 h-[1151px] left-[4px] pointer-events-none top-[-1px]">
        <Frame2 />
      </div>
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}