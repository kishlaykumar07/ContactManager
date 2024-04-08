package com.task.Contact.dao;

import com.task.Contact.entity.ContactDetails;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactDao extends CrudRepository<ContactDetails, Integer> {

}
