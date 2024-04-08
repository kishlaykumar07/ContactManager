package com.task.Contact.service;

import com.task.Contact.dao.ContactDao;
import com.task.Contact.entity.ContactDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactDao contactDao;

    public ContactDetails saveContact( ContactDetails contact) {
        return contactDao.save(contact);
    }

    public List<ContactDetails> getContacts() {
        List<ContactDetails> contacts = new ArrayList<>();
        contactDao.findAll().forEach(contacts::add);
        return contacts;
    }

    public ContactDetails getContact(Integer contactId) {
        return contactDao.findById(contactId).orElseThrow();
    }

    public void deleteContact(Integer contactId) {
        contactDao.deleteById(contactId);
    }


    public ContactDetails updateContact(ContactDetails contact) {
        contactDao.findById(contact.getContactId()).orElseThrow();
        return contactDao.save(contact);
    }
}
