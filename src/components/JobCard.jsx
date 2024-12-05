import React, {useState} from "react";
import './styles.css';

const JobCard = ({ job }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
  
    const toggleBookmark = () => {
      setIsBookmarked(!isBookmarked);
    };
  
    return (
      <div className="job-card">
        <div className="job-card-header">
          <img
            src={job.companyIcon}
            alt={`${job.companyName} logo`}
            className="company-icon"
          />
          <div>
            <h3 className="job-role">{job.jobRole}</h3>
            <p className="company-name">{job.companyName}</p>
          </div>
          <button
            className="bookmark-icon"
            onClick={toggleBookmark}
            aria-label={isBookmarked ? "Unsave Job" : "Save Job"}
          >
            {isBookmarked ? (
              <i className="fas fa-bookmark text-blue-500"></i> // Filled bookmark
            ) : (
              <i className="far fa-bookmark text-gray-500"></i> // Outline bookmark
            )}
          </button>
        </div>
        <div className="job-details">
          <p><strong>Work Type:</strong> {job.workType}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Location:</strong> {job.location}</p>
        </div>
      </div>
    );
  };

const JobListing = () => {
    const jobsData = [
        {
            jobRole: "Software Engineer",
            workType: "Remote",
            salary: "₹10,00,000 - ₹15,00,000",
            companyIcon: "https://example.com/company1.png",
            companyName: "Tech Solutions",
            location: "Bangalore, India",
        },
        {
            jobRole: "Product Manager",
            workType: "Onsite",
            salary: "₹20,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company2.png",
            companyName: "Innovate Corp",
            location: "Mumbai, India",
        },
        {
            jobRole: "Data Scientist",
            workType: "Hybrid",
            salary: "₹18,00,000 - ₹22,00,000",
            companyIcon: "https://example.com/company3.png",
            companyName: "Data Insights",
            location: "Pune, India",
        },
        {
            jobRole: "UI/UX Designer",
            workType: "Remote",
            salary: "₹8,00,000 - ₹12,00,000",
            companyIcon: "https://example.com/company4.png",
            companyName: "Creative Minds",
            location: "Hyderabad, India",
        },
        {
            jobRole: "Marketing Specialist",
            workType: "Onsite",
            salary: "₹6,00,000 - ₹9,00,000",
            companyIcon: "https://example.com/company5.png",
            companyName: "Market Leaders",
            location: "Delhi, India",
        },
        {
            jobRole: "Full-Stack Developer",
            workType: "Remote",
            salary: "₹12,00,000 - ₹18,00,000",
            companyIcon: "https://example.com/company6.png",
            companyName: "WebWorks",
            location: "Chennai, India",
        },
        {
            jobRole: "DevOps Engineer",
            workType: "Hybrid",
            salary: "₹14,00,000 - ₹20,00,000",
            companyIcon: "https://example.com/company7.png",
            companyName: "Cloud Masters",
            location: "Gurgaon, India",
        },
        {
            jobRole: "Business Analyst",
            workType: "Onsite",
            salary: "₹9,00,000 - ₹14,00,000",
            companyIcon: "https://example.com/company8.png",
            companyName: "Analyze Pro",
            location: "Kolkata, India",
        },
        {
            jobRole: "Machine Learning Engineer",
            workType: "Remote",
            salary: "₹15,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company9.png",
            companyName: "AI Revolution",
            location: "Bangalore, India",
        },
        {
            jobRole: "Cybersecurity Analyst",
            workType: "Onsite",
            salary: "₹10,00,000 - ₹16,00,000",
            companyIcon: "https://example.com/company10.png",
            companyName: "SecureTech",
            location: "Noida, India",
        },
        {
            jobRole: "Software Engineer",
            workType: "Remote",
            salary: "₹10,00,000 - ₹15,00,000",
            companyIcon: "https://example.com/company1.png",
            companyName: "Tech Solutions",
            location: "Bangalore, India",
        },
        {
            jobRole: "Product Manager",
            workType: "Onsite",
            salary: "₹20,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company2.png",
            companyName: "Innovate Corp",
            location: "Mumbai, India",
        },
        {
            jobRole: "Data Scientist",
            workType: "Hybrid",
            salary: "₹18,00,000 - ₹22,00,000",
            companyIcon: "https://example.com/company3.png",
            companyName: "Data Insights",
            location: "Pune, India",
        },
        {
            jobRole: "UI/UX Designer",
            workType: "Remote",
            salary: "₹8,00,000 - ₹12,00,000",
            companyIcon: "https://example.com/company4.png",
            companyName: "Creative Minds",
            location: "Hyderabad, India",
        },
        {
            jobRole: "Marketing Specialist",
            workType: "Onsite",
            salary: "₹6,00,000 - ₹9,00,000",
            companyIcon: "https://example.com/company5.png",
            companyName: "Market Leaders",
            location: "Delhi, India",
        },
        {
            jobRole: "Full-Stack Developer",
            workType: "Remote",
            salary: "₹12,00,000 - ₹18,00,000",
            companyIcon: "https://example.com/company6.png",
            companyName: "WebWorks",
            location: "Chennai, India",
        },
        {
            jobRole: "DevOps Engineer",
            workType: "Hybrid",
            salary: "₹14,00,000 - ₹20,00,000",
            companyIcon: "https://example.com/company7.png",
            companyName: "Cloud Masters",
            location: "Gurgaon, India",
        },
        {
            jobRole: "Business Analyst",
            workType: "Onsite",
            salary: "₹9,00,000 - ₹14,00,000",
            companyIcon: "https://example.com/company8.png",
            companyName: "Analyze Pro",
            location: "Kolkata, India",
        },
        {
            jobRole: "Machine Learning Engineer",
            workType: "Remote",
            salary: "₹15,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company9.png",
            companyName: "AI Revolution",
            location: "Bangalore, India",
        },
        {
            jobRole: "Cybersecurity Analyst",
            workType: "Onsite",
            salary: "₹10,00,000 - ₹16,00,000",
            companyIcon: "https://example.com/company10.png",
            companyName: "SecureTech",
            location: "Noida, India",
        },
        {
            jobRole: "Software Engineer",
            workType: "Remote",
            salary: "₹10,00,000 - ₹15,00,000",
            companyIcon: "https://example.com/company1.png",
            companyName: "Tech Solutions",
            location: "Bangalore, India",
        },
        {
            jobRole: "Product Manager",
            workType: "Onsite",
            salary: "₹20,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company2.png",
            companyName: "Innovate Corp",
            location: "Mumbai, India",
        },
        {
            jobRole: "Data Scientist",
            workType: "Hybrid",
            salary: "₹18,00,000 - ₹22,00,000",
            companyIcon: "https://example.com/company3.png",
            companyName: "Data Insights",
            location: "Pune, India",
        },
        {
            jobRole: "UI/UX Designer",
            workType: "Remote",
            salary: "₹8,00,000 - ₹12,00,000",
            companyIcon: "https://example.com/company4.png",
            companyName: "Creative Minds",
            location: "Hyderabad, India",
        },
        {
            jobRole: "Marketing Specialist",
            workType: "Onsite",
            salary: "₹6,00,000 - ₹9,00,000",
            companyIcon: "https://example.com/company5.png",
            companyName: "Market Leaders",
            location: "Delhi, India",
        },
        {
            jobRole: "Full-Stack Developer",
            workType: "Remote",
            salary: "₹12,00,000 - ₹18,00,000",
            companyIcon: "https://example.com/company6.png",
            companyName: "WebWorks",
            location: "Chennai, India",
        },
        {
            jobRole: "DevOps Engineer",
            workType: "Hybrid",
            salary: "₹14,00,000 - ₹20,00,000",
            companyIcon: "https://example.com/company7.png",
            companyName: "Cloud Masters",
            location: "Gurgaon, India",
        },
        {
            jobRole: "Business Analyst",
            workType: "Onsite",
            salary: "₹9,00,000 - ₹14,00,000",
            companyIcon: "https://example.com/company8.png",
            companyName: "Analyze Pro",
            location: "Kolkata, India",
        },
        {
            jobRole: "Machine Learning Engineer",
            workType: "Remote",
            salary: "₹15,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company9.png",
            companyName: "AI Revolution",
            location: "Bangalore, India",
        },
        {
            jobRole: "Cybersecurity Analyst",
            workType: "Onsite",
            salary: "₹10,00,000 - ₹16,00,000",
            companyIcon: "https://example.com/company10.png",
            companyName: "SecureTech",
            location: "Noida, India",
        },
        {
            jobRole: "Software Engineer",
            workType: "Remote",
            salary: "₹10,00,000 - ₹15,00,000",
            companyIcon: "https://example.com/company1.png",
            companyName: "Tech Solutions",
            location: "Bangalore, India",
        },
        {
            jobRole: "Product Manager",
            workType: "Onsite",
            salary: "₹20,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company2.png",
            companyName: "Innovate Corp",
            location: "Mumbai, India",
        },
        {
            jobRole: "Data Scientist",
            workType: "Hybrid",
            salary: "₹18,00,000 - ₹22,00,000",
            companyIcon: "https://example.com/company3.png",
            companyName: "Data Insights",
            location: "Pune, India",
        },
        {
            jobRole: "UI/UX Designer",
            workType: "Remote",
            salary: "₹8,00,000 - ₹12,00,000",
            companyIcon: "https://example.com/company4.png",
            companyName: "Creative Minds",
            location: "Hyderabad, India",
        },
        {
            jobRole: "Marketing Specialist",
            workType: "Onsite",
            salary: "₹6,00,000 - ₹9,00,000",
            companyIcon: "https://example.com/company5.png",
            companyName: "Market Leaders",
            location: "Delhi, India",
        },
        {
            jobRole: "Full-Stack Developer",
            workType: "Remote",
            salary: "₹12,00,000 - ₹18,00,000",
            companyIcon: "https://example.com/company6.png",
            companyName: "WebWorks",
            location: "Chennai, India",
        },
        {
            jobRole: "DevOps Engineer",
            workType: "Hybrid",
            salary: "₹14,00,000 - ₹20,00,000",
            companyIcon: "https://example.com/company7.png",
            companyName: "Cloud Masters",
            location: "Gurgaon, India",
        },
        {
            jobRole: "Business Analyst",
            workType: "Onsite",
            salary: "₹9,00,000 - ₹14,00,000",
            companyIcon: "https://example.com/company8.png",
            companyName: "Analyze Pro",
            location: "Kolkata, India",
        },
        {
            jobRole: "Machine Learning Engineer",
            workType: "Remote",
            salary: "₹15,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company9.png",
            companyName: "AI Revolution",
            location: "Bangalore, India",
        },
        {
            jobRole: "Cybersecurity Analyst",
            workType: "Onsite",
            salary: "₹10,00,000 - ₹16,00,000",
            companyIcon: "https://example.com/company10.png",
            companyName: "SecureTech",
            location: "Noida, India",
        },
        {
            jobRole: "Software Engineer",
            workType: "Remote",
            salary: "₹10,00,000 - ₹15,00,000",
            companyIcon: "https://example.com/company1.png",
            companyName: "Tech Solutions",
            location: "Bangalore, India",
        },
        {
            jobRole: "Product Manager",
            workType: "Onsite",
            salary: "₹20,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company2.png",
            companyName: "Innovate Corp",
            location: "Mumbai, India",
        },
        {
            jobRole: "Data Scientist",
            workType: "Hybrid",
            salary: "₹18,00,000 - ₹22,00,000",
            companyIcon: "https://example.com/company3.png",
            companyName: "Data Insights",
            location: "Pune, India",
        },
        {
            jobRole: "UI/UX Designer",
            workType: "Remote",
            salary: "₹8,00,000 - ₹12,00,000",
            companyIcon: "https://example.com/company4.png",
            companyName: "Creative Minds",
            location: "Hyderabad, India",
        },
        {
            jobRole: "Marketing Specialist",
            workType: "Onsite",
            salary: "₹6,00,000 - ₹9,00,000",
            companyIcon: "https://example.com/company5.png",
            companyName: "Market Leaders",
            location: "Delhi, India",
        },
        {
            jobRole: "Full-Stack Developer",
            workType: "Remote",
            salary: "₹12,00,000 - ₹18,00,000",
            companyIcon: "https://example.com/company6.png",
            companyName: "WebWorks",
            location: "Chennai, India",
        },
        {
            jobRole: "DevOps Engineer",
            workType: "Hybrid",
            salary: "₹14,00,000 - ₹20,00,000",
            companyIcon: "https://example.com/company7.png",
            companyName: "Cloud Masters",
            location: "Gurgaon, India",
        },
        {
            jobRole: "Business Analyst",
            workType: "Onsite",
            salary: "₹9,00,000 - ₹14,00,000",
            companyIcon: "https://example.com/company8.png",
            companyName: "Analyze Pro",
            location: "Kolkata, India",
        },
        {
            jobRole: "Machine Learning Engineer",
            workType: "Remote",
            salary: "₹15,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company9.png",
            companyName: "AI Revolution",
            location: "Bangalore, India",
        },
        {
            jobRole: "Cybersecurity Analyst",
            workType: "Onsite",
            salary: "₹10,00,000 - ₹16,00,000",
            companyIcon: "https://example.com/company10.png",
            companyName: "SecureTech",
            location: "Noida, India",
        },
        {
            jobRole: "Software Engineer",
            workType: "Remote",
            salary: "₹10,00,000 - ₹15,00,000",
            companyIcon: "https://example.com/company1.png",
            companyName: "Tech Solutions",
            location: "Bangalore, India",
        },
        {
            jobRole: "Product Manager",
            workType: "Onsite",
            salary: "₹20,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company2.png",
            companyName: "Innovate Corp",
            location: "Mumbai, India",
        },
        {
            jobRole: "Data Scientist",
            workType: "Hybrid",
            salary: "₹18,00,000 - ₹22,00,000",
            companyIcon: "https://example.com/company3.png",
            companyName: "Data Insights",
            location: "Pune, India",
        },
        {
            jobRole: "UI/UX Designer",
            workType: "Remote",
            salary: "₹8,00,000 - ₹12,00,000",
            companyIcon: "https://example.com/company4.png",
            companyName: "Creative Minds",
            location: "Hyderabad, India",
        },
        {
            jobRole: "Marketing Specialist",
            workType: "Onsite",
            salary: "₹6,00,000 - ₹9,00,000",
            companyIcon: "https://example.com/company5.png",
            companyName: "Market Leaders",
            location: "Delhi, India",
        },
        {
            jobRole: "Full-Stack Developer",
            workType: "Remote",
            salary: "₹12,00,000 - ₹18,00,000",
            companyIcon: "https://example.com/company6.png",
            companyName: "WebWorks",
            location: "Chennai, India",
        },
        {
            jobRole: "DevOps Engineer",
            workType: "Hybrid",
            salary: "₹14,00,000 - ₹20,00,000",
            companyIcon: "https://example.com/company7.png",
            companyName: "Cloud Masters",
            location: "Gurgaon, India",
        },
        {
            jobRole: "Business Analyst",
            workType: "Onsite",
            salary: "₹9,00,000 - ₹14,00,000",
            companyIcon: "https://example.com/company8.png",
            companyName: "Analyze Pro",
            location: "Kolkata, India",
        },
        {
            jobRole: "Machine Learning Engineer",
            workType: "Remote",
            salary: "₹15,00,000 - ₹25,00,000",
            companyIcon: "https://example.com/company9.png",
            companyName: "AI Revolution",
            location: "Bangalore, India",
        },
        {
            jobRole: "Cybersecurity Analyst",
            workType: "Onsite",
            salary: "₹10,00,000 - ₹16,00,000",
            companyIcon: "https://example.com/company10.png",
            companyName: "SecureTech",
            location: "Noida, India",
        },
    ];
    
   

  return (
    <div className="job-listing">
      {jobsData.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobListing;