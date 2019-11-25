package com.foodies.services.crud.impl;

import com.foodies.models.Comment;
import com.foodies.repositories.CommentRepository;
import com.foodies.services.common.CrudServiceImpl;
import com.foodies.services.crud.CommentCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class CommentCrudServiceImpl extends CrudServiceImpl<Comment> implements CommentCrudService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    protected CrudRepository<Comment, Long> repository() {
        return commentRepository;
    }
}
