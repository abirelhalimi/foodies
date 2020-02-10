package com.foodies.controllers;

import com.foodies.models.Comment;
import com.foodies.services.crud.CommentCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/comment")
@RestController
public class CommentController {

    @Autowired
    private CommentCrudService commentCrudService;

    @GetMapping(value = "/{id}")
    public List<Comment> getCommentsByPost(@PathVariable("id") Long id) {
        return commentCrudService.getCommentsByPost(id);
    }

    @GetMapping(value = "/{idComment}")
    public Comment getComment(@PathVariable("idComment") Long idComment) {
        return commentCrudService.getById(idComment);
    }

    @PostMapping
    public Comment add(@Valid @RequestBody Comment comment) {
        return commentCrudService.add(comment);
    }

    @PostMapping(value = "/like/{id}")
    public void like(@PathVariable Long id) {
        commentCrudService.like(id);
    }

    @PutMapping(value = "/{id}")
    public Comment edit(@PathVariable("id") Long id, @Valid @RequestBody Comment comment) {
        return commentCrudService.update(commentCrudService.getById(id), comment);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        commentCrudService.delete(id);
    }
}
