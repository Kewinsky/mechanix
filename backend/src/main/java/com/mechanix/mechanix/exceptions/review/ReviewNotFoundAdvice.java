package com.mechanix.mechanix.exceptions.review;

import com.mechanix.mechanix.exceptions.discount.DiscountNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ReviewNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ReviewNotFoundException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    String discountNotFoundHandler(ReviewNotFoundException ex) {
        return ex.getMessage();
    }
}
