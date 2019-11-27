package com.foodies.models;

import javax.persistence.*;

@Entity
@SequenceGenerator(name = "CUISINE_SQ", sequenceName = "cuisine_sequence")
public class Cuisine {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "CUISINE_SQ")
    private Long id;

    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
