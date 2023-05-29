package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.orderDetails.OrderDetailsNotFoundException;
import com.mechanix.mechanix.models.OrderDetails;
import com.mechanix.mechanix.models.OrderItem;
import com.mechanix.mechanix.payloads.requests.models.UpdateOrderStatus;
import com.mechanix.mechanix.repositories.OrderDetailsRepository;
import com.mechanix.mechanix.repositories.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/orderItem")
public class OrderItemController {

    @Autowired
    OrderItemRepository orderItemRepository;

    @GetMapping(path="/getOrderItems/{id}")
    Iterable<OrderItem> getOrderItems(@PathVariable Long id) {
        return orderItemRepository.findByOrderId(id);
    }

    @PostMapping(path="/addItem")
    String addItem (@RequestBody OrderItem order) {
        orderItemRepository.save(order);
        return "Order item added.";
    }
}
