package com.task.Contact.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ContactDetails")

public class ContactDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer contactId;


    private String name;

    @Column(unique = true) 


    public ContactDetails(){}

    public Integer getContactId() {
        return contactId;
    }

    public void setContactId(Integer contactId) {
        this.contactId = contactId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
