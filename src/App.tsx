import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { MainLayout } from "./components/layout/MainLayout";

const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const Topics = lazy(() => import("./pages/Topics").then(m => ({ default: m.Topics })));
const TopicDetails = lazy(() => import("./pages/TopicDetails").then(m => ({ default: m.TopicDetails })));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage").then(m => ({ default: m.PlaceholderPage })));

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="learnstack-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="topics" element={<Topics />} />
            <Route path="details/:topicSlug" element={<TopicDetails />} />
            <Route path="details/:topicSlug/:lessonSlug" element={<PlaceholderPage />} />
            <Route path="roadmap" element={<PlaceholderPage />} />
            <Route path="practice" element={<PlaceholderPage />} />
            <Route path="search" element={<PlaceholderPage />} />
            <Route path="bookmarks" element={<PlaceholderPage />} />
            <Route path="about" element={<PlaceholderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
