SELECT * FROM EMP;
SELECT *FROM DEPT;
SELECT EMP.EMPNO,DEPT.LOC,EMP.ENAME,DEPT.DEPTNO,DEPT.DNAME
FROM EMP,DEPT
WHERE EMP.DEPTNO = DEPT.DEPTNO;
SELECT ENAME,LOC FROM EMP,DEPT WHERE DEPT.LOC = 'CHICAGO' ;
SELECT e.ENAME, d.LOC
FROM EMP e,DEPT d
WHERE d.DEPTNO=e.DEPTNO
ORDER BY LOC;

select e.ename , c.ename
from emp e , emp c
where e.empno = c.mgr and e.HIREDATE < c.HIREDATE;



