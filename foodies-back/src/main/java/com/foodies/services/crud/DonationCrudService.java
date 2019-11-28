package com.foodies.services.crud;

import com.foodies.models.Donation;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface DonationCrudService extends CrudService<Donation> {
    List<Donation> getAllByRestaurant(Long id);
}
