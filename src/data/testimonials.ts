export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  location: string
  avatar: string
  quote: string
  rating: number // 1–5
  userType: "student" | "worker" | "company" | "contractor"
  featured?: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  // ============================================
  // WORKER TESTIMONIALS
  // ============================================
  {
    id: "t1",
    name: "Rajesh Kumar",
    role: "Senior Mason",
    location: "Ahmedabad, Gujarat",
    avatar: "/images/testimonials/rajesh-kumar.jpg",
    quote:
      "I found 3 long-term projects in 2 months through BuildForce. The platform is easy to use even on my phone, and payments from companies have always been on time. Best decision for my career.",
    rating: 5,
    userType: "worker",
    featured: true,
  },
  {
    id: "t2",
    name: "Mohammed Ashraf",
    role: "Certified Electrician",
    location: "Mumbai, Maharashtra",
    avatar: "/images/testimonials/mohammed-ashraf.jpg",
    quote:
      "Working as a freelance electrician was tough before. Now I get verified job offers directly on the app with clear salary and location. My monthly income has doubled in 6 months.",
    rating: 5,
    userType: "worker",
    featured: true,
  },
  {
    id: "t3",
    name: "Suresh Patel",
    role: "Heavy Equipment Operator",
    location: "Surat, Gujarat",
    avatar: "/images/testimonials/suresh-patel.jpg",
    quote:
      "I uploaded my crane operator certification and started getting interview calls from top construction firms within a week. The verification badge gives companies confidence in my skills.",
    rating: 5,
    userType: "worker",
  },
  {
    id: "t4",
    name: "Vinod Yadav",
    role: "Welder",
    location: "Pune, Maharashtra",
    avatar: "/images/testimonials/vinod-yadav.jpg",
    quote:
      "The portfolio feature helped me showcase my past welding work with photos. Companies trust me before even meeting me. Got hired by L&T last month for a big infrastructure project.",
    rating: 4,
    userType: "worker",
  },

  // ============================================
  // STUDENT TESTIMONIALS
  // ============================================
  {
    id: "t5",
    name: "Priya Sharma",
    role: "Civil Engineering Student",
    company: "Nirma University",
    location: "Ahmedabad, Gujarat",
    avatar: "/images/testimonials/priya-sharma.jpg",
    quote:
      "BuildForce helped me land a 6-month internship at a top construction firm right after my 6th semester. The placement tracking feature kept me updated on every step.",
    rating: 5,
    userType: "student",
    featured: true,
  },
  {
    id: "t6",
    name: "Arjun Mehta",
    role: "B.Tech Civil Final Year",
    company: "VJTI Mumbai",
    location: "Mumbai, Maharashtra",
    avatar: "/images/testimonials/arjun-mehta.jpg",
    quote:
      "The training resources section is a goldmine. I learned AutoCAD and Revit for free through BuildForce's partner courses, which directly helped me get my first job offer at ₹6.5 LPA.",
    rating: 5,
    userType: "student",
  },
  {
    id: "t7",
    name: "Sneha Reddy",
    role: "Diploma in Construction Management",
    company: "Government Polytechnic Hyderabad",
    location: "Hyderabad, Telangana",
    avatar: "/images/testimonials/sneha-reddy.jpg",
    quote:
      "As a female student in construction, finding the right opportunities felt impossible. BuildForce connected me with companies that value diversity. I now work as a site engineer trainee.",
    rating: 5,
    userType: "student",
  },

  // ============================================
  // COMPANY / CONTRACTOR TESTIMONIALS
  // ============================================
  {
    id: "t8",
    name: "Kiran Desai",
    role: "HR Head",
    company: "Shapoorji Pallonji Construction",
    location: "Mumbai, Maharashtra",
    avatar: "/images/testimonials/kiran-desai.jpg",
    quote:
      "Hiring 200+ skilled workers for our Bandra project would have taken 3 months traditionally. With BuildForce's verified worker network and filtering tools, we did it in 3 weeks.",
    rating: 5,
    userType: "company",
    featured: true,
  },
  {
    id: "t9",
    name: "Ramesh Agarwal",
    role: "Founder & MD",
    company: "Agarwal Constructions Pvt Ltd",
    location: "Jaipur, Rajasthan",
    avatar: "/images/testimonials/ramesh-agarwal.jpg",
    quote:
      "The applicant management dashboard is a game-changer for small construction firms like ours. We've reduced hiring costs by 60% and never miss a qualified candidate.",
    rating: 5,
    userType: "company",
    featured: true,
  },
  {
    id: "t10",
    name: "Anjali Iyer",
    role: "Project Manager",
    company: "Brigade Group",
    location: "Bengaluru, Karnataka",
    avatar: "/images/testimonials/anjali-iyer.jpg",
    quote:
      "The worker search filters by skill, experience, and location are incredibly precise. We sourced an entire team of finish-work specialists in 4 days for our luxury project.",
    rating: 5,
    userType: "company",
  },
  {
    id: "t11",
    name: "Vikram Singh",
    role: "Independent Contractor",
    company: "Singh Builders",
    location: "Lucknow, Uttar Pradesh",
    avatar: "/images/testimonials/vikram-singh.jpg",
    quote:
      "As a contractor bidding on government projects, I needed reliable labor fast. BuildForce's project marketplace and matching system helped me win 3 contracts last quarter.",
    rating: 4,
    userType: "contractor",
  },
  {
    id: "t12",
    name: "Deepak Joshi",
    role: "Operations Director",
    company: "Tata Projects Ltd",
    location: "Pune, Maharashtra",
    avatar: "/images/testimonials/deepak-joshi.jpg",
    quote:
      "The analytics dashboard gives us real insights into our hiring funnel. We can finally measure recruitment ROI for each project site. Highly recommended for large enterprises.",
    rating: 5,
    userType: "company",
  },
]

// Helper: featured testimonials for homepage carousel
export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.featured)

// Helper: filter by user type
export const getTestimonialsByType = (type: Testimonial["userType"]) =>
  TESTIMONIALS.filter((t) => t.userType === type)