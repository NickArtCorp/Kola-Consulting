import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* About Us */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link to="/about" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">About Us</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Learn about our mission, values, and the team behind our success
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about/team" title="Our Team">
                Meet the experts driving innovation and excellence
              </ListItem>
              <ListItem href="/about/culture" title="Company Culture">
                Discover our values and what makes us unique
              </ListItem>
              <ListItem href="/about/locations" title="Locations">
                Find our offices around the globe
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/services/strategy" title="Business Strategy">
                Comprehensive consulting for business growth
              </ListItem>
              <ListItem href="/services/digital" title="Digital Transformation">
                Navigate the digital landscape effectively
              </ListItem>
              <ListItem href="/services/optimization" title="Process Optimization">
                Streamline operations for maximum efficiency
              </ListItem>
              <ListItem href="/services/change" title="Change Management">
                Guide your organization through transformation
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Realisation */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Realisation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/realisation/case-studies" title="Case Studies">
                Explore our successful client partnerships
              </ListItem>
              <ListItem href="/realisation/portfolio" title="Portfolio">
                View our diverse range of projects
              </ListItem>
              <ListItem href="/realisation/testimonials" title="Testimonials">
                What our clients say about us
              </ListItem>
              <ListItem href="/realisation/impact" title="Impact">
                Measuring our contribution to client success
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* News */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>News</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/news/updates" title="Company Updates">
                Latest news and developments
              </ListItem>
              <ListItem href="/news/insights" title="Industry Insights">
                Expert analysis and trends
              </ListItem>
              <ListItem href="/news/blog" title="Blog">
                Thought leadership and articles
              </ListItem>
              <ListItem href="/news/events" title="Events">
                Upcoming events and conferences
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Your Needs */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Your Needs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/needs/solutions" title="Solutions">
                Industry-specific consulting solutions
              </ListItem>
              <ListItem href="/needs/assessment" title="Assessment">
                Evaluate your business needs
              </ListItem>
              <ListItem href="/needs/contact" title="Contact">
                Get in touch with our experts
              </ListItem>
              <ListItem href="/needs/resources" title="Resources">
                Helpful tools and documentation
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = (props) => {
  const { className, title, children, href } = props;
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default MainNav;