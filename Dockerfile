FROM ubuntu:14.04
MAINTAINER TJ Simons <t.simons88@gmail.com>
RUN rm -rf node_modules
RUN npm cache clear
RUN npm install
RUN gulp js
RUN gulp css