package com.foodies.controllers;

import com.foodies.models.Donation;
import com.foodies.services.crud.DonationCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/donate")
@RestController
public class DonationController {

    @Autowired
    private DonationCrudService donationCrudService;

    @GetMapping(value = "/donation/{id}")
    public List<Donation> getDonationsByRestaurant(@PathVariable("id") Long id) {
        return donationCrudService.getDonationsByRestaurant(id);
    }

    @GetMapping(value = "/{id}")
    public List<Donation> getAllByRestaurant(@PathVariable("id") Long id) {
        return donationCrudService.getAllByRestaurant(id);
    }

    @GetMapping(value = "/offers/{id}")
    public List<Donation> getOffersByRestaurant(@PathVariable("id") Long id) {
        return donationCrudService.getOffersByRestaurant(id);
    }

    @PostMapping
    public Donation add(@Valid @RequestBody Donation donation) {
        return donationCrudService.add(donation);
    }

    @PostMapping("/{id}")
    public void pickUp(@PathVariable("id") Long id) {
        donationCrudService.pickUp(id);
    }

    @PutMapping(value = "/{id}")
    public Donation edit(@PathVariable("id") Long id, @Valid @RequestBody Donation donation) {
        return donationCrudService.update(donationCrudService.getById(id), donation);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        donationCrudService.delete(id);
    }

    @PostMapping(value = "/donation/like/{id}")
    public void likeDonation(@PathVariable Long id) {
        donationCrudService.like(id);
    }

}
