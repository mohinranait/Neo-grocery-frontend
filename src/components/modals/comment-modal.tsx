"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setCommentModal } from "@/redux/features/uiSlice";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { Pen, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getCommentsByProductId,
  placeNewComment,
  updateCommentByCommentId,
} from "@/actions/commentApi";
import toast from "react-hot-toast";
import { TProductComment } from "@/types/comment.type";

export type TRatingModal = {
  name: string;
  pId: string;
  image: string;
};

const CommentModal = () => {
  const { commentModalOpen } = useAppSelector((state) => state.ui);
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [getCommentLoading, setGetCommentLoading] = useState(false);
  const [errors, setErrors] = useState<{ comment?: string }>({});

  const [comments, setComments] = useState<TProductComment[]>([]);

  const validateForm = () => {
    const newErrors: { comment?: string } = {};

    if (comment.trim() === "") {
      newErrors.comment = "Comment cannot be empty.";
    } else if (comment.length > 500) {
      newErrors.comment = "Comment cannot exceed 500 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (commentModalOpen?.pId === undefined) return;

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const reviewData = {
        productId: commentModalOpen?.pId,
        rating,
        comment,
      };

      if (comments?.length > 0) {
        // Update existing comment
        await updateCommentByCommentId(reviewData, comments[0]._id);
        toast.success("Review updated successfully!");
      } else {
        await placeNewComment(reviewData);
        toast.success("Review submitted successfully!");
      }
      // Reset form
      handleClose();
    } catch (error) {
      console.error("Failed to submit review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setRating(5);
    setComment("");
    dispatch(setCommentModal(null));
  };

  useEffect(() => {
    (async function () {
      setGetCommentLoading(true);
      try {
        if (commentModalOpen?.pId === undefined) return;
        // You can fetch existing comment data here if needed
        const comments = await getCommentsByProductId(
          commentModalOpen?.pId,
          "auth",
          user?._id
        );

        if (comments?.success) {
          setComments(comments.payload.comments);
        }
      } catch (error) {
        console.log({ error });
      }
      setGetCommentLoading(false);
    })();
  }, [commentModalOpen?.pId, user?._id]);

  console.log({ comments });

  return (
    <Dialog open={Boolean(commentModalOpen)} onOpenChange={handleClose}>
      <DialogContent>
        <div className="space-y-6 overflow-y-auto max-h-[80vh]">
          {/* Product Information */}
          <div className="flex gap-4 p-4 bg-card rounded-lg border">
            <div className="flex-shrink-0">
              <Image
                width={64}
                height={64}
                src={commentModalOpen?.image || "/placeholder.svg"}
                alt={`${commentModalOpen?.name}`}
                className="w-16 h-16 object-cover rounded-md border"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-card-foreground line-clamp-2">
                {commentModalOpen?.name}
              </h3>
            </div>
          </div>

          {getCommentLoading ? (
            <div className="min-h-[150px] flex items-center justify-center">
              <span className="w-10 h-10 rounded-full animate-spin border-r-4 border-t-2 border-gray-700"></span>
            </div>
          ) : comment?.trim() === "" && comments?.length > 0 ? (
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Your Review</h3>
              {comments.map((cmt) => (
                <div
                  key={cmt._id}
                  className="p-4 bg-card rounded-lg border space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <StarRating
                      rating={cmt.rating}
                      onRatingChange={() => {}}
                      readonly
                      size="md"
                    />
                    <span className="text-sm text-muted-foreground">
                      {new Date(cmt.createdAt).toLocaleDateString()}
                    </span>
                    <Button
                      type="button"
                      onClick={() => {
                        setRating(cmt.rating);
                        setComment(cmt.comment);
                      }}
                      className=" h-auto ml-auto size-4 py-3.5"
                    >
                      <Pen />
                    </Button>
                  </div>
                  <p className="text-sm text-foreground">{cmt.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {/* Rating Section */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Give Rating *
                </label>
                <div className="flex items-center flex-wrap gap-3">
                  <div>
                    <StarRating
                      rating={rating}
                      onRatingChange={setRating}
                      size="lg"
                    />
                  </div>
                  {rating > 0 && (
                    <span className="text-sm text-muted-foreground">
                      {rating} out of 5 stars
                    </span>
                  )}
                </div>
              </div>

              {/* Comment Section */}
              <div className="space-y-1 px-1">
                <label className="text-sm font-medium text-foreground">
                  Share your experience
                </label>
                <Textarea
                  placeholder="Write your opinion about this product..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px] resize-none"
                  maxLength={500}
                />
                <div className="text-xs flex justify-between text-muted-foreground text-right">
                  <div>
                    {errors.comment && (
                      <p className="text-sm text-red-600">{errors.comment}</p>
                    )}
                  </div>
                  <p className="text-right">{comment.length}/500</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 bg-transparent"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting || rating === 0}
                  className="flex-1"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : comments?.length > 0
                    ? "Update Review"
                    : "Submit Review"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
}
function StarRating({
  rating,
  onRatingChange,
  readonly = false,
  size = "md",
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          className={cn(
            "transition-colors duration-200",
            !readonly && "hover:scale-110 cursor-pointer",
            readonly && "cursor-default"
          )}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
          onClick={() => !readonly && onRatingChange(star)}
        >
          <Star
            className={cn(
              sizeClasses[size],
              "transition-colors duration-200",
              hoverRating >= star || rating >= star
                ? "fill-yellow-500 text-yellow-500"
                : "fill-none text-muted-foreground"
            )}
          />
        </button>
      ))}
    </div>
  );
}

export default CommentModal;
