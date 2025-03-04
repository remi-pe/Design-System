import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Shadcn UI Components Showcase</h1>
      
      {/* Components section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Button Component Card */}
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>Interactive button component with multiple variants.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Supports various sizes and can be used as a child component.
            </p>
          </CardFooter>
        </Card>
        
        {/* Card Component Card */}
        <Card>
          <CardHeader>
            <CardTitle>Card</CardTitle>
            <CardDescription>Container for displaying content in a clear, concise format.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards can contain various elements like text, images, and actions.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
        
        {/* Add more component cards here as you implement them */}
        
      </div>
    </main>
  )
} 