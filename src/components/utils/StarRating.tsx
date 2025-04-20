"use client";

// components/StarRating.tsx
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Star } from "lucide-react";

interface StarRatingProps {
  value: number;
  size?: number;
  readonly?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  value,
  size = 16,
  readonly = true,
}) => {
  return (
    <ReactStars
      count={5}
      value={value}
      edit={!readonly}
      size={size}
      activeColor="#FD8C00"
      emptyIcon={<Star color="#E5E5E5" size={size} className="mr-1" />}
      filledIcon={<Star color="#FD8C00" size={size} className="mr-1" />}
    />
  );
};

export default StarRating;
