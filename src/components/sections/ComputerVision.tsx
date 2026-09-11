import Reveal from "@/components/ui/Reveal";

export default function ComputerVision() {
  return (
    <section className="bg-[#BDEBFF] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="chip bg-[#27233A] text-white">Computer Vision &amp; Document AI</div>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
              Real objects.{" "}
              <span className="italic text-[#27233A]">Real documents.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#27233A]/70">
              Object detection, visual inspection, OCR, and intelligent
              document processing — the unglamorous, real-world half of
              applied AI.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mx-auto max-w-[380px]">
              <div className="rounded-[1.75rem] border-2 border-dashed border-[#FF7187]/40 bg-white p-6 shadow-[0_25px_60px_-25px_rgba(39,35,58,0.25)]">
                <div className="flex items-center justify-between border-b border-[#E8E3ED] pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#706B80]">Invoice</span>
                  <span className="chip bg-[#BDEBFF] text-[#27233A]">Vision</span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="relative rounded-lg border border-[#FFD0B8] bg-[#FFF3EA] px-3 py-2">
                    <span className="text-xs text-[#706B80]">Vendor</span>
                    <p className="text-sm font-semibold text-[#27233A]">Northwind Supplies</p>
                    <span className="absolute -right-2 -top-2 chip bg-[#FF7187] text-white" style={{ fontSize: "9px", padding: "2px 6px" }}>OCR</span>
                  </div>

                  <div className="relative rounded-lg border border-[#FFD0B8] bg-[#FFF3EA] px-3 py-2">
                    <span className="text-xs text-[#706B80]">Total</span>
                    <p className="text-lg font-bold text-[#27233A]">$420.00</p>
                    <span className="absolute -right-2 -top-2 chip bg-[#FF9FAE] text-white" style={{ fontSize: "9px", padding: "2px 6px" }}>Extracted</span>
                  </div>
                </div>
              </div>

              <div className="editorial-tilt float-y-slow absolute -right-6 -top-6 chip bg-[#FFD0B8] text-[#27233A] shadow-[0_10px_25px_-10px_rgba(39,35,58,0.3)]">
                Object detected
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
