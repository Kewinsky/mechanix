package com.mechanix.mechanix.exceptions.orderDetails;

import com.mechanix.mechanix.exceptions.customerDetails.DetailsNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class OrderDetailsNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(OrderDetailsNotFoundException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    String orderDetailsNotFoundHandler(OrderDetailsNotFoundException ex) {
        return ex.getMessage();
    }
}
