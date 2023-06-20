package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.customerAddress.AddressNotFoundException;
import com.mechanix.mechanix.models.CustomerAddress;
import com.mechanix.mechanix.payloads.requests.models.UpdateAddress;
import com.mechanix.mechanix.repositories.CustomerAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/customerAddress")
public class CustomerAddressController {

    private static final Long  USER_ID = 1L;

    @Autowired
    CustomerAddressRepository customerAddressRepository;

    @GetMapping(path = "/getAddress")
    CustomerAddress getAddress() {
        return customerAddressRepository.findByUserId(USER_ID)
                .orElseThrow(() -> new AddressNotFoundException(USER_ID));
    }

    @PostMapping(path = "/addAddress")
    String addAddress (@RequestBody CustomerAddress address) {
        address.setUserId(USER_ID);

        customerAddressRepository.save(address);

        return "Customer address added.";
    }

    @PutMapping(path = "/updateAddress")
    String updateAddress(@RequestBody UpdateAddress address){
        return customerAddressRepository.findByUserId(USER_ID)
                .map(address1 -> {
                    address1.setStreetAddress(address.getStreetAddress());
                    address1.setPostalCode(address.getPostalCode());
                    address1.setCity(address.getCity());
                    address1.setCountry(address.getCountry());
                    customerAddressRepository.save(address1);
                    return "Customer address updated.";
                })
                .orElseThrow(() -> new AddressNotFoundException(USER_ID));
    }
}
