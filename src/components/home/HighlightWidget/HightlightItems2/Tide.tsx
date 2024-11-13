const Tide = ({ time, title }: { time: string; title: string }) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-0.5">
        <p className="text-center font-medium text-sm text-zinc-400">{title}</p>
        <h3 className="font-bold text-lg text-zinc-800">{time}</h3>
      </div>
    </>
  );
};

export default Tide;
