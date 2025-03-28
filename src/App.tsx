import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Module pages
import AquaGuard from "./pages/modules/AquaGuard";
import AgriPulse from "./pages/modules/AgriPulse";
import EduReach from "./pages/modules/EduReach";
import ResourceSafe from "./pages/modules/ResourceSafe";
import HealthWatch from "./pages/modules/HealthWatch";
import ClimateSmart from "./pages/modules/ClimateSmart";
import EmpowerHer from "./pages/modules/EmpowerHer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Module Routes */}
          <Route path="/modules/aquaguard" element={<AquaGuard />} />
          <Route path="/modules/agripulse" element={<AgriPulse />} />
          <Route path="/modules/edureach" element={<EduReach />} />
          <Route path="/modules/resourcesafe" element={<ResourceSafe />} />
          <Route path="/modules/healthwatch" element={<HealthWatch />} />
          <Route path="/modules/climatesmart" element={<ClimateSmart />} />
          <Route path="/modules/empowerher" element={<EmpowerHer />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
