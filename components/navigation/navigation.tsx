"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StyledNavigation } from "./Stylednavigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <StyledNavigation>
            <p>
                <Link href="/">Home</Link>
            </p>
            <p>
                <Link href="/about-us">About us</Link>
            </p>
        </StyledNavigation>
    );
}
