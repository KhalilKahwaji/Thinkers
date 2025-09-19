import { useMemo } from "react";

type Props = {
  /** Matterport model ID, e.g. "jAHBNyfoc3a" */
  modelId: string;
  autoplay?: boolean;   // play=1
  brand?: boolean;      // brand=0 hides top brand bar if false
  title?: boolean;      // title=0 hides model title if false
  quickstart?: boolean; // qs=1 (faster load)
  dollhouse?: boolean;  // dh=1 (hide dollhouse)
};

export default function VirtualTour({
  modelId,
  autoplay = true,
  brand = false,
  title = false,
  quickstart = true,
  dollhouse = false,
}: Props) {
  const src = useMemo(() => {
    const q = new URLSearchParams();
    if (autoplay) q.set("play", "1");
    if (quickstart) q.set("qs", "1");
    if (!brand) q.set("brand", "0");
    if (!title) q.set("title", "0");
    if (dollhouse) q.set("dh", "1");
    return `https://my.matterport.com/show/?m=${modelId}&${q.toString()}`;
  }, [modelId, autoplay, brand, title, quickstart, dollhouse]);

  return (
    <div style={{
      position: "relative",
      paddingTop: "56.25%", /* 16:9 */
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid #23262d",
    }}>
      <iframe
        title="Thinkers Virtual Tour"
        src={src}
        allow="fullscreen; xr-spatial-tracking"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  );
}
