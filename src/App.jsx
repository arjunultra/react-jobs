import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
function App() {
  // Write Javascript code above return

  return (
    <>
      <Navbar />
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- Developers and Employers --> */}
      <HomeCards />
      {/* <!-- Browse Jobs --> */}
      <JobListings />
      {/* Button Component */}
      <ViewAllJobs />
    </>
  );
}
export default App;
