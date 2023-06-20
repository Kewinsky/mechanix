package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.discount.DiscountNotFoundException;
import com.mechanix.mechanix.models.Discount;
import com.mechanix.mechanix.payloads.requests.models.UpdateDiscount;
import com.mechanix.mechanix.repositories.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/discount")
public class DiscountController {

    @Autowired
    DiscountRepository discountRepository;

    @GetMapping(path = "/getDiscounts")
    @ResponseBody
    Iterable<Discount> getDiscounts() {
        return discountRepository.findAll();
    }

    @GetMapping(path = "/getDiscountById/{id}")
    Discount getDiscountById(@PathVariable Long id) {
        return discountRepository.findById(id)
                .orElseThrow(() -> new DiscountNotFoundException(id));
    }

    @PostMapping(path = "/addDiscount")
    String addDiscount (@RequestBody Discount discount) {
        discountRepository.save(discount);
        return "Discount added.";
    }

    @PutMapping(path = "/updateDiscount/{id}")
    String updateDiscount(@RequestBody UpdateDiscount discount,
                         @PathVariable Long id){
        return discountRepository.findById(id)
                .map(discount1 -> {
                    discount1.setName(discount.getName());
                    discount1.setDescription(discount.getDescription());
                    discount1.setDiscountPercent(discount.getDiscountPercent());
                    discount1.setActive(discount.getActive());
                    discountRepository.save(discount1);
                    return "Discount updated.";
                })
                .orElseThrow(() -> new DiscountNotFoundException(id));
    }

    @DeleteMapping(path = "/deleteDiscount/{id}")
    String deleteDiscount(@PathVariable Long id) {
        if (!discountRepository.existsById(id)){
            throw new DiscountNotFoundException(id);
        }
        discountRepository.deleteById(id);
        return "Discount deleted.";
    }
}
