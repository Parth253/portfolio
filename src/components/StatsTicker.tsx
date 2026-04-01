const stats = [
  "100M+ views generated",
  "231K followers grown",
  "58.9M accounts reached",
  "Page sold for $1,500",
  "114M views · single post",
  "335K animator community",
  "2.5M reach in 5 posts",
  "59M reel reach / month",
];

const StatsTicker = () => {
  const items = [...stats, ...stats];

  return (
    <div className="w-full overflow-hidden border-y border-border py-3 bg-card/40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((stat, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm text-muted-foreground shrink-0">
            <span className="text-primary text-lg">✦</span>
            {stat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StatsTicker;
