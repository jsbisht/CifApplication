use cif_test;
select * from personal_details order by CID desc;
select * from candidate c,reference_details p  where c.cid= p.cid;
delete from candidate where cid != '';

select * from address_details;
select * from EMPLOYMENT_DETAILS order by cid desc;
select * from employment_break order by cid desc;
select * from candidate order by cid desc;
select * from address_details order by cid desc;
select * from reference_details  order by cid desc;
select * from education_details order by cid desc;
select * from Emergency_details order by cid desc;
select * from ADDITIONAL_INFORMATION order by cid desc;

drop table employment_reference;
select * from employment_reference;

ALTER TABLE PERSONAL_DETAILS change  CHILD_DETAILS  CHILD_DETAILS NVARCHAR(500) ;
alter table ADDITIONAL_INFORMATION drop PROWARENESS_PREV_INTVW_POSITION;
alter  table ADDRESS_DETAILS add DURATION varchar(100);
ALTER TABLE emergency_details Add sugar  varchar(150);
ALTER TABLE ADDITIONAL_INFORMATION change  OTHER_INFORMATION OTHER_INFORMATION_SUGGESTION varchar(1000);
RENAME TABLE Candidate1 TO Candidate;
drop table EMPLOYMENT_BREAK;

GRANT ALL PRIVILEGES ON *.* TO 'PGGM-DEMO2.prowareness.com'@'localhost' WITH GRANT OPTION;
