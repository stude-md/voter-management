"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { LuSearch, LuPlus } from "react-icons/lu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 18, {
    message: "Voter must be at least 18 years old",
  }),
  address: z.string().min(5, "Please enter a valid address"),
  voterId: z.string().min(6, "Voter ID must be at least 6 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
})

interface Voter {
  id: string
  name: string
  age: number
  address: string
  voterId: string
  phone: string
  email: string
  status: "Active" | "Inactive"
}

const initialVoters: Voter[] = [
  {
    id: "1",
    name: "John Doe",
    age: 25,
    address: "123 Main St",
    voterId: "V123456",
    phone: "555-0123",
    email: "john@example.com",
    status: "Active",
  },
  // Add more sample data as needed
]

export function VotersClient() {
  const [voters, setVoters] = useState<Voter[]>(initialVoters)
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      address: "",
      voterId: "",
      phone: "",
      email: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newVoter: Voter = {
      id: Math.random().toString(36).substr(2, 9),
      ...values,
      age: parseInt(values.age),
      status: "Active",
    }
    setVoters([...voters, newVoter])
    setOpen(false)
    form.reset()
    toast({
      title: "Voter Registered",
      description: "The voter has been successfully registered in the system.",
    })
  }

  const filteredVoters = voters.filter((voter) =>
    voter.name.toLowerCase().includes(search.toLowerCase()) ||
    voter.voterId.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative">
          <LuSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search voters..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <LuPlus className="mr-2 h-4 w-4" />
              Register New Voter
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Register New Voter</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="25" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="voterId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Voter ID</FormLabel>
                      <FormControl>
                        <Input placeholder="V123456" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="555-0123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Register Voter</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead className="hidden md:table-cell">Address</TableHead>
              <TableHead>Voter ID</TableHead>
              <TableHead className="hidden md:table-cell">Contact</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVoters.map((voter) => (
              <TableRow key={voter.id}>
                <TableCell className="font-medium">{voter.name}</TableCell>
                <TableCell>{voter.age}</TableCell>
                <TableCell className="hidden md:table-cell">{voter.address}</TableCell>
                <TableCell>{voter.voterId}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="text-sm">
                    <div>{voter.phone}</div>
                    <div className="text-muted-foreground">{voter.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    voter.status === "Active" 
                      ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20" 
                      : "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20"
                  }`}>
                    {voter.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 