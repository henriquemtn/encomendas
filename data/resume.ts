import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
      ],
      contact: {
        email: "hello@example.com",
        tel: "+123456789",
        social: {
          GitHub: {
            name: "GitHub",
            url: "https://github.com/henriquemtn",
            icon: Icons.github,
    
            navbar: true,
          },
          LinkedIn: {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/henriquemtn/",
            icon: Icons.linkedin,
    
            navbar: true,
          },
          X: {
            name: "X",
            url: "https://x.com/henriquemtn",
            icon: Icons.x,
    
            navbar: true,
          },
          Youtube: {
            name: "Youtube",
            url: "https://www.youtube.com/@starwhenry",
            icon: Icons.youtube,
            navbar: true,
          },
          email: {
            name: "Send Email",
            url: "#",
            icon: Icons.email,
    
            navbar: false,
          },
        },
      },
    
}