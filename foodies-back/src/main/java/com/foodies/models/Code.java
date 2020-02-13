package com.foodies.models;

import javax.persistence.*;

@Entity
@SequenceGenerator(name = "CODE_SQ", sequenceName = "code_sequence")
public class Code {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "CODE_SQ")
    private Long id;

    @ManyToOne
    private Donation donation;

    private String code;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Donation getDonation() {
        return donation;
    }

    public void setDonation(Donation donation) {
        this.donation = donation;
    }
}
