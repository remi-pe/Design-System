"use client"

import type { Metadata } from "next"
import { AlertCircle, Check, ChevronsUpDown, CreditCard, Moon, Settings, Sun, User } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { FontSelector } from "@/components/design-system/font-selector"
import { ThemeToggle } from "@/components/design-system/theme-toggle"
import { useDesignSystem } from "@/context/design-system-context"

// TypeScript interfaces for component props
interface ComponentCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  category: ComponentCategory;
}

// Component categories based on atomic design
type ComponentCategory = "atom" | "molecule" | "organism";

// Typography and Colors components
const TypographyComponent = () => {
  const { headerFont, bodyFont } = useDesignSystem();
  
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Heading 1</h1>
        <p className="text-sm text-muted-foreground">text-4xl font-bold ({headerFont})</p>
      </div>
      <div>
        <h2 className="text-3xl font-normal">Heading 2</h2>
        <p className="text-sm text-muted-foreground">text-3xl font-normal ({headerFont})</p>
      </div>
      <div>
        <h3 className="text-2xl font-medium">Heading 3</h3>
        <p className="text-sm text-muted-foreground">text-2xl font-medium ({headerFont})</p>
      </div>
      <div>
        <h4 className="text-xl font-medium">Heading 4</h4>
        <p className="text-sm text-muted-foreground">text-xl font-medium ({headerFont})</p>
      </div>
      <div>
        <p className="text-base">Base text - The quick brown fox jumps over the lazy dog.</p>
        <p className="text-sm text-muted-foreground">text-base ({bodyFont})</p>
      </div>
      <div>
        <p className="text-sm">Small text - The quick brown fox jumps over the lazy dog.</p>
        <p className="text-sm text-muted-foreground">text-sm ({bodyFont})</p>
      </div>
      <div>
        <p className="text-muted-foreground">Muted text - The quick brown fox jumps over the lazy dog.</p>
        <p className="text-sm text-muted-foreground">text-muted-foreground ({bodyFont})</p>
      </div>
    </div>
  );
};

