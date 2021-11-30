export default function Widget({ title, timeframes, timeframeSelected }) {
  return (
    <div className={`styles.widget__${title}`}>
      <h2>{title}</h2>
      <p>{timeframes[timeframeSelected].current}hrs</p>
      <p>Previous - {timeframes[timeframeSelected].previous}hrs</p>
    </div>
  );
}
