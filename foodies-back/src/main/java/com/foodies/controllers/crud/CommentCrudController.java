package com.foodies.controllers.crud;

import com.foodies.models.Comment;
import com.foodies.services.crud.CommentCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/api/comments")
@RestController
public class CommentCrudController {

    @Autowired
    private CommentCrudService commentCrudService;

    @GetMapping
    public List<Comment> getAll() {
        return commentCrudService.getAll();
    }

    @PostMapping
    public Comment add(@Valid @RequestBody Comment comment) {
        return commentCrudService.add(comment);
    }

    @PutMapping(value = "/{id}")
    public Comment update(@PathVariable("id") Long id, @Valid @RequestBody Comment newCommentData) {
        return commentCrudService.update(commentCrudService.getById(id), newCommentData);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        commentCrudService.delete(id);
    }

    @GetMapping(value = "/{id}")
    public Comment getById(@PathVariable Long id) {
        return commentCrudService.getById(id);
    }
}
