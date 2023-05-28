package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.product.ProductNotFoundException;
import com.mechanix.mechanix.models.CustomerDetails;
import com.mechanix.mechanix.payloads.requests.models.UpdateDetails;
import com.mechanix.mechanix.repositories.CustomerDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/customerDetails")
public class CustomerDetailsController {

    private static final Long  USER_ID = 2L;

    @Autowired
    CustomerDetailsRepository customerDetailsRepository;

    @GetMapping(path="/getDetails")
    CustomerDetails getDetails() {
        return customerDetailsRepository.findById(USER_ID)
                .orElseThrow(() -> new ProductNotFoundException(USER_ID));
    }

    @PostMapping(path="/addDetails")
    String addDetails (@RequestBody CustomerDetails details) {
        details.setUser_id(USER_ID);
        customerDetailsRepository.save(details);
        return "Customer details added.";
    }

    @PutMapping("updateDetails")
    String updateProduct(@RequestBody UpdateDetails details){
        return customerDetailsRepository.findById(USER_ID)
                .map(details1 -> {
                    details1.setFirst_name(details.getFirst_name());
                    details1.setLats_name(details.getLats_name());
                    details1.setTelephone(details.getTelephone());
                    customerDetailsRepository.save(details1);
                    return "Customer details updated.";
                })
                .orElseThrow(() -> new ProductNotFoundException(USER_ID));
    }

    @DeleteMapping("/deleteProduct/{id}")
    String deleteProduct(@PathVariable Long id) {
        if (!customerDetailsRepository.existsById(id)){
            throw new ProductNotFoundException(id);
        }
        customerDetailsRepository.deleteById(id);
        return "Customer details deleted.";
    }
}
