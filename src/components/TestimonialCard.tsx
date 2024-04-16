import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
  company: string;
  testimonialText: string;
};

export function TestimonialCard({ children, company, testimonialText }: Props) {
  return (
    <Card classNames={{
      body: "p-5"
    }}>
      <CardHeader className="gap-x-4">
        {/* {children} */}
        <Avatar classNames={{
          img: "opacity-100"
        }} src="/vinesh_lal.jpg" size='lg'/>
        <h4 className="font-semibold text-lg">{company}</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="italic">"{testimonialText}"</p>
      </CardBody>
    </Card>
  );
}
