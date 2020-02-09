package com.foodies.services.crud.impl;

import com.foodies.models.Donation;
import com.foodies.repositories.DonationRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.DonationCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class DonationCrudServiceImpl extends CrudServiceImpl<Donation> implements DonationCrudService {

    @Autowired
    private DonationRepository donationRepository;

    @Override
    protected CrudRepository<Donation, Long> repository() {
        return donationRepository;
    }

    @Override
    public Donation add(Donation donation) {
        donation.setDate(new Date());
        return donationRepository.save(donation);
    }

    @Override
    public List<Donation> getDonationsByRestaurant(Long id) {
        List<Donation> allDonations = donationRepository.findAll();
        List<Donation> userDonations = new ArrayList<>();
        allDonations.forEach(donation -> {
            if (donation.getRestaurant().getId() == id && !donation.isOffer()) {
                userDonations.add(donation);
            }
        });
        return userDonations;
    }

    @Override
    public List<Donation> getAllByRestaurant(Long id) {
        List<Donation> allDonations = donationRepository.findAll();
        List<Donation> userDonations = new ArrayList<>();
        allDonations.forEach(donation -> {
            if (donation.getRestaurant().getId() == id) {
                userDonations.add(donation);
            }
        });
        return userDonations;
    }

    @Override
    public List<Donation> getOffersByRestaurant(Long id) {
        List<Donation> allDonations = donationRepository.findAll();
        List<Donation> userDonations = new ArrayList<>();
        allDonations.forEach(donation -> {
            if (donation.getRestaurant().getId() == id && donation.isOffer()) {
                userDonations.add(donation);
            }
        });
        return userDonations;
    }

    @Override
    public void pickUp(Long id) {
        Donation donation = donationRepository.getOne(id);
        donation.setPickedUp(true);
        donationRepository.save(donation);
    }

}
