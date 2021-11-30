export default function Widget({ title, timeframes, timeframeSelected }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{timeframes[timeframeSelected].current}</p>
      <p>{timeframes[timeframeSelected].previous}</p>
    </div>
  );
}
