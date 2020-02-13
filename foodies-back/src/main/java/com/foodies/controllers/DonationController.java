package com.foodies.controllers;

import com.foodies.models.Code;
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

    @GetMapping(value = "/all")
    public List<Donation> getAll() {
        return donationCrudService.getAll();
    }

    @GetMapping(value = "/offer")
    public List<Donation> getOffers() {
        return donationCrudService.getOffers();
    }

    @GetMapping(value = "/donation")
    public List<Donation> getDonations() {
        return donationCrudService.getDonations();
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

    @PostMapping(value = "/unlike/{id}")
    public void unlike(@PathVariable Long id) {
        donationCrudService.unlike(id);
    }

    @GetMapping(value = "/claimOffer/{id}")
    public Code claimOffer(@PathVariable Long id) {
        return donationCrudService.claimOffer(id);
    }

    @GetMapping(value = "/claimDonation/{id}")
    public Code claimDonation(@PathVariable Long id) {
        return donationCrudService.claimOffer(id);
    }

}
