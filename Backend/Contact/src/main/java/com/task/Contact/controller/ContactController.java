package com.task.Contact.controller;


import com.task.Contact.entity.ContactDetails;
import com.task.Contact.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/save/contact")
    public ContactDetails saveContact(@RequestBody ContactDetails contact) {
        return contactService.saveContact(contact);
    }

    @GetMapping("/get/contact")
    public List<ContactDetails> getContacts() {
        return contactService.getContacts();
    }

    @GetMapping("/get/contact/{contactId}")
    public ContactDetails getContact(@PathVariable Integer contactId) {
        return contactService.getContact(contactId);
    }

    @DeleteMapping("/delete/contact/{contactId}")
    public void deleteContact(@PathVariable Integer contactId) {
        contactService.deleteContact(contactId);
    }

    @PutMapping("/update/contact")
    public ContactDetails updateContact(@RequestBody ContactDetails contact) {
        return contactService.updateContact(contact);
    }
}
