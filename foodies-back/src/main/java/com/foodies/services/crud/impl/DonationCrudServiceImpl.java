package com.foodies.services.crud.impl;

import com.foodies.models.Donation;
import com.foodies.repositories.DonationRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.DonationCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class DonationCrudServiceImpl extends CrudServiceImpl<Donation> implements DonationCrudService {

    @Autowired
    private DonationRepository donationRepository;

    @Override
    protected CrudRepository<Donation, Long> repository() {
        return donationRepository;
    }
}
