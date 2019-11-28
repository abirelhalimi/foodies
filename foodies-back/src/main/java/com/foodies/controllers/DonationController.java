package com.foodies.controllers;

import com.foodies.models.Donation;
import com.foodies.services.crud.DonationCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/donate")
public class DonationController {

    @Autowired
    private DonationCrudService donationCrudService;

    @GetMapping(value = "/{id}")
    public List<Donation> getDonationsByUser(@PathVariable("id") Long id) {
        return donationCrudService.getAllByRestaurant(id);
    }

    @PostMapping
    public Donation add(@Valid @RequestBody Donation donation) {
        return donationCrudService.add(donation);
    }

    @PutMapping(value = "/{id}")
    public Donation edit(@PathVariable("id") Long id, @Valid @RequestBody Donation donation) {
        return donationCrudService.update(donationCrudService.getById(id), donation);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        donationCrudService.delete(id);
    }
}