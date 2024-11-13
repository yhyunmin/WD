const ItemTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <div className="flex items-center gap-1">
        <h3 className="font-bold text-base tracking-tighter">{title}</h3>
        <span className="font-semibold text-sm text-zinc-600">{desc}</span>
      </div>
    </>
  );
};

export default ItemTitle;
