---
Layout: default
Title: "Natural and Surrogate Keys "
Date: 23-09-2019
---

# What are natural keys?

A natural key (also known as business key[1]) is a type of unique key in a database formed of attributes that exist and are used in the external world outside the database (i.e. in the business domain or domain of discourse).[2] In the relational model of data, a natural key is a candidate key and is therefore a functional determinant for all attributes in a relation. A natural key is sometimes called domain key.[3]

A natural key serves two complementary purposes: it provides a means of identification for data and it imposes a rule, specifically a uniqueness constraint, to ensure that data remains unique within an information system. The uniqueness constraint assures uniqueness of data within a certain technical context (e.g. a set of values in a table, file or relation variable) by rejecting input of any data that would otherwise violate the constraint. This means that the user can rely on a guaranteed correspondence between facts identified by key values recorded in a system and the external domain of discourse (a single version of the truth).

Examples of natural keys could include:

Purchase Order number
Flight number
Login name
Vehicle registration number
Social Security number
Passport number


# What are Surrogate keys?

A surrogate key (or synthetic key, entity identifier, system-generated key, database sequence number, factless key, technical key, or arbitrary unique identifier[citation needed]) in a database is a unique identifier for either an entity in the modeled world or an object in the database. The surrogate key is not derived from application data, unlike a natural (or business) key which is derived from application data.

An important distinction between a surrogate and a primary key depends on whether the database is a current database or a temporal database. Since a current database stores only currently valid data, there is a one-to-one correspondence between a surrogate in the modeled world and the primary key of the database. In this case the surrogate may be used as a primary key, resulting in the term surrogate key. In a temporal database, however, there is a many-to-one relationship between primary keys and the surrogate. Since there may be several objects in the database corresponding to a single surrogate, we cannot use the surrogate as a primary key; another attribute is required, in addition to the surrogate, to uniquely identify each object.

Although Hall et al. (1976) say nothing about this, others[specify] have argued that a surrogate should have the following characteristics:

The value is unique system-wide, hence never reused
The value is system generated
The value is not manipulable by the user or application
The value contains no semantic meaning
The value is not visible to the user or application
The value is not composed of several values from different domains.