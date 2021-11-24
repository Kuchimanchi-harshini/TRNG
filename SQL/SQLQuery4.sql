use ETG;
select department_name,department_id
from departments
where location_id=
(
select location_id
from departments
where departments_id=30;