const typographyAndColors = [
  // Typography
  {
    title: "Typography",
    description: "Font styles used throughout the design system.",
    category: "atom" as ComponentCategory,
    component: <TypographyComponent />,
  },
  // Colors
  {
    title: "Colors",
    description: "Color palette used throughout the design system.",
    category: "atom" as ComponentCategory,
    component: (
      <div className="w-full space-y-6">
        <div className="space-y-2">
          <p className="font-medium">Primary</p>
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-primary"></div>
              <p className="text-xs mt-1">primary</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-primary-foreground"></div>
              <p className="text-xs mt-1">foreground</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Secondary</p>
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-secondary"></div>
              <p className="text-xs mt-1">secondary</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-secondary-foreground"></div>
              <p className="text-xs mt-1">foreground</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Accent</p>
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-accent"></div>
              <p className="text-xs mt-1">accent</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-accent-foreground"></div>
              <p className="text-xs mt-1">foreground</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Destructive</p>
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-destructive"></div>
              <p className="text-xs mt-1">destructive</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-destructive-foreground"></div>
              <p className="text-xs mt-1">foreground</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Muted</p>
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-muted"></div>
              <p className="text-xs mt-1">muted</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-muted-foreground"></div>
              <p className="text-xs mt-1">foreground</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Card</p>
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-card"></div>
              <p className="text-xs mt-1">card</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-card-foreground"></div>
              <p className="text-xs mt-1">foreground</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Background & Border</p>
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-background border"></div>
              <p className="text-xs mt-1">background</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-border"></div>
              <p className="text-xs mt-1">border</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// Component definitions with metadata
const components = [
  // Atoms - Basic building blocks
  {
    title: "Avatar",
    description: "An image element with a fallback for representing the user.",
    category: "atom" as ComponentCategory,
    component: (
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    title: "Badge",
    description: "Displays a small badge.",
    category: "atom" as ComponentCategory,
    component: (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    ),
  },
  {
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    category: "atom" as ComponentCategory,
    component: (
      <div className="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    ),
  },
  {
    title: "Checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    category: "atom" as ComponentCategory,
    component: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    ),
  },
  {
    title: "Input",
    description: "Displays a form input field or a component that looks like an input field.",
    category: "atom" as ComponentCategory,
    component: (
      <Input placeholder="Email" type="email" className="w-full max-w-xs" />
    ),
  },
  {
    title: "Label",
    description: "Renders an accessible label associated with controls.",
    category: "atom" as ComponentCategory,
    component: (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    ),
  },
  {
    title: "Progress",
    description: "Displays an indicator showing the completion progress of a task.",
    category: "atom" as ComponentCategory,
    component: (
      <Progress value={60} className="w-full" />
    ),
  },
  {
    title: "Separator",
    description: "Visually or semantically separates content.",
    category: "atom" as ComponentCategory,
    component: (
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    ),
  },
  {
    title: "Skeleton",
    description: "Used to show a placeholder while content is loading.",
    category: "atom" as ComponentCategory,
    component: (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    ),
  },
  {
    title: "Slider",
    description: "An input where the user selects a value from within a given range.",
    category: "atom" as ComponentCategory,
    component: (
      <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
    ),
  },
  {
    title: "Switch",
    description: "A control that allows the user to toggle between checked and not checked.",
    category: "atom" as ComponentCategory,
    component: (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    ),
  },
  {
    title: "Textarea",
    description: "Displays a form textarea or a component that looks like a textarea.",
    category: "atom" as ComponentCategory,
    component: (
      <Textarea placeholder="Type your message here." className="w-full max-w-xs" />
    ),
  },
  
  // Molecules - Combinations of atoms
  {
    title: "Alert",
    description: "Displays a callout for user attention.",
    category: "molecule" as ComponentCategory,
    component: (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
      </Alert>
    ),
  },
  {
    title: "Aspect Ratio",
    description: "Displays content within a desired ratio.",
    category: "molecule" as ComponentCategory,
    component: (
      <div className="w-full">
        <AspectRatio ratio={16 / 9}>
          <div className="flex h-full w-full items-center justify-center bg-muted rounded-md">
            16:9 Aspect Ratio
          </div>
        </AspectRatio>
      </div>
    ),
  },
  {
    title: "Card",
    description: "Displays a card with header, content, and footer.",
    category: "molecule" as ComponentCategory,
    component: (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    ),
  },
  {
    title: "Toggle",
    description: "A two-state button that can be either on or off.",
    category: "molecule" as ComponentCategory,
    component: (
      <div className="flex gap-2">
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
          <Sun className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
          <Moon className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
  
  // Organisms - Complex UI components
  {
    title: "Tabs",
    description: "A set of layered sections of content—known as tab panels—that display one panel at a time.",
    category: "organism" as ComponentCategory,
    component: (
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Make changes to your account here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    ),
  },
];

// Combine typography/colors with other components
const atomComponents = [...typographyAndColors, ...components.filter(comp => comp.category === "atom")];
const moleculeComponents = components.filter(comp => comp.category === "molecule");
const organismComponents = components.filter(comp => comp.category === "organism");

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold text-left">Design System</h1>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        {/* Left sidebar with controls */}
        <div className="space-y-6">
          <FontSelector />
        </div>

        {/* Right side with component showcase */}
        <div>
          {/* Category Filter */}
          <div className="mb-10">
            <Tabs defaultValue="atom" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto">
                <TabsTrigger value="atom">Atoms</TabsTrigger>
                <TabsTrigger value="molecule">Molecules</TabsTrigger>
                <TabsTrigger value="organism">Organisms</TabsTrigger>
              </TabsList>
              
              {/* Atoms */}
              <TabsContent value="atom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                  {atomComponents.map((component, index) => (
                    <ComponentCard
                      key={index}
                      title={component.title}
                      description={component.description}
                      category={component.category}
                    >
                      {component.component}
                    </ComponentCard>
                  ))}
                </div>
              </TabsContent>

              {/* Molecules */}
              <TabsContent value="molecule">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                  {moleculeComponents.map((component, index) => (
                    <ComponentCard
                      key={index}
                      title={component.title}
                      description={component.description}
                      category={component.category}
                    >
                      {component.component}
                    </ComponentCard>
                  ))}
                </div>
              </TabsContent>

              {/* Organisms */}
              <TabsContent value="organism">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                  {organismComponents.map((component, index) => (
                    <ComponentCard
                      key={index}
                      title={component.title}
                      description={component.description}
                      category={component.category}
                    >
                      {component.component}
                    </ComponentCard>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper component for displaying each Shadcn component in a card
function ComponentCard({ title, description, children, category }: ComponentCardProps) {
  // Category badge colors
  const categoryColors = {
    atom: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    molecule: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    organism: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  };
  
  // Category labels
  const categoryLabels = {
    atom: "Atom",
    molecule: "Molecule",
    organism: "Organism",
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[category]}`}>
            {categoryLabels[category]}
          </span>
        </div>
        <div className="pt-4 border-t">
          {children}
        </div>
      </div>
    </div>
  )
} 