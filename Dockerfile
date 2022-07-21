FROM debian:bullseye

RUN \
    apt-get update && \
    apt-get dist-upgrade -no-install-depends && \
    apt-get install -y ufw apache2 git nano snapd && \
    ufw allow 'WWW Full' && \
    sudo snap install core && \
    sudo snap refresh core && \
    sudo snap install --classic certbot && \
    certbot --apache
    systemctl enable apache2 && \
    sudo a2enmod ssl


COPY ./atsflutter/ /usr/local/apache2/htdocs/
