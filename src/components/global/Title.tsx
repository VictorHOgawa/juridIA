"use client";
interface TitleProps {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="mt-10 flex flex-col gap-4 text-center">
      <span className="text-5xl leading-8 tracking-[4px] text-primary-500">
        {title}
      </span>
      <span className="text-5xl font-bold leading-10">{subtitle}</span>
      <div className="flex flex-col items-center self-center">
        <div className="h-0.5 w-[80px] bg-primary-500" />
        <div className="h-0.5 w-[75px] bg-primary-500" />
        <div className="h-0.5 w-[70px] bg-primary-500" />
        <div className="h-0.5 w-[65px] bg-primary-500" />
      </div>
    </div>
  );
}
