// import React from "react";
// import "./BlogPage.css";

// const blogs = [
//   {
//     title: "5 Investment Strategies for 2025",
//     date: "January 10, 2025",
//     author: "John Doe",
//     excerpt: "Discover key strategies to optimize your portfolio in the coming year...",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "Understanding Risk Tolerance",
//     date: "December 25, 2024",
//     author: "Jane Smith",
//     excerpt: "Learn how to align your investments with your financial goals and risk profile...",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "Top Sectors to Watch",
//     date: "November 15, 2024",
//     author: "Michael Lee",
//     excerpt: "Find out which sectors are poised for growth in the current economic climate...",
//     image: "https://via.placeholder.com/150",
//   },
// ];

// const popularTopics = [
//   "Portfolio Diversification",
//   "Mutual Funds 101",
//   "Tax Saving Investments",
//   "Long-Term vs Short-Term Gains",
//   "Retirement Planning",
// ];

// const featuredBlog = {
//   title: "Navigating Volatile Markets",
//   date: "December 1, 2024",
//   author: "Sarah Connor",
//   content:
//     "Market volatility can be challenging, but with the right strategies, it can also present opportunities. Learn how to stay calm and capitalize on market movements.",
//   image: "https://via.placeholder.com/300",
// };

// const BlogPage = () => {
//   return (
//     <div className="blog-page">
//       <header className="blog-header">
//         <h1>Investment Insights</h1>
//         <p>
//           Stay updated with the latest trends, strategies, and advice from our
//           financial experts.
//         </p>
//       </header>

//       {/* Featured Blog */}
//       <section className="featured-blog">
//         <div className="media-item">
//           <div className="media-image">
//             <img src={featuredBlog.image} alt={featuredBlog.title} />
//           </div>
//           <div className="media-content">
//             <h2>{featuredBlog.title}</h2>
//             <p className="meta">
//               By {featuredBlog.author} | {featuredBlog.date}
//             </p>
//             <p>{featuredBlog.content}</p>
//           </div>
//         </div>
//       </section>

//       {/* Blog Cards */}
//       <section className="blog-cards">
//         <h2>Latest Articles</h2>
//         <div className="card-list">
//           {blogs.map((blog, index) => (
//             <div key={index} className="blog-card">
//               <img src={blog.image} alt={blog.title} />
//               <div className="card-content">
//                 <h3>{blog.title}</h3>
//                 <p className="meta">
//                   By {blog.author} | {blog.date}
//                 </p>
//                 <p>{blog.excerpt}</p>
//                 <button className="read-more">Read More</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Popular Topics */}
//       <section className="popular-topics">
//         <h2>Popular Topics</h2>
//         <ul className="topic-list">
//           {popularTopics.map((topic, index) => (
//             <li key={index}>{topic}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default BlogPage;
