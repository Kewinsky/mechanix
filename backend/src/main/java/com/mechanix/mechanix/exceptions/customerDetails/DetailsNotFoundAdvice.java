package com.mechanix.mechanix.exceptions.customerDetails;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class DetailsNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(DetailsNotFoundException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    String detailsNotFoundHandler(DetailsNotFoundException ex) {
        return ex.getMessage();
    }
}
