package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.orderDetails.OrderDetailsNotFoundException;
import com.mechanix.mechanix.models.OrderDetails;
import com.mechanix.mechanix.payloads.requests.models.UpdateOrderStatus;
import com.mechanix.mechanix.repositories.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/orderDetails")
public class OrderDetailsController {

    private static final Long  USER_ID = 1L;

    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    @GetMapping(path = "/getAllOrders")
    Iterable<OrderDetails> getAllOrders() { return orderDetailsRepository.findAll(); }

    @GetMapping(path = "/getOrders")
    Iterable<OrderDetails> getOrders() { return orderDetailsRepository.findByUserId(USER_ID); }

    @GetMapping(path = "/getOrderById/{id}")
    OrderDetails getOrderById(@PathVariable Long id) {
        return orderDetailsRepository.findById(id)
                .orElseThrow(() -> new OrderDetailsNotFoundException(id));
    }

    @PostMapping(path = "/addOrder")
    String addOrder (@RequestBody OrderDetails order) {
        order.setUserId(USER_ID);
        orderDetailsRepository.save(order);
        return "Order added.";
    }

    @PutMapping(path = "/updateOrderStatus/{id}")
    String updateOrderStatus(@PathVariable Long id, @RequestBody UpdateOrderStatus details){
        return orderDetailsRepository.findById(id)
                .map(details1 -> {
                    details1.setStatus(details.getStatus());
                    orderDetailsRepository.save(details1);
                    return "Order status updated.";
                })
                .orElseThrow(() -> new OrderDetailsNotFoundException(id));
    }

    @DeleteMapping(path = "/deleteOrder/{id}")
    String deleteOrder(@PathVariable Long id) {
        if (!orderDetailsRepository.existsById(id)){
            throw new OrderDetailsNotFoundException(id);
        }
        orderDetailsRepository.deleteById(id);
        return "Order deleted.";
    }
}
