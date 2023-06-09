package com.mechanix.mechanix.exceptions.orderItem;

import com.mechanix.mechanix.exceptions.orderDetails.OrderDetailsNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class OrderItemNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(OrderItemNotFoundException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    String orderDetailsNotFoundHandler(OrderItemNotFoundException ex) {
        return ex.getMessage();
    }
}
