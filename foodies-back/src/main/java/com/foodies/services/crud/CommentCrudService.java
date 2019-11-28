package com.foodies.services.crud;

import com.foodies.models.Comment;
import com.foodies.services.common.CrudService;

import java.util.List;

public interface CommentCrudService extends CrudService<Comment> {
    List<Comment> getCommentsByPost(Long id);
}
