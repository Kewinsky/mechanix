package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.customerDetails.DetailsNotFoundException;
import com.mechanix.mechanix.models.CustomerDetails;
import com.mechanix.mechanix.payloads.requests.models.UpdateDetails;
import com.mechanix.mechanix.repositories.CustomerDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/customerDetails")
public class CustomerDetailsController {

    private static final Long  USER_ID = 1L;

    @Autowired
    CustomerDetailsRepository customerDetailsRepository;

    @GetMapping(path = "/getDetails")
    CustomerDetails getDetails() {
        return customerDetailsRepository.findByUserId(USER_ID)
                .orElseThrow(() -> new DetailsNotFoundException(USER_ID));
    }

    @PostMapping(path = "/addDetails")
    String addDetails (@RequestBody CustomerDetails details) {
        details.setUserId(USER_ID);

        customerDetailsRepository.save(details);

        return "Customer details added.";
    }

    @PutMapping(path = "/updateDetails")
    String updateDetails(@RequestBody UpdateDetails details){
        return customerDetailsRepository.findByUserId(USER_ID)
                .map(details1 -> {
                    details1.setFirstName(details.getFirstName());
                    details1.setLatsName(details.getLatsName());
                    details1.setTelephone(details.getTelephone());
                    customerDetailsRepository.save(details1);
                    return "Customer details updated.";
                })
                .orElseThrow(() -> new DetailsNotFoundException(USER_ID));
    }
}
