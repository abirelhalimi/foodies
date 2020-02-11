package com.foodies.services.crud;

import com.foodies.models.Donation;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface DonationCrudService extends CrudService<Donation> {
    List<Donation> getDonationsByRestaurant(Long id);
    void pickUp(Long id);
    List<Donation> getOffersByRestaurant(Long id);
    List<Donation> getAllByRestaurant(Long id);
    void like(Long id);
    void unlike(Long id);
    List<Donation> getOffers();
    List<Donation> getDonations();
}
