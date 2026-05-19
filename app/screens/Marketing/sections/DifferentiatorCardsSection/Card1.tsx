interface Card1Props {
  id: string;
  label: string;
  title: string;
  description: string;
}

export const Card1 = ({ id, label, title, description }: Card1Props): JSX.Element => {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-solid border-[#ece8f3] p-7"
      style={{
        background:
          "linear-gradient(135deg, #fdfbff 0%, #f3ecff 55%, #ebe1ff 100%)",
      }}
    >
      <div className="flex flex-col items-start gap-2.5">
        <div className="flex items-center gap-2 pt-[7px]">
          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8a39e4]" />
          <p className="font-satoshi text-[13px] font-bold leading-[20.8px] tracking-[2.08px] text-[#8a39e4]">
            {id} — {label}
          </p>
        </div>
        <div className="flex w-full flex-col items-start pb-0 pt-[3.99px]">
          <h3 className="font-satoshi self-stretch text-[23px] font-bold leading-[27.6px] tracking-[-0.46px] text-[#0f0a1f]">
            {title}
          </h3>
        </div>
        <p className="font-montserrat self-stretch text-[15px] font-normal leading-6 tracking-[0] text-[#3a3447]">
          {description}
        </p>
      </div>
    </div>
  );
};
