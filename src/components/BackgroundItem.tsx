import CircularProgress from "@/components/customized/progress/progress-09";
import type { Background } from "@/data/mock";

interface BackgroundItemProps {
  isLoading: boolean;
  background: Background;
}

export default function BackgroundItem({
  isLoading,
  background,
}: BackgroundItemProps) {
  return (
    <div
      className={`w-full relative h-auto aspect-9/16 object-cover rounded-lg bg-black flex flex-col items-center justify-center before:content-[''] before:mb-auto ${
        isLoading ? "before:mt-6" : ""
      }`}
    >
      {isLoading ? (
        <>
          <CircularProgress
            value={25}
            circleStrokeWidth={3}
            progressStrokeWidth={3}
            size={100}
            showLabel
            className="stroke-white opacity-20"
            labelClassName="text-[14px] text-white font-medium"
            progressClassName="stroke-brand-highlight"
            renderLabel={(progress) => `${progress}%`}
          />
          <div className="text-white text-[12px] font-semibold mt-auto mb-3 ">
            1 minute left
          </div>
        </>
      ) : (
        <>
          <img
            key={background.id}
            src={background.src}
            alt={`my background #${background.id}`}
            className={`w-full h-auto aspect-9/16 object-cover rounded-lg cursor-pointer ${
              background.isDefault ? "border-2 border-black" : ""
            }`}
          />
          {background.isDefault && (
            <span className="absolute top-2 left-2 bg-white/90 p-1 rounded text-[10px] leading-none font-bold text-brand-muted uppercase border border-brand-border-muted">
              Default
            </span>
          )}
        </>
      )}
    </div>
  );
}
