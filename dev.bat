@echo off
REM Dev launcher that guarantees Node is on PATH (the machine PATH wasn't
REM refreshed in some parent processes after Node was installed).
set "PATH=C:\Users\bartkarelfrank.d\node;%PATH%"
cd /d "C:\Users\bartkarelfrank.d\Documents\Unwello"
call npm run dev
