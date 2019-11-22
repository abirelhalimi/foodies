package com.foodies.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@SequenceGenerator(name = "COMMENT_SQ", sequenceName = "comment_sequence")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "COMMENT_SQ")
    private Long id;

    private Date date;
    private String text;

    @ManyToOne
    private User user;

    @ManyToOne
    private Recipe recipe;

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

}
