import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckIcon, Plus, XIcon } from "lucide-react"
import Navbar from "./Navbar"
import { Suspense } from "react"
import VideoComponent from "./VideoComponent"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#11161E]">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#11161E]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 text-white flex justify-center flex-col items-center">
                <h2 className="text-3xl font-bold tracking-tighter max-w-4xl sm:text-5xl">AI-driven solutions for <span className="italic text-[#23ce6b]">Sustainable</span> Transportation Future</h2>
                <p className="max-w-[700px] pt-10 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Optimize Electric Mobility, Charging Infrastructure, and Low-Carbon Logistics with AI.
                </p>
                <div className="pt-10">
                    <Button className="bg-foreground shadow-xl border-[0.6px] border-[#23ce6b]">Get Started</Button>
                </div>
              </div>
            </div>
            <section className="py-20">
                <Suspense fallback={<p>Loading video...</p>}>
                    <VideoComponent />
                </Suspense>
                {/* Other content of the page */}
            </section>

            <div className="flex justify-center text-white text-center pt-20">
            <h2 className="text-3xl font-bold tracking-tighter max-w-3xl sm:text-5xl">Innovative<span className="italic text-[#23ce6b]"> Green </span>Transportation Features</h2>
            </div>
            <div className="mx-auto grid max-w-xl items-center gap-6 py-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6 pt-16">
                  <li className="border-white border-b py-10 px-5">
                    <div className="grid gap-1">
                        <div className="flex gap-2 items-center">
                        <Plus className="text-white hover:rotate-90 hover:text-[#23ce6b] transition-all duration-300" />
                      <h3 className="text-xl font-bold text-[#23ce6b]">Electric Vehicles</h3></div>
                      <p className="text-muted-foreground">
                        Access our fleet of state-of-the-art electric vehicles for your daily commute or weekend
                        adventures.
                      </p>
                    </div>
                  </li>
                  <li className="border-white border-b py-10 px-5">
                    <div className="grid gap-1">
                        <div className="flex gap-2 items-center">
                        <Plus className="text-white hover:rotate-90 hover:text-[#23ce6b] transition-all duration-300" />
                      <h3 className="text-xl font-bold text-[#23ce6b]">Shared Mobility</h3></div>
                      <p className="text-muted-foreground">
                        Seamlessly book and unlock shared vehicles, scooters, and bikes through our intuitive mobile
                        app.
                      </p>
                    </div>
                  </li>
                  <li className="border-white border-b py-10 px-5">
                    <div className="grid gap-1">
                    <div className="flex gap-2 items-center">
                        <Plus className="text-white hover:rotate-90 hover:text-[#23ce6b] transition-all duration-300" />
                      <h3 className="text-xl font-bold text-[#23ce6b]">Charging Network</h3></div>
                      <p className="text-muted-foreground">
                        Enjoy access to our extensive network of public charging stations, ensuring your journey is
                        uninterrupted.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-40 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#23ce6b]">Seamless EV Charging Experience</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides a comprehensive charging solution, ensuring your electric vehicle is always
                powered and ready for your next adventure.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-foreground shadow-xl border-[0.6px] border-[#23ce6b]"
                prefetch={false}
              >
                Explore Charging
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  bg-[#11161E]">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">Flexible Subscription <span className="text-[#23ce6b]">Plans</span></h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that best suits your mobility needs and enjoy seamless access to our electric vehicles
                and shared mobility services.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl space-y-4 pt-20">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card className="p-6 bg-[#19212c] shadow-sm text-white">
                  <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>Perfect for occasional users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold">$9</div>
                      <div className="text-muted-foreground">per month</div>
                    </div>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Access to shared mobility services
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Discounted EV charging rates
                      </li>
                      <li>
                        <XIcon className="mr-2 inline-block h-4 w-4 text-red-500" />
                        Limited EV rental hours
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-foreground shadow-xl border-[0.6px] border-[#23ce6b]">Subscribe</Button>
                  </CardFooter>
                </Card>
                <Card className="p-6 bg-[#19212c] shadow-sm text-white">
                  <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>For frequent EV and shared mobility users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold">$19</div>
                      <div className="text-muted-foreground">per month</div>
                    </div>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Unlimited access to shared mobility services
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Discounted EV rental rates
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Priority access to charging stations
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-foreground shadow-xl border-[0.6px] border-[#23ce6b]">Subscribe</Button>
                  </CardFooter>
                </Card>
                <Card className="p-6 bg-[#19212c] shadow-sm text-white">
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For businesses and large organizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold">Custom</div>
                      <div className="text-muted-foreground">Pricing</div>
                    </div>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Dedicated fleet management
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Customized charging solutions
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Advanced analytics and reporting
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-foreground shadow-xl border-[0.6px] border-[#23ce6b]">Contact Sales</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-[#19212c]">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">Join the <span className="text-[#23ce6b]">EV Revolution</span></h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up now to experience the future of transportation and unlock the benefits of our electric vehicle
                and shared mobility platform.
              </p>
            </div>
            <div className="mx-auto pt-10 w-full max-w-sm space-y-4">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 text-white" />
                <Button type="submit" className="bg-foreground shadow-xl border-[0.6px] border-[#23ce6b]">Get Started</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#19212c]">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme EV Platform. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false} />
        </nav>
      </footer>
    </div>
  )
}
