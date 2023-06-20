package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.review.ReviewNotFoundException;
import com.mechanix.mechanix.models.Review;
import com.mechanix.mechanix.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping(path = "/getReviewsByProductId/{id}")
    @ResponseBody
    Iterable<Review> getReviewsByProductId(@PathVariable Long id) {
        return reviewRepository.findByProductId(id);
    }

    @GetMapping(path = "/getReviewById/{id}")
    Review getReviewById(@PathVariable Long id) {
        return reviewRepository.findById(id)
                .orElseThrow(() -> new ReviewNotFoundException(id));
    }

    @PostMapping(path = "/addReview")
    String addReview (@RequestBody Review review) {
        reviewRepository.save(review);
        return "Review added.";
    }

    @DeleteMapping(path = "/deleteReview/{id}")
    String deleteReview(@PathVariable Long id) {
        if (!reviewRepository.existsById(id)){
            throw new ReviewNotFoundException(id);
        }
        reviewRepository.deleteById(id);
        return "Review deleted.";
    }
}
