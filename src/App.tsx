import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { MainLayout } from "./components/layout/MainLayout";
import { Home } from "./pages/Home";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { TopicDetails } from "./pages/TopicDetails";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="learnstack-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="topics" element={<PlaceholderPage />} />
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
