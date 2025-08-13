import { Card, CardContent } from "./ui/card";

function HeroCard({ src, alt }) {
  return (
    <Card className="w-[200px] h-[350px] overflow-hidden border-0 shadow-lg p-0">
      <CardContent className="p-0 h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </CardContent>
    </Card>
  );
}

export default HeroCard;