import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
  company: string;
  testimonialText: string;
  logoSrc: string;
};

export function TestimonialCard({ children, company, testimonialText, logoSrc }: Props) {
  return (
    <Card classNames={{
      body: "p-5"
    }}>
      <CardHeader className="gap-x-4">
        {/* {children} */}
        <Avatar classNames={{
          img: "opacity-100"
        }} src={logoSrc} size='lg'/>
        <h4 className="font-semibold text-lg">{company}</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="italic">"{testimonialText}"</p>
      </CardBody>
    </Card>
  );
}
