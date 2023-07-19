import Card from "./Component/Card";
import jobData from "./db/Data";
import { useState } from "react";
import Header from "./Component/Header"; // Import the Header component

function App() {
  const [jobs, setJobs] = useState(jobData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByTimeAsc, setSortByTimeAsc] = useState(false);

  const filterJobs = (jobName) => {
    const updatedJobs = jobData.filter((job) =>
      job.title.toLowerCase().includes(jobName.toLowerCase())
    );
    setJobs(updatedJobs);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterJobs(value);
  };

  const resetJobs = () => {
    setJobs(jobData);
    setSearchTerm("");
  };

  const sortByTime = () => {
    const sortedJobs = [...jobs].sort((a, b) => {
      const dateA = new Date(a.dateposted);
      const dateB = new Date(b.dateposted);

      // Sort in ascending order by default
      if (sortByTimeAsc) {
        return dateA - dateB;
      } else {
        // Sort in descending order
        return dateB - dateA;
      }
    });

    setJobs(sortedJobs);
    setSortByTimeAsc(!sortByTimeAsc); // Toggle the sorting order
  };

  return (
    <>
      <Header
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        resetItems={resetJobs}
        sortByTime={sortByTime}
        sortByTimeAsc={sortByTimeAsc}
      />
      <div className="flex gap-2 mb-3 mx-4 items-center justify-center flex-wrap">
        {jobs.map((job) => (
          <Card
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            jobType={job.jobType}
            description={job.description}
            salary={job.salary}
            logo={job.logo}
            companyLogo={job.companyLogo}
            dateposted={job.dateposted}
            bgcolor={job.bgcolor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
