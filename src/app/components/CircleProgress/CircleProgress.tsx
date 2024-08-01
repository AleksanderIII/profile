interface ICircleProgressProps {
  backgroundUrl: string;
  progress: number;
}

export default function CircleProgress({
  backgroundUrl,
  progress,
}: ICircleProgressProps) {
  return (
    <div
      style={{
        height: '40px',
        width: '40px',
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom left',
      }}
    ></div>
  );
}
