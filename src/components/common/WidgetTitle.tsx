import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WidgetTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <CardHeader className="p-0">
        <CardTitle className="font-bold text-2xl tracking-tighter">{title}</CardTitle>
        <CardDescription>
          <p className="tracking-tight text-zinc-600">{desc}</p>
        </CardDescription>
      </CardHeader>
    </>
  );
};

export default WidgetTitle;
