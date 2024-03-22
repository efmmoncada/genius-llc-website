import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <Navbar>
      <NavbarContent justify="start">
        <NavbarBrand>
          {/* {children} */}
          <h1>Genius Express Delivery</h1>
        </NavbarBrand>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Services</NavbarItem>
        <NavbarItem>Testimonials</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
