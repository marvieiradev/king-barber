import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-none mt-2">
        <CardContent className="py-4 flex justify-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 - <span className="font-bold">King Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
