import type { Metadata } from "next"
import { AlertCircle, ChevronsUpDown, CreditCard, Moon, Settings, Sun, User } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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