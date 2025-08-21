"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navBar";
import GetStartedButton from "@/components/get-started-button";
import TextType from "@/components/ui/landing-text-type";

const navItems = [
  { name: "Features", link: "/features" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact", link: "/contact" },
];


export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex min-h-screen h-screen flex-col overflow-auto">
        <Navbar className="flex top-10 z-50 w-full fixed">
          {/* Desktop Navbar */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} className="text-md" />
            <div className="flex items-center gap-4 w-fit">
              <NavbarButton href="/auth/sign-in" className="relative z-50">
                Sign In
              </NavbarButton>
              <NavbarButton href="/auth/sign-up" className="relative z-50">
                Get Started
              </NavbarButton>
            </div>
          </NavBody>
          {/* Mobile Navbar */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <div className="flex items-center space-x-2">
                <NavbarButton href="/dashboard" variant="secondary">
                  Sign In
                </NavbarButton>
                <MobileNavToggle
                  isOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div>
            </MobileNavHeader>
            <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="w-full rounded-md px-4 py-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        <div className="flex items-center justify-center h-full gap-15">
          <div className="flex-1 bg-white h-full">
            <Image
              src="/images/landing-hero.png"
              alt="Landing Hero"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col items-start flex-1">
            <div className="w-full h-50">
              <TextType
                text={["Invoicing made simple.", "Payments made stress-free.", "Less paperwork. More freelancing.", "Smart invoices. Smarter growth."]}
                typingSpeed={75}
                pauseDuration={1500}
                className="text-8xl font-bold"
                showCursor={true}
                cursorCharacter="_"
              />
            </div>
            <div className="flex flex-col gap-6 pr-15">
              <p className="mt-4 text-lg">Simple invoicing and payment tracking built for freelancers — so you spend time on projects, not chasing payments.</p>
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-1">
        <div className="max-w-4xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">User-friendly interface</li>
            <li className="mb-2">Seamless integration with your workflow</li>
            <li className="mb-2">Dedicated support for all users</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
