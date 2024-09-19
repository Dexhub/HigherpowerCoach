import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ArrowRight, CheckCircle, Download, Heart, Shield, Smartphone, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">Higher Power Coach</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Empower Your Recovery Journey
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Higher Power Coach: Your spiritual companion for tracking progress, celebrating milestones, and finding strength in your path to sobriety.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Download Now
                  <Download className="ml-2 h-4 w-4" />
                </a>
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Smartphone className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Spiritual Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">Log your spiritual progress and sobriety milestones with ease.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Daily Affirmations</h3>
                <p className="text-gray-500 dark:text-gray-400">Receive uplifting messages and spiritual guidance every day.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Heart className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-bold">Supportive Community</h3>
                <p className="text-gray-500 dark:text-gray-400">Connect with others on similar spiritual journeys for mutual support.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Transformation Stories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 border p-6 rounded-lg">
                <img
                  alt="User"
                  className="rounded-full"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <blockquote className="text-center text-gray-500 italic">"Higher Power Coach helped me reconnect with my spirituality. I'm 6 months sober and feeling blessed."</blockquote>
                <p className="font-semibold">- Sarah M.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 border p-6 rounded-lg">
                <img
                  alt="User"
                  className="rounded-full"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <blockquote className="text-center text-gray-500 italic">"The daily affirmations and community support keep me grounded in my recovery journey."</blockquote>
                <p className="font-semibold">- John D.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 border p-6 rounded-lg">
                <img
                  alt="User"
                  className="rounded-full"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <blockquote className="text-center text-gray-500 italic">"This app helped me find strength in my higher power. One year strong and forever grateful!"</blockquote>
                <p className="font-semibold">- Emily R.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid gap-6 mx-auto max-w-3xl">
              <details className="border p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Is Higher Power Coach affiliated with any specific religion?</summary>
                <p className="mt-2 text-gray-500">No, Higher Power Coach is designed to support individuals of all faiths and spiritual beliefs in their recovery journey.</p>
              </details>
              <details className="border p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Can I customize my spiritual practices within the app?</summary>
                <p className="mt-2 text-gray-500">Yes, Higher Power Coach allows you to personalize your spiritual tracking and practices to align with your individual beliefs and recovery goals.</p>
              </details>
              <details className="border p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Is my personal information kept confidential?</summary>
                <p className="mt-2 text-gray-500">Absolutely. We prioritize your privacy and ensure that all personal data is encrypted and never shared without your explicit consent.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Ready to Embrace Your Higher Power?</h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download Higher Power Coach now and take the first step towards a spiritually enriched, sober life.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">
                    Get App
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  By signing up, you agree to our{" "}
                  <a className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Higher Power Coach. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}
