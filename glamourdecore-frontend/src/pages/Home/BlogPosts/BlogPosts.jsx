import React, { useState, useEffect, useRef } from "react";
import "./BlogPosts.scss";
import { FiArrowUpRight } from "react-icons/fi";

import img1 from "../../../assets/images/home/blog1.png";
import img2 from "../../../assets/images/home/blog2.png";
import img3 from "../../../assets/images/home/blog3.png";
import img4 from "../../../assets/images/home/blog4.png";
import img5 from "../../../assets/images/home/blog5.png";

const blogs = [
  {
    date: "2019 | 12 | 22",
    title: "Round Glass Jars Vs. Square Glass Jars for Food Storage",
    desc:
      "A company that manufactures glass bottles for beverages will have a smaller environmental impact.Comparing the environmental impact of different packaging materials.",
    image:
      img2,
  },
  {
    date: "2023 | 10 | 12",
    title: "How to Start Your Sauce Business in 11 Steps?",
    desc:
      "Roetell is one of the leading manufacturers and suppliers of glass bottles.Comparing the environmental impact of different packaging materials.",
    image:
      img3,
  },
  {
    date: "2023 | 10 | 31",
    title: "5 Factors To Consider For Your Product Packaging",
    desc:
      "Effective product packaging plays a vital role in attracting customers.Comparing the environmental impact of different packaging materials.",
    image:
      img4,
  },
  {
    date: "2024 | 01 | 05",
    title: "Why Premium Glass Packaging Matters",
    desc:
      "Premium packaging enhances brand perception and product safety.Comparing the environmental impact of different packaging materials.",
    image:
      img5,
  },
  {
    date: "2024 | 01 | 15",
    title: "Eco-Friendly Packaging Trends 2024",
    desc:
      "Sustainable materials are becoming the new standard in packaging.Comparing the environmental impact of different packaging materials.",
    image:
      img2,
  },
  {
    date: "2024 | 01 | 25",
    title: "Glass vs Plastic: Which is Better?",
    desc:
      "Comparing the environmental impact of different packaging materials.Comparing the environmental impact of different packaging materials.",
    image:
      img3,
  },



  // REPEAT 
  {
    date: "2019 | 12 | 22",
    title: "Round Glass Jars Vs. Square Glass Jars for Food Storage",
    desc:
      "A company that manufactures glass bottles for beverages will have a smaller environmental impact.Comparing the environmental impact of different packaging materials.",
    image:
      img2,
  },
  {
    date: "2023 | 10 | 12",
    title: "How to Start Your Sauce Business in 11 Steps?",
    desc:
      "Roetell is one of the leading manufacturers and suppliers of glass bottles.Comparing the environmental impact of different packaging materials.",
    image:
      img3,
  },
  {
    date: "2023 | 10 | 31",
    title: "5 Factors To Consider For Your Product Packaging",
    desc:
      "Effective product packaging plays a vital role in attracting customers.Comparing the environmental impact of different packaging materials.",
    image:
      img4,
  },
  {
    date: "2024 | 01 | 05",
    title: "Why Premium Glass Packaging Matters",
    desc:
      "Premium packaging enhances brand perception and product safety.Comparing the environmental impact of different packaging materials.",
    image:
      img5,
  },
  {
    date: "2024 | 01 | 15",
    title: "Eco-Friendly Packaging Trends 2024",
    desc:
      "Sustainable materials are becoming the new standard in packaging.Comparing the environmental impact of different packaging materials.",
    image:
      img2,
  },
  {
    date: "2024 | 01 | 25",
    title: "Glass vs Plastic: Which is Better?",
    desc:
      "Comparing the environmental impact of different packaging materials.Comparing the environmental impact of different packaging materials.",
    image:
      img3,
  },
];

const BlogPosts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const [allBlogs, setAllBlogs] = useState([...blogs, ...blogs, ...blogs]); // Triple the blogs for smooth infinite

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      // Mobile: slide by 1 card (100%)
      const nextIndex = currentIndex + 1;

      // If we're at the middle section (original blogs), just slide normally
      if (nextIndex < blogs.length * 2) {
        setCurrentIndex(nextIndex);
      } else {
        // When reaching near end of tripled blogs, reset to middle without animation
        setCurrentIndex(blogs.length);
      }
    } else {
      // Desktop: slide by 1 card (3 cards visible)
      const nextIndex = currentIndex + 1;

      // If we can show 3 cards from current position
      if (nextIndex + 3 < blogs.length * 2) {
        setCurrentIndex(nextIndex);
      } else {
        // Reset to middle without animation
        setCurrentIndex(blogs.length);
      }
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      // If at start, go to middle of tripled blogs
      setCurrentIndex(blogs.length * 2 - 3);
    }
  };

  // Calculate transform based on device
  const getTransform = () => {
    if (isMobile) {
      // Mobile: move by 100% per card
      return `translateX(-${currentIndex * 100}%)`;
    } else {
      // Desktop: move by (card width + gap)
      // Card width is 32%, gap is ~4.5% of container (15px)
      return `translateX(-${currentIndex * (32 + 1.85)}%)`;
    }
  };

  return (
    <section className="blog-section" ref={sectionRef}>
      <div className="blog-wrapper">

        {/* HEADER */}
        <div className={`blog-header ${inView ? "animate" : ""}`}>
          <div className="blog-title">
            <span>OUR BLOGS</span>
            <h2>
              BLOG POSTS
              <span className="underline" />
            </h2>
          </div>

          <div className="all-blogs">
            All blogs <FiArrowUpRight />
          </div>
        </div>

        {/* CONTENT */}
        <div className="blog-content">

          {/* LEFT FIXED IMAGE */}
          <div
            className={`blog-fixed-image ${inView ? "animate" : ""}`}
            style={{ backgroundImage: `url(${img1})` }}
          />

          {/* SLIDER */}
          <div className={`blog-slider ${inView ? "animate" : ""}`}>
            <div
              className="slider-track"
              style={{
                transform: getTransform(),
                transition: 'transform 0.5s ease'
              }}
            >
              {allBlogs.map((blog, i) => (
                <div className={`blog-card ${inView ? "animate" : ""}`} key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  />
                  <div className="card-content">
                    <span className="date">{blog.date}</span>
                    <h4>{blog.title}</h4>
                    <p>{blog.desc}</p>
                    <span className="read-more">
                      READ FULL BLOG <FiArrowUpRight />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ARROW - BOTTOM RIGHT AFTER SLIDER */}
            <button className="slider-arrow" onClick={nextSlide}>
              <FiArrowUpRight />
            </button>
          </div>
        </div>

        {/* NEW: Mobile "All blogs" button at bottom center */}
        <div className={`mobile-all-blogs ${inView ? "animate" : ""}`}>
          All blogs <FiArrowUpRight />
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;