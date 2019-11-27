package com.foodies.controllers.crud;

import com.foodies.models.Donation;
import com.foodies.services.crud.DonationCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/donations")
@RestController
public class DonationCrudController {

    @Autowired
    private DonationCrudService donationCrudService;

    @GetMapping
    public List<Donation> getAll() {
        return donationCrudService.getAll();
    }

    @PostMapping
    public Donation add(@Valid @RequestBody Donation donation) {
        return donationCrudService.add(donation);
    }

    @PutMapping(value = "/{id}")
    public Donation update(@PathVariable("id") Long id, @Valid @RequestBody Donation newDonationData) {
        return donationCrudService.update(donationCrudService.getById(id), newDonationData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        donationCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public Donation getById(@PathVariable Long id) {
        return donationCrudService.getById(id);
    }
}
