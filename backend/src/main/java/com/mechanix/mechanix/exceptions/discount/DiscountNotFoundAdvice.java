package com.mechanix.mechanix.exceptions.discount;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class DiscountNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(DiscountNotFoundException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    String discountNotFoundHandler(DiscountNotFoundException ex) {
        return ex.getMessage();
    }
}
