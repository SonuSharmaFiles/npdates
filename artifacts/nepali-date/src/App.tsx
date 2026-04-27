import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/Layout";

import Home from "@/pages/Home";
import BsToAd from "@/pages/BsToAd";
import AdToBs from "@/pages/AdToBs";
import Today from "@/pages/Today";
import NepaliCalendar from "@/pages/NepaliCalendar";
import CalendarYear from "@/pages/CalendarYear";
import CalendarMonth from "@/pages/CalendarMonth";
import AgeCalculator from "@/pages/AgeCalculator";
import DateDifference from "@/pages/DateDifference";
import FiscalYearConverter from "@/pages/FiscalYearConverter";
import FiscalYearLanding from "@/pages/FiscalYearLanding";
import Festivals from "@/pages/Festivals";
import BsToAdLanding from "@/pages/BsToAdLanding";
import AdToBsLanding from "@/pages/AdToBsLanding";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import ApiDocs from "@/pages/ApiDocs";
import Widget from "@/pages/Widget";
import Embed from "@/pages/Embed";
import About from "@/pages/About";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function AppRouter() {
  const [location] = useLocation();
  const isEmbed = location.startsWith("/embed");

  const routes = (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/bs-to-ad-converter" component={BsToAd} />
      <Route path="/ad-to-bs-converter" component={AdToBs} />
      <Route path="/today-nepali-date" component={Today} />
      <Route path="/nepali-calendar" component={NepaliCalendar} />
      <Route path="/nepali-calendar-:year" component={CalendarYear} />
      <Route path="/calendar/:year/:month" component={CalendarMonth} />
      <Route path="/age-calculator" component={AgeCalculator} />
      <Route path="/date-difference" component={DateDifference} />
      <Route path="/fiscal-year-converter" component={FiscalYearConverter} />
      <Route path="/fiscal-year/:year" component={FiscalYearLanding} />
      <Route path="/festivals" component={Festivals} />
      <Route path="/bs-to-ad/:year/:month/:day" component={BsToAdLanding} />
      <Route path="/ad-to-bs/:year/:month/:day" component={AdToBsLanding} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/api-docs" component={ApiDocs} />
      <Route path="/widget" component={Widget} />
      <Route path="/embed" component={Embed} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );

  return (
    <>
      <ScrollToTop />
      {isEmbed ? routes : <Layout>{routes}</Layout>}
    </>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <AppRouter />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
