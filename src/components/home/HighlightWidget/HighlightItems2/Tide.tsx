import dayjs from 'dayjs';

const Tide = ({ data }: { data: any }) => {
  const title = data.tide_type === 'HIGH' ? '만조' : '간조';
  const hour = dayjs(data.tide_time).format('HH:mm');
  return (
    <>
      {data && (
        <div className="flex flex-col justify-center gap-0.5">
          <p className="text-center font-medium text-sm text-zinc-400">{title}</p>
          <h3 className="font-bold text-lg text-zinc-800">{hour}</h3>
        </div>
      )}
    </>
  );
};

export default Tide;
