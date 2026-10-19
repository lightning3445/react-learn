// project using components and props
import React from 'react'
import Card from './components/card'
import User from './components/user'

// const App = () => {
//   const arr=[10,20,30,40]
//   return(
//     <div>
//       <Card />
//       {arr.map(function(a){
//         return a
//       })}
//     </div>
//   )
// }


// array

const App = () => {
  const jobOpenings = [
    {
        brandLogo: "https://logo.clearbit.com/google.com",
        companyName: "Google",
        datePosted: "2 days ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Entry Level",
        pay: "$65/hour",
        location: "Bangalore, India"
    },
    {
        brandLogo: "https://logo.clearbit.com/amazon.com",
        companyName: "Amazon",
        datePosted: "3 days ago",
        post: "Software Development Engineer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$60/hour",
        location: "Hyderabad, India"
    },
    {
        brandLogo: "https://logo.clearbit.com/meta.com",
        companyName: "Meta",
        datePosted: "1 day ago",
        post: "Frontend Engineer",
        tag1: "Full Time",
        tag2: "Entry Level",
        pay: "$70/hour",
        location: "Mumbai, India"
    },
    {
        brandLogo: "https://logo.clearbit.com/apple.com",
        companyName: "Apple",
        datePosted: "5 days ago",
        post: "iOS Software Engineer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$75/hour",
        location: "Bangalore, India"
    },
    {
        brandLogo: "https://logo.clearbit.com/netflix.com",
        companyName: "Netflix",
        datePosted: "4 days ago",
        post: "Backend Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$80/hour",
        location: "Mumbai, India"
    },
    {
        brandLogo: "https://logo.clearbit.com/microsoft.com",
        companyName: "Microsoft",
        datePosted: "6 days ago",
        post: "Cloud Software Engineer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$68/hour",
        location: "Hyderabad, India"
    },
    {
        brandLogo: "https://logo.clearbit.com/oracle.com",
        companyName: "Oracle",
        datePosted: "8 days ago",
        post: "Database Administrator",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$70/hour",
        location: "Mumbai, India"
    },
    {
        brandLogo: "https://logo.clearbit.com/nvidia.com",
        companyName: "NVIDIA",
        datePosted: "3 days ago",
        post: "AI Software Engineer",
        tag1: "Full Time",
        tag2: "Entry Level",
        pay: "$72/hour",
        location: "Pune, India"
    },
    {
        brandLogo: "https://logo.clearbit.com/ibm.com",
        companyName: "IBM",
        datePosted: "7 days ago",
        post: "Cloud Developer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$62/hour",
        location: "Bangalore, India"
    },
    {
        brandLogo: "https://logo.clearbit.com/adobe.com",
        companyName: "Adobe",
        datePosted: "2 days ago",
        post: "Full Stack Developer",
        tag1: "Full Time",
        tag2: "Entry Level",
        pay: "$66/hour",
        location: "Noida, India"
    }
];
console.log(jobOpenings)
  return(
    <div className='parent'>
      {jobOpenings.map(function(a,idx){
        return <div key={idx}>
          <Card company={a.companyName}/>
        </div>
        // same way u can access other key also and print it to the card
      })}
    </div>
  )
}
export default App
