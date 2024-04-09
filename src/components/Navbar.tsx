import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <Navbar
      classNames={{
        wrapper: "justify-end",
        brand: "justify-self-start",
      }}
      maxWidth="full"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <a href="/">{children}</a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <a href="/" className="text-lg">
            Home
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#services" className="text-lg">
            Services
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#testimonials" className="text-lg">
            Testimonials
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contact" className="text-lg">
            Contact
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
