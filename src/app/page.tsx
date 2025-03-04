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

// TypeScript interfaces for component props
interface ComponentCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Shadcn UI Components Showcase",
  description: "A showcase of Shadcn UI components for testing in isolation",
}

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-4xl font-bold">Shadcn UI Components Showcase</h1>
        <p className="text-muted-foreground text-lg">
          A showcase of Shadcn UI components for testing in isolation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Alert */}
        <ComponentCard 
          title="Alert" 
          description="Displays a callout for user attention."
        >
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
          </Alert>
        </ComponentCard>

        {/* Aspect Ratio */}
        <ComponentCard 
          title="Aspect Ratio" 
          description="Displays content within a desired ratio."
        >
          <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              <div className="flex h-full w-full items-center justify-center bg-muted rounded-md">
                16:9 Aspect Ratio
              </div>
            </AspectRatio>
          </div>
        </ComponentCard>

        {/* Avatar */}
        <ComponentCard 
          title="Avatar" 
          description="An image element with a fallback for representing the user."
        >
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </ComponentCard>

        {/* Badge */}
        <ComponentCard 
          title="Badge" 
          description="Displays a small badge."
        >
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ComponentCard>

        {/* Button */}
        <ComponentCard 
          title="Button" 
          description="Displays a button or a component that looks like a button."
        >
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentCard>

        {/* Card */}
        <ComponentCard 
          title="Card" 
          description="Displays a card with header, content, and footer."
        >
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
        </ComponentCard>

        {/* Checkbox */}
        <ComponentCard
          title="Checkbox"
          description="A control that allows the user to toggle between checked and not checked."
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </ComponentCard>

        {/* Input */}
        <ComponentCard
          title="Input"
          description="Displays a form input field or a component that looks like an input field."
        >
          <Input placeholder="Email" type="email" className="w-full max-w-xs" />
        </ComponentCard>

        {/* Label */}
        <ComponentCard 
          title="Label" 
          description="Renders an accessible label associated with controls."
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </ComponentCard>

        {/* Progress */}
        <ComponentCard 
          title="Progress" 
          description="Displays an indicator showing the completion progress of a task."
        >
          <Progress value={60} className="w-full" />
        </ComponentCard>

        {/* Separator */}
        <ComponentCard 
          title="Separator" 
          description="Visually or semantically separates content."
        >
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
        </ComponentCard>

        {/* Skeleton */}
        <ComponentCard 
          title="Skeleton" 
          description="Used to show a placeholder while content is loading."
        >
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </ComponentCard>

        {/* Slider */}
        <ComponentCard 
          title="Slider" 
          description="An input where the user selects a value from within a given range."
        >
          <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
        </ComponentCard>

        {/* Switch */}
        <ComponentCard
          title="Switch"
          description="A control that allows the user to toggle between checked and not checked."
        >
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </ComponentCard>

        {/* Tabs */}
        <ComponentCard
          title="Tabs"
          description="A set of layered sections of content—known as tab panels—that display one panel at a time."
        >
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
        </ComponentCard>

        {/* Textarea */}
        <ComponentCard
          title="Textarea"
          description="Displays a form textarea or a component that looks like a textarea."
        >
          <Textarea placeholder="Type your message here." className="w-full max-w-xs" />
        </ComponentCard>

        {/* Toggle */}
        <ComponentCard 
          title="Toggle" 
          description="A two-state button that can be either on or off."
        >
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
              <Sun className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
              <Moon className="h-4 w-4" />
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  )
}

// Helper component for displaying each Shadcn component in a card
function ComponentCard({ title, description, children }: ComponentCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center justify-center py-4">{children}</div>
      </div>
    </div>
  )
} 