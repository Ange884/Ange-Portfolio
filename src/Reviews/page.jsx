'use client';
import { useState } from "react";
import '../styles/reviews.css';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Mugisha I Nora",
      text: "Nziza Ange is a creative developer who makes great mobile and frontends",
      date: "1 May 2025",
      rating: 5,
      img: "/images/nora.png" // replace with your image path
    },
    {
      name: "Jean Paul",
      text: "Nziza is highly motivated and brings fresh ideas to every project",
      date: "15 Apr 2025",
      rating: 4,
      img: "/images/josh.png"
    },
    {
      name: "Alice Uwase",
      text: "Working with Nziza is always a smooth and productive experience",
      date: "30 Mar 2025",
      rating: 5,
      img: "/images/nora.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="reviewsContainer">
      <div className="left-part">
        <h1 className="thoughts">
          What People Talk <br/> About <span className="highlighted">NziZA</span>
        </h1>

        <p className="review-paragraph">
         People who have worked with me describe me as creative, hardworking, and always
          eager to learn. I'm known for asking smart questions, staying focused on my goals, 
          and bringing a positive energy to group work. Whether I’m solving a technical problem
           or designing something new, I'm someone who listens, improves quickly, and gives my
            best effort. Many say they appreciate my reliability, curiosity, and teamwork, which
             make me great to collaborate with.
        </p>
      </div>

      <div className="right-part">
        <div className="carousel">
          <button className="arrow prev" onClick={prevReview}>&lt;</button>

          <div className="review-card">
            <img 
              src={reviews[currentIndex].img} 
              alt={reviews[currentIndex].name} 
              className="profile-img"
            />
            <h2 className="client-name">{reviews[currentIndex].name}</h2>
            <div className="stars-rates">
              {"★".repeat(reviews[currentIndex].rating)}
              {"☆".repeat(5 - reviews[currentIndex].rating)}
            </div>
            <p className="reviewP">{reviews[currentIndex].text}</p>
            <p className="date">{reviews[currentIndex].date}</p>
          </div>

          <button className="arrow prev" onClick={prevReview}>&#8592;</button>  {/* ← */}
          <button className="arrow next" onClick={nextReview}>&#8594;</button>  {/* → */}

        </div>
      </div>
    </div>
  );
}
