import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/page";
import NotFound from "./pages/NotFound";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Services from "./pages/service/Services";
import ProjectShowcase from "./pages/projects/Projects";
import Blog from "./pages/blogs/blogs";
import BlogDetail from "./app/blogs/[id]/page";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element ={<About/>}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/projects"  element={<ProjectShowcase />}/>
          <Route path="/blogs" element={<Blog />}/>
          <Route path="/blogs/:id" element={<BlogDetail />}/>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
