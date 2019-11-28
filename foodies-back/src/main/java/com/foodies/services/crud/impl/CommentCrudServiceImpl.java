package com.foodies.services.crud.impl;

import com.foodies.models.Comment;
import com.foodies.repositories.CommentRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.CommentCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentCrudServiceImpl extends CrudServiceImpl<Comment> implements CommentCrudService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    protected CrudRepository<Comment, Long> repository() {
        return commentRepository;
    }

    @Override
    public List<Comment> getCommentsByPost(Long id) {
        List<Comment> allComments = commentRepository.findAll();
        List<Comment> postComments = new ArrayList<>();
        allComments.forEach(comment -> {
            if (comment.getRecipe().getId() == id) {
                postComments.add(comment);
            }
        });
        return postComments;
    }
}
