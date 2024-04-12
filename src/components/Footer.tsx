export function Footer() {
  return (
    <footer className="mt-4 bg-white p-6 text-center w-full text-sm">
      <p className="my-1">
        <a className="mx-2 underline" href="/">
          Home
        </a>{" "}
        &sdot;
        <a className="mx-2 underline" href="#services">
          Services
        </a>
        &sdot;{" "}
        <a className="mx-2 underline" href="#testimonials">
          Testimonials
        </a>
        &sdot;{" "}
        <a className="mx-2 underline" href="/#contact">
          Contact Us
        </a>
      </p>
      <p className="mt-4">&copy; Genius Express Delivery LLC</p>
    </footer>
  );
}
