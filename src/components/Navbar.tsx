import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useCallback, useState } from 'react';

export function Nav({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const MenuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
    {
      title: "Contact Us",
      href: "#contact",
    },
  ];

  return (
    <Navbar
      classNames={{
        wrapper: "justify-end",
        brand: "justify-self-start",
      }}
      maxWidth="full"
      isMenuOpen={isMobileMenuOpen}
      onMenuOpenChange={setIsMobileMenuOpen}
      isBordered
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <a href="/">{children}</a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className='hidden sm:flex'>
        {MenuItems.map(({ title, href }, i) => (
          <NavbarItem key={i}>
            <Link className="text-lg text-black" href={href}>
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end' className='sm:hidden'>
        <NavbarMenuToggle aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"} />
      </NavbarContent>
      <NavbarMenu>
        {MenuItems.map(({ title, href }, i) => (
          <NavbarMenuItem key={i}>
            <Link onClick={closeMenu} className='text-black text-lg' href={href}>{title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
