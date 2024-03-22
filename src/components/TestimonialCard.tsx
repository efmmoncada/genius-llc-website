import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
  company: string;
  testimonialText: string;
};

export function TestimonialCard({ children, company, testimonialText }: Props) {
  return (
    <Card>
      <CardHeader className="gap-x-4">
        {/* {children} */}
        <Avatar src="https://fakeimg.pl/400x400" size='md'/>
        <h4 className="font-semibold text-lg">{company}</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="italic">"{testimonialText}"</p>
      </CardBody>
    </Card>
  );
}